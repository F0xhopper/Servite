import { Resend } from "resend";

import { contactDetails } from "@/lib/contact-details";
import {
  renderHtml,
  renderSubject,
  renderText,
  validateSubmission,
} from "@/lib/contact-message";

/**
 * Contact form endpoint.
 *
 * Sends through Resend, which needs a verified sending domain. Verify a
 * subdomain (`send.example.org`) rather than the root: a domain carries only
 * one SPF record, so adding Resend's alongside an existing mail provider's on
 * the root breaks authentication for both. A subdomain gets its own SPF and
 * DKIM and leaves the MX records for the real mailbox alone.
 *
 * Configuration (see `.env.example`):
 *   RESEND_API_KEY     — server-side only, never NEXT_PUBLIC_.
 *   CONTACT_FROM_EMAIL — an address at the verified sending domain.
 *   CONTACT_TO_EMAIL   — where enquiries land; defaults to the published address.
 *
 * With the first two unset the route answers 503 and the form falls back to
 * opening the visitor's mail client, so the page still works before the domain
 * is live.
 */

/** Resend rejects unverified senders, so the address has to come from config. */
function readConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? contactDetails.email;

  if (!apiKey || !from) {
    return null;
  }
  return { apiKey, from, to };
}

/**
 * A small throttle to keep a bored visitor from emptying the send quota.
 *
 * In-memory, so on a serverless host each instance counts separately and the
 * window resets on a cold start. That is fine for what this is: a speed bump
 * in front of a form that a handful of people use a week, not a security
 * control. The honeypot below does more work against actual bots.
 */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT.windowMs;

  // Sweep expired entries so the map cannot grow without bound.
  for (const [entryKey, times] of recentSubmissions) {
    const live = times.filter((time) => time > cutoff);
    if (live.length === 0) {
      recentSubmissions.delete(entryKey);
    } else {
      recentSubmissions.set(entryKey, live);
    }
  }

  const times = recentSubmissions.get(key) ?? [];
  if (times.length >= RATE_LIMIT.max) {
    return true;
  }

  recentSubmissions.set(key, [...times, now]);
  return false;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "invalid-json", message: "Could not read that submission." },
      { status: 400 }
    );
  }

  // Honeypot: a field hidden from people and irresistible to form-filling bots.
  // Answer 200 so the bot records a success and does not come back to retry.
  const honeypot = (body as Record<string, unknown> | null)?.website;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return Response.json({ ok: true });
  }

  const validation = validateSubmission(body);
  if (!validation.ok) {
    return Response.json(
      { error: "invalid", errors: validation.errors },
      { status: 400 }
    );
  }

  // Checked after validation, so that a visitor is told about a mistyped
  // address rather than being handed a malformed message to send themselves.
  const config = readConfig();
  if (!config) {
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL is not set; refusing to send."
    );
    return Response.json(
      {
        error: "not-configured",
        message: "Email sending is not configured on this deployment.",
      },
      { status: 503 }
    );
  }

  if (isRateLimited(clientKey(request))) {
    return Response.json(
      {
        error: "rate-limited",
        message:
          "That is a few messages in quick succession. Please try again shortly.",
      },
      { status: 429 }
    );
  }

  const submission = validation.value;
  const resend = new Resend(config.apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      // So that hitting reply in the fraternity's inbox writes to the visitor
      // rather than to the unattended sending address.
      replyTo: submission.email,
      subject: renderSubject(submission),
      text: renderText(submission),
      html: renderHtml(submission),
    });

    if (error) {
      // Resend's message names the cause (unverified domain, bad key, quota),
      // which is the first thing worth knowing when the form stops working.
      console.error("[contact] Resend rejected the message:", error);
      return Response.json(
        { error: "send-failed", message: "The message could not be sent." },
        { status: 502 }
      );
    }

    console.info(`[contact] Sent enquiry ${data?.id} from ${submission.email}`);
    return Response.json({ ok: true });
  } catch (cause) {
    console.error("[contact] Unexpected error sending the message:", cause);
    return Response.json(
      { error: "send-failed", message: "The message could not be sent." },
      { status: 502 }
    );
  }
}
