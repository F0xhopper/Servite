# Fonts

Used only to render the Open Graph card (`app/opengraph-image.tsx`). Satori, the
renderer behind `ImageResponse`, cannot reach the network and cannot read the
fonts that `next/font` fetches for the site itself, so the two faces the card
needs are committed here.

| File | Family | Licence |
|---|---|---|
| `Cinzel-Regular.woff` | Cinzel 400 — the site's display face | [SIL Open Font License 1.1](https://openfontlicense.org) |
| `EBGaramond-Italic.woff` | EB Garamond 400 italic — the site's body face | [SIL Open Font License 1.1](https://openfontlicense.org) |

Both are the latin subset as served by Google Fonts, in WOFF because Satori does
not read WOFF2. The OFL permits redistribution as part of a larger work.
