# Website Feedback — Change Plan

Source: stakeholder feedback round, 4 Sept 2026.
Theme of the feedback: **less reading, more reaching out.** Trim depth on the homepage, make "Contact Us" the primary action everywhere, and add the missing Servite content (St Juliana, feast days).

Current state worth knowing before starting:

- The site is a single page (`app/page.tsx`). Every nav link (`/our-story`, `/spirituality`, `/saints`, `/events`, `/inquire`, `/about`, `/history`) currently 404s.
- **Decision:** stay single-page. Only two real routes get built (`/contact`, `/feast-days`); everything else becomes an in-page anchor. See 3.3.
- Sections live in `components/sections/*.tsx`; nav in `components/header.tsx` and `components/footer.tsx`.

---

## 1. Navigation & contact (highest priority)

### 1.1 Replace "Become a Member" with "Contact Us"
Feedback: *"contact us over become a member"*, *"More contact us less detail"*.

- `components/header.tsx`: change the outlined button label to **Contact Us** and its `href` from `/inquire` to `/contact` (desktop and mobile menu).
- `components/footer.tsx`: same change in `navLinks`.
- `components/sections/hero.tsx`: "Begin the Journey" → **Contact Us** → `/contact`.
- `components/sections/cta-band.tsx`: "Begin an Inquiry" → **Contact Us** → `/contact`.
- Grep for any remaining `/inquire` and retire it.

### 1.2 Create the contact page
Feedback: *"Create contact page"*, *"contact us with a contact page"*.

New route `app/contact/page.tsx`:
- Heading, one short paragraph of welcome (2–3 sentences, no history).
- Email link (confirm the real address — footer currently has placeholder `info@ossm.org`).
- Meeting times / location block (reuse the footer's fraternity details; confirm they're real, not placeholder).
- Simple contact form: name, email, message. Decide the backend (options: `mailto:` only, Formspree/Web3Forms, or a Next server action + email provider). **Recommendation:** start with a form posting to a free form service so it works without server infra; upgrade later.
- Metadata: `title: "Contact Us"`.

### 1.3 Restructure the menu
Feedback: *"remove reflections – add to menu and events to dropdown"*, *"Get rid of spirituality part"*.

Proposed nav:

| Label | Href | Notes |
|---|---|---|
| Our Story | `/#our-story` | anchor to `our-roots.tsx` |
| Saints | `/#saints` | anchor to `patron-saints.tsx` |
| Events ▾ | — | dropdown: **Upcoming Events** (`/#events`), **Feast Days** (`/feast-days`) — Reflections only if the client confirms it (see 3.3) |
| Contact Us | `/contact` | outlined button, real page |

- Remove **Spirituality** from header and footer.
- `components/ui/navigation-menu.tsx` already wraps Base UI's NavigationMenu, so a dropdown trigger + content is available; mobile menu should render the dropdown items as an indented group.
- Footer: mirror the same links (flat list is fine).

---

## 2. Homepage content changes

### 2.1 Fix Mary's cropped head
Feedback: *"don't cut Mary's head off"*.

Confirm which image on the live site is the culprit; most likely candidates:
- `hero.tsx` — `founders_vision.jpg` (843×1252 portrait) rendered with `object-center` in a wide/short panel on mobile (`h-[420px]`) and full-height on desktop.
- `marian-quote.tsx` — `seven-sorrows.jpg` forced into `aspect-[3/4]`.
- `charism.tsx` — `Mary-Peace.jpg` (691×1008) in a landscape 50% column.

Fix: switch to `object-top` (or a tuned `object-[50%_15%]`) on the offending image, and check every breakpoint (mobile, tablet, desktop). Consider swapping to a better-fitting image such as `our_lady_of_sorrows.jpg` or `mater-dolorosa.jpg` if positioning alone doesn't work.

### 2.2 Rename "Charitable Service" pillar
Feedback: *"compassionate section – compassion and comfort needy"*.

In `charism.tsx`, third pillar:
- Title: **Compassionate Service**
- Tagline: **Compassion and comfort for those in need**
- Trim body copy to 2–3 sentences in the same spirit.

### 2.3 Slim down "Life in the Order"
Feedback: *"less detail in the life of the order so people reach out more – just title"*.

In `life-in-the-order.tsx`:
- Keep the four labels (Daily Prayer, Monthly Fraternity, The Rule of Life, A Work of Service) but drop the paragraph bodies, or reduce each to a single line.
- Replace the "About the Order →" link with a **Contact Us** button + one line: *"Want to know what this looks like day to day? Get in touch."*

### 2.4 Remove the Spirituality section(s)
Feedback: *"Get rid of spirituality part"*.

- Remove the Spirituality nav link (see 1.3).
- Review whether any homepage section reads as "spirituality" to the stakeholders — likely candidates are `scripture.tsx` and `marian-quote.tsx`. Confirm with the client which they mean before deleting; keep the change to what they actually asked for.
- Unused section files (`seven-sorrows`, `pray-with-us`, `sword-pierced`, `crucifixion`, `who-we-are-today`, `how-it-begins`) can be deleted or left commented out; they're not rendered today.

### 2.5 Replace Reflections with Feast Days on the homepage
Feedback: *"remove reflections"*, *"Add feast day for that screen"*, *"Servite feast days – if any more closer feast days"*.

- Remove `<ReflectionsPreviewSection />` from `app/page.tsx`. Whether Reflections survives anywhere is an open question (3.3).
- New section `components/sections/feast-days-preview.tsx` in its place: show the **next 3 upcoming Servite feast days** computed from today's date, with a link to the full list (`/feast-days`).

