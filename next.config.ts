import type { NextConfig } from "next";

/**
 * Warn when the contact form is built with nowhere to send.
 *
 * A warning rather than a hard failure — a preview deploy is a legitimate
 * reason to build without mail credentials — but it prints on every build so it
 * cannot be missed on the one that goes live. The site URL and the published
 * contact address have real defaults in `lib/`, so they need no check here.
 */
function warnAboutMailConfig() {
  const hasResend = process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL;
  if (hasResend || process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT) return;

  console.warn(
    [
      "",
      "  \u26a0 The contact form has no mail configuration — see .env.example",
      "    Set RESEND_API_KEY and CONTACT_FROM_EMAIL (or NEXT_PUBLIC_CONTACT_FORM_ENDPOINT).",
      "    Without them the form falls back to opening the visitor's mail client.",
      "",
    ].join("\n")
  );
}

warnAboutMailConfig();

const nextConfig: NextConfig = {};

export default nextConfig;
