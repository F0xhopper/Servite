import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteName } from "@/lib/site";

export const alt = `${siteName} (OSSM)`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card shown when the site is shared in a message or on social media.
 *
 * Drawn rather than photographed: a still of an artwork would need its licence
 * checked against every platform that rehosts it, and the site's typography
 * carries its tone on its own.
 *
 * Two things to know about Satori, which renders this. It cannot reach the
 * network or read what `next/font` fetched for the site, so the faces are read
 * from `assets/`. And it needs an explicit `display` on any element with more
 * than one child, which is why the two title lines are separate spans rather
 * than one string with a `<br />`.
 */
export default async function OpengraphImage() {
  const [cinzel, garamondItalic] = await Promise.all([
    readFile(join(process.cwd(), "assets/Cinzel-Regular.woff")),
    readFile(join(process.cwd(), "assets/EBGaramond-Italic.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "Cinzel",
          padding: "0 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 21,
            letterSpacing: 16,
            // The tracking adds a trailing gap; nudge back so it reads centred.
            marginLeft: 16,
            color: "#c9a227",
          }}
        >
          OSSM
        </div>

        <div
          style={{
            marginTop: 52,
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            lineHeight: 1.28,
            letterSpacing: 1,
          }}
        >
          <span>Secular Order of the</span>
          <span>Servants of Mary</span>
        </div>

        <div
          style={{
            marginTop: 56,
            width: 64,
            height: 1,
            background: "rgba(201, 162, 39, 0.5)",
          }}
        />

        <div
          style={{
            marginTop: 52,
            fontFamily: "EB Garamond",
            fontStyle: "italic",
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.62)",
          }}
        >
          Standing with Mary at the Foot of the Cross
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cinzel", data: cinzel, style: "normal", weight: 400 },
        {
          name: "EB Garamond",
          data: garamondItalic,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