### 2.6 New CTA quote
Feedback: *"CTA 'In great sorrow there is greater joy' – Our Lady of Sorrows"*.

In `cta-band.tsx`:
- Quote: *"In great sorrow there is greater joy."*
- Attribution line: **Our Lady of Sorrows**
- Button: **Contact Us** → `/contact`.

---

## 3. New content

### 3.1 Add St Juliana Falconieri as one of the Patron Saints
Feedback: *"st Juliana falconieri – add this as one of the saints"*.

Add her as one of the three saints shown in `patron-saints.tsx`, replacing one of the current three so the existing three-column stagger layout stays as it is.

- **Recommended line-up:** The Seven Holy Founders · St. Juliana Falconieri · St. Peregrine Laziosi. Juliana is the foundress of the Servite Third Order, which the Secular Order directly descends from, so she is the most relevant saint for this audience. Peregrine is the Order's most widely known saint. St. Philip Benizi would be the one to drop — confirm with the client.
- Entry: name **St. Juliana Falconieri**, title *Foundress of the Servite Third Order*, short body (niece of St. Alexis Falconieri, one of the Seven Holy Founders; received the habit from St. Philip Benizi; founded the Servite Sisters and Third Order in Florence; feast 19 June).
- Source and add a portrait to `public/images/` (e.g. `juliana-falconieri.jpg`), matching the desaturated style, `object-top` so her face isn't cropped.
- Also add her to the feast days list (3.2).

### 3.2 Feast days list
Feedback: *"have a list of all the feast days"*.

- Data file `lib/feast-days.ts`: array of `{ date: "MM-DD", name, note? }`. Initial list of the Servite calendar:

  | Date | Feast |
  |---|---|
  | 17 Feb | Seven Holy Founders of the Servite Order |
  | 4 May | St. Peregrine Laziosi |
  | 19 Jun | St. Juliana Falconieri |
  | 23 Aug | St. Philip Benizi |
  | 15 Sep | Our Lady of Sorrows (principal feast) |
  | 2 Feb | Presentation of the Lord (Mary's first sorrow) |
  | 25 Mar | Annunciation |
  | Friday before Palm Sunday | Our Lady of Sorrows (Passiontide commemoration, movable) |

  Confirm the full list with the client and add any local/fraternity observances.
- Page `app/feast-days/page.tsx`: full list in date order, with the next upcoming one highlighted.
- Helper `getUpcomingFeastDays(n)` used by the homepage preview (2.5).

### 3.3 Keep it a single page — anchors, not new pages
Decision: stay single-page for now. The feedback's direction is "less reading, more reaching out"; extra pages mean more content to write and maintain without helping that goal.

**Real pages (only two):**
- `/contact` — the primary call to action; needs its own shareable URL (1.2).
- `/feast-days` — explicitly requested full list; driven by one data file so it won't go stale (3.2).

**Anchors instead of pages.** Give each homepage section an `id` and point the nav at it so nothing 404s:

| Nav label | Href | Section |
|---|---|---|
| Our Story | `/#our-story` | `our-roots.tsx` |
| Saints | `/#saints` | `patron-saints.tsx` |
| Events ▾ → Upcoming Events | `/#events` | `events-preview.tsx` |
| Events ▾ → Feast Days | `/feast-days` | page |
| Contact Us | `/contact` | page |

- Add `scroll-margin-top` on the sections (the header is sticky, 96px tall) so anchors land below it.
- Retire the internal links that point at non-existent pages: "About the Order →" (`/about`, in `charism.tsx` and `life-in-the-order.tsx`), "Our History →" (`/history`), "All Saints →" (`/saints`), "All Events →" (`/events`). Replace with a Contact Us link or remove.

**Reflections — open question.** Feedback says remove it from the homepage but keep it in the Events dropdown. With no Reflections page, that menu item has nowhere to go, and the current three reflections are placeholders with invented authors. **Recommendation:** drop Reflections from the menu entirely for now and revisit if the client has real writings to publish. Ask the client before building a page for it.

**Deferred.** Separate Our Story, Saints, Events, and Reflections pages. Build only if the client later wants longer content or the events list outgrows the homepage.

---

## 4. Domain / URL
Feedback: *"change the url to one that…"*, *"change the url"*.

The note was cut off. Open questions for the client:
- What is the desired domain? (e.g. `ossm.org.uk`, `secularservites.org`, etc.)
- Who owns/registers it?

Once known:
- Register or transfer the domain; point DNS at the host (the repo is deployment-agnostic; Vercel is the simplest fit for Next.js).
- Add the domain in the hosting dashboard and enable HTTPS.
- Set `metadataBase` in `app/layout.tsx` and update any canonical/OG URLs.
- Confirm the contact email matches the new domain.

---

## Suggested order of work

1. Nav + Contact Us button swap, contact page (1.1–1.3) — biggest impact on "reach out more".
2. Homepage trims: Life in the Order, pillar rename, CTA quote, Mary crop (2.1–2.3, 2.6).
3. Feast days data + page + homepage preview (3.2, 2.5).
4. St Juliana (3.1).
5. Spirituality removal once the client confirms scope (2.4).
6. Section anchors + retire dead links (3.3).
7. Domain change once the client supplies it (4).

## Open questions for the client

- Which image is "Mary's head cut off" — the hero, the quote panel, or the Charism pillar?
- Which section(s) do they mean by "spirituality part"?
- Real contact email and meeting details for the contact page.
- The intended new URL/domain.
- Any feast days beyond the standard Servite calendar.
- Which saint to drop from the Patron Saints trio to make room for St Juliana (recommended: St. Philip Benizi).
- Can Reflections be dropped from the menu for now, given there's no page and the content is placeholder?
