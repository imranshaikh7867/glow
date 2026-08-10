import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans, Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";

/* Editorial serif — names, figures, card titles */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/* Body sans — humanist geometric, tall x-height */
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* Wordmark serif */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* Signature script — "Gift a little glow" */
const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sarah, 32 — Glow",
  description:
    "Sarah is raising her Glow Goal for Upper Blepharoplasty. Gift a little glow and help her take the next step towards confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables live on <html> so Tailwind's :root-level theme tokens
    // (--font-serif, --font-sans, …) can resolve them.
    <html
      lang="en"
      className={`${playfair.variable} ${nunitoSans.variable} ${cormorant.variable} ${allura.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
