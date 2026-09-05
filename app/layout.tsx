import type { Metadata } from "next";
import { EB_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  // Resolves every relative URL below, and the generated Open Graph image, to
  // an absolute one. Without it social previews and canonical tags are dropped.
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} (OSSM)`,
    template: "%s | OSSM",
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} (OSSM)`,
    description: siteDescription,
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} (OSSM)`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${ebGaramond.variable} ${cinzel.variable} dark`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-gold/50 focus:bg-black focus:px-5 focus:py-3 focus:text-sm focus:tracking-wider focus:text-gold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
