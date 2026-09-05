"use client";

import { useState } from "react";

import { contactDetails } from "@/lib/contact-details";

/**
 * Where the form posts.
 *
 * By default this is the site's own `/api/contact` route, which sends through
 * Resend. Setting NEXT_PUBLIC_CONTACT_FORM_ENDPOINT points the form at a hosted
 * form service instead (Formspree, or anything else accepting a JSON POST),
 * which is the simpler option before a domain and sending records exist.
 *
 * If the built-in route reports that email is not configured, the form falls
 * back to opening the visitor's mail client with the message already written,
 * so a submission is never simply lost.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "/api/contact";

type Status =
  | "idle"
  | "sending"
  | "sent"
  | "handed-to-mail-client"
  | "rate-limited"
  | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const labelClass =
  "mb-2 block font-display text-[10px] uppercase tracking-[0.3em] text-gold/50";
const fieldClass =
  "w-full border border-white/[0.12] bg-white/[0.02] px-4 py-3 text-[16px] text-white/85 sm:text-[15px] outline-none transition-colors placeholder:text-white/25 focus:border-gold/50";
const fieldErrorClass = "border-red-400/50 focus:border-red-400/70";
const errorTextClass = "mt-2 text-[13px] leading-relaxed text-red-300/80";
const noticeClass = "text-[13px] leading-relaxed text-white/50";
const mailLinkClass = "text-gold/70 transition-colors hover:text-gold";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function openMailClient(name: string, email: string, message: string) {
    const body = `${message}\n\nFrom ${name} (${email})`;
    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      "Enquiry from the OSSM website"
    )}&body=${encodeURIComponent(body)}`;
    setStatus("handed-to-mail-client");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setFieldErrors({});
    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          // Matches the honeypot input below; a person always leaves it empty.
          website: String(data.get("website") ?? ""),
        }),
      });

      if (response.ok) {
        form.reset();
        setStatus("sent");
        return;
      }

      // The body carries the reason when it is our own route answering. A
      // hosted form service may return something else entirely, hence the
      // tolerance for a body that will not parse.
      const payload = await response.json().catch(() => null);
      const reason = (payload as { error?: string } | null)?.error;

      if (response.status === 503 || reason === "not-configured") {
        openMailClient(name, email, message);
        return;
      }

      if (response.status === 429 || reason === "rate-limited") {
        setStatus("rate-limited");
        return;
      }

      const errors = (payload as { errors?: { field: string; message: string }[] } | null)
        ?.errors;
      if (errors?.length) {
        setFieldErrors(
          Object.fromEntries(errors.map(({ field, message }) => [field, message]))
        );
        setStatus("idle");
        return;
      }

      setStatus("error");
    } catch {
      // A network failure, an offline visitor, or a blocked request. The
      // message is still in hand, so hand it to the mail client.
      openMailClient(name, email, message);
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/25 px-8 py-10" role="status">
        <p className="font-display text-xl tracking-wide text-white">
          Thank you. Your message has reached us.
        </p>
        <p className="mt-4 text-[15px] leading-[1.9] text-white/65">
          Someone from the fraternity will be in touch. In the meantime, you are
          in our prayers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-7">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
          className={`${fieldClass} ${fieldErrors.name ? fieldErrorClass : ""}`}
          placeholder="Mary Smith"
        />
        {fieldErrors.name && (
          <p id="contact-name-error" className={errorTextClass}>
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
          className={`${fieldClass} ${fieldErrors.email ? fieldErrorClass : ""}`}
          placeholder="you@example.com"
        />
        {fieldErrors.email && (
          <p id="contact-email-error" className={errorTextClass}>
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={
            fieldErrors.message ? "contact-message-error" : undefined
          }
          className={`${fieldClass} resize-y ${
            fieldErrors.message ? fieldErrorClass : ""
          }`}
          placeholder="Tell us a little about yourself and what draws you to the Order."
        />
        {fieldErrors.message && (
          <p id="contact-message-error" className={errorTextClass}>
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/*
        Honeypot. Hidden from sight and from screen readers, and skipped by the
        tab order, so only an automated form filler ever puts anything in it.
      */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Do not fill this in</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-gold/50 px-10 py-4 text-sm tracking-[0.3em] text-gold/80 transition-colors hover:border-gold hover:text-gold disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        <div aria-live="polite" className="flex-1 min-w-[16rem]">
          {status === "handed-to-mail-client" && (
            <p className={noticeClass}>
              Your mail app should have opened with the message ready to send. If
              it did not, write to{" "}
              <a href={`mailto:${contactDetails.email}`} className={mailLinkClass}>
                {contactDetails.email}
              </a>
              .
            </p>
          )}

          {status === "rate-limited" && (
            <p className={noticeClass}>
              That is a few messages in quick succession. Please try again in a
              little while, or write to{" "}
              <a href={`mailto:${contactDetails.email}`} className={mailLinkClass}>
                {contactDetails.email}
              </a>
              .
            </p>
          )}

          {status === "error" && (
            <p className={noticeClass}>
              Something went wrong sending that. Please write to{" "}
              <a href={`mailto:${contactDetails.email}`} className={mailLinkClass}>
                {contactDetails.email}
              </a>{" "}
              instead.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
