import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { EXTERNAL_LINKS } from "@/lib/links";
import "./globals.css";

const siteUrl = "https://www.midlothianwildflowers-co.uk";
const siteDescription =
  "Grassroots conservation, outdoor learning and community action across Midlothian. BBC Make a Difference Awards 2026 Environment finalist.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Midlothian Wildflowers",
    template: "%s | Midlothian Wildflowers",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Midlothian Wildflowers",
    description: siteDescription,
    url: "/",
    siteName: "Midlothian Wildflowers",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "White butterfly on thistle flowers for Midlothian Wildflowers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midlothian Wildflowers",
    description: siteDescription,
    images: ["/images/hero.jpeg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Midlothian Wildflowers",
    url: siteUrl,
    areaServed: "Midlothian, Scotland",
    description: siteDescription,
    email: EXTERNAL_LINKS.email,
    award: "BBC Make a Difference Awards 2026 Environment category finalist",
  };

  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
