import type { Metadata } from "next";
import { EB_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

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
  title: {
    default: "Servite Order",
    template: "%s | Servite Order",
  },
  description: "Ordo Servorum Mariae — Order of Friars Servants of Mary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${cinzel.variable} dark`}>
      <body className="min-h-dvh antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
