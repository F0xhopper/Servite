/**
 * Fraternity contact details, shared by the footer, the contact page, and the
 * fallback the contact form uses when email sending is unavailable.
 *
 * Deliberately just the address. Meeting times and places are not published on
 * the site — enquirers are given them by whoever answers their message.
 *
 * This is the address *shown* on the site, and it needs a mailbox or a
 * forwarding rule behind it. Where the contact form actually delivers is
 * CONTACT_TO_EMAIL, which is server-side and can be a different, private inbox.
 */

export const contactDetails = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@ossm.org.uk",
} as const;
