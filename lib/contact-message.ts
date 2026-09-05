/**
 * Validation and rendering for contact form submissions.
 *
 * Kept separate from the route handler so the rules are in one place and have
 * no dependency on Resend or on Next: the route does transport, this does
 * everything that decides *what* gets sent.
 */

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

/** A field-keyed error, so the form can point at the input that needs fixing. */
export interface ContactFieldError {
  field: keyof ContactSubmission;
  message: string;
}

export type ContactValidation =
  | { ok: true; value: ContactSubmission }
  | { ok: false; errors: ContactFieldError[] };

const LIMITS = {
  name: { min: 1, max: 100 },
  /** The maximum length of an email address per RFC 5321. */
  email: { max: 254 },
  message: { min: 10, max: 5000 },
} as const;

/**
 * Deliberately loose. The only address that matters is one a person can reply
 * to, and stricter patterns reject valid addresses more often than they catch
 * typos. Real verification is the reply itself.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The name is interpolated into the subject line, so carriage returns and line
 * feeds have to go: they are what a header injection would ride in on.
 */
function toSingleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/** Parse and check an untrusted request body. */
export function validateSubmission(input: unknown): ContactValidation {
  const body = (input ?? {}) as Record<string, unknown>;

  const name = toSingleLine(asString(body.name));
  const email = toSingleLine(asString(body.email)).toLowerCase();
  const message = asString(body.message).trim();

  const errors: ContactFieldError[] = [];

  if (name.length < LIMITS.name.min) {
    errors.push({ field: "name", message: "Please tell us your name." });
  } else if (name.length > LIMITS.name.max) {
    errors.push({
      field: "name",
      message: `Please keep your name under ${LIMITS.name.max} characters.`,
    });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > LIMITS.email.max) {
    errors.push({
      field: "email",
      message: "Please check your email address so we can write back.",
    });
  }

  if (message.length < LIMITS.message.min) {
    errors.push({
      field: "message",
      message: "Please write a little more so we know how to help.",
    });
  } else if (message.length > LIMITS.message.max) {
    errors.push({
      field: "message",
      message: `Please keep your message under ${LIMITS.message.max} characters.`,
    });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: { name, email, message } };
}

/** Subject line of the email that lands in the fraternity's inbox. */
export function renderSubject(submission: ContactSubmission): string {
  return `Website enquiry from ${submission.name}`;
}

/** Plain text body. Some mail clients show this in preview, so it comes first. */
export function renderText(submission: ContactSubmission): string {
  return [
    submission.message,
    "",
    "—",
    `From: ${submission.name} <${submission.email}>`,
    "Sent from the contact form on the OSSM website.",
    "Replying to this email will reach the sender directly.",
  ].join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * HTML body. Inline styles only, and no external assets: this is email, where
 * stylesheets and remote images are stripped or blocked as often as not.
 */
export function renderHtml(submission: ContactSubmission): string {
  const paragraphs = submission.message
    .split(/\n{2,}/)
    .map((block) => escapeHtml(block).replace(/\n/g, "<br />"))
    .map(
      (block) =>
        `<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#1a1a1a;">${block}</p>`
    )
    .join("");

  const name = escapeHtml(submission.name);
  const email = escapeHtml(submission.email);

  return [
    '<div style="font-family:Georgia,\'Times New Roman\',serif;max-width:600px;">',
    paragraphs,
    '<hr style="border:none;border-top:1px solid #e0e0e0;margin:28px 0 16px;" />',
    '<p style="margin:0 0 6px;font-size:13px;line-height:1.6;color:#666;">',
    `From: <strong>${name}</strong> &lt;<a href="mailto:${email}" style="color:#8a6d3b;">${email}</a>&gt;`,
    "</p>",
    '<p style="margin:0;font-size:13px;line-height:1.6;color:#999;">',
    "Sent from the contact form on the OSSM website. Replying to this email will reach the sender directly.",
    "</p>",
    "</div>",
  ].join("");
}
