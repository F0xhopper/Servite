"use client";

import { useState } from "react";

import { contactDetails } from "@/lib/contact-details";

/**
 * Where the form posts. Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to a form service
 * endpoint (Formspree, Web3Forms, or anything that accepts a JSON POST) and the
 * form submits in place. With no endpoint configured it falls back to opening
 * the visitor's mail client with the message pre-filled, so the form works
 * without any server infrastructure.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "handed-to-mail-client" | "error";

const labelClass =
  "mb-2 block font-display text-[10px] uppercase tracking-[0.3em] text-gold/50";
const fieldClass =
  "w-full border border-white/[0.12] bg-white/[0.02] px-4 py-3 text-[16px] text-white/85 sm:text-[15px] outline-none transition-colors placeholder:text-white/25 focus:border-gold/50";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (!endpoint) {
      const body = `${message}\n\nFrom ${name} (${email})`;
      window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
        "Enquiry from the OSSM website"
      )}&body=${encodeURIComponent(body)}`;
      setStatus("handed-to-mail-client");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        throw new Error(`Form endpoint responded with ${response.status}`);
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/25 px-8 py-10">
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
    <form onSubmit={onSubmit} className="flex flex-col gap-7">
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
          className={fieldClass}
          placeholder="Mary Smith"
        />
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
          className={fieldClass}
          placeholder="you@example.com"
        />
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
          className={`${fieldClass} resize-y`}
          placeholder="Tell us a little about yourself and what draws you to the Order."
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

        {status === "handed-to-mail-client" && (
          <p className="text-[13px] leading-relaxed text-white/50">
            Your mail app should have opened with the message ready to send. If
            it did not, write to{" "}
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-gold/70 transition-colors hover:text-gold"
            >
              {contactDetails.email}
            </a>
            .
          </p>
        )}

        {status === "error" && (
          <p className="text-[13px] leading-relaxed text-white/50">
            Something went wrong sending that. Please write to{" "}
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-gold/70 transition-colors hover:text-gold"
            >
              {contactDetails.email}
            </a>{" "}
            instead.
          </p>
        )}
      </div>
    </form>
  );
}
