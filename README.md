# Secular Order of the Servants of Mary (OSSM)

The fraternity's website. Next.js 16 (App Router), Tailwind CSS 4, TypeScript.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # also prints the pre-launch checklist
```

`npm run build` warns about any placeholder still in place — the domain, the
contact address, an unconfigured contact form. The warning is not fatal, so a
preview deploy still builds, but it prints on every build so the one that goes
live cannot slip out unnoticed.

## Routes

Three real pages; everything else in the navigation is an anchor into the
homepage.

| Route | Source |
|---|---|
| `/` | `app/page.tsx`, composed from `components/sections/*` |
| `/contact` | `app/contact/page.tsx` |
| `/feast-days` | `app/feast-days/page.tsx`, from `lib/feast-days.ts` |
| `/api/contact` | `app/api/contact/route.ts` — the contact form endpoint |

`sitemap.xml`, `robots.txt` and the Open Graph card are generated from
`app/sitemap.ts`, `app/robots.ts` and `app/opengraph-image.tsx`.

## The contact form

`components/contact-form.tsx` posts JSON to `/api/contact`, which sends through
[Resend](https://resend.com). Three outcomes, all handled:

- **Configured.** The message is emailed to `CONTACT_TO_EMAIL`, with `Reply-To`
  set to the visitor, so replying from the inbox reaches them directly.
- **Not configured, or the network fails.** The route answers 503 and the form
  opens the visitor's own mail client with the message already written. Nothing
  is silently lost, and the page works before any of this is set up.
- **Invalid.** Field-level errors come back and are shown against each input.
  This happens whether or not sending is configured.

A honeypot field and a per-IP throttle (5 in 10 minutes) sit in front of the
send. The throttle is in memory, so on a serverless host each instance counts
separately — a speed bump, not a security control.

### Setting up Resend

1. Verify a **subdomain** in Resend — `send.yourdomain.org`, not the root
   domain. A domain carries only one SPF record, so adding Resend's next to an
   existing mail provider's on the root breaks authentication for both. A
   subdomain gets its own SPF and DKIM and leaves the MX records of the real
   mailbox untouched.
2. Add the DNS records Resend gives you. Do not touch existing MX records.
3. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` in the
   hosting environment. See `.env.example`.
4. Add a DMARC record once mail is arriving reliably.

To use a hosted form service (Formspree, Web3Forms) instead, set
`NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` and skip all of the above; it bypasses
`/api/contact` entirely.

## Editing content

| What | Where |
|---|---|
| Contact address | `lib/contact-details.ts` |
| Upcoming events | `lib/events.ts` — empty by default; past dates drop off on their own |
| Feast day calendar | `lib/feast-days.ts` |
| Site name, description, canonical URL | `lib/site.ts` |
| Image provenance and licences | `public/images/CREDITS.md` |

Meeting times and places are deliberately not published anywhere on the site.
Enquirers are given them by whoever answers their message.

## Before launch

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- [ ] Replace the contact email — `NEXT_PUBLIC_CONTACT_EMAIL`, or edit
      `lib/contact-details.ts`. The placeholder is `info@ossm.org`.
- [ ] Configure Resend, and send a test message through the live form.
- [ ] Add any real events to `lib/events.ts`.
- [ ] Confirm the feast day list with the fraternity — see the caveats at the
      top of `lib/feast-days.ts`.
- [ ] Trace the two images marked **Unverified** in `public/images/CREDITS.md`,
      or replace them.

`FEEDBACK-PLAN.md` records the stakeholder feedback this build came from and the
questions still open with the client.
