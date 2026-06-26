import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import SceneProgress from "@/components/layout/SceneProgress";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://aether.studio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ÆTHER — We craft worlds that move",
    template: "%s · ÆTHER",
  },
  description:
    "ÆTHER is a cinematic creative studio building immersive brands, websites, and products at the intersection of design, motion, and AI.",
  keywords: [
    "creative agency",
    "design studio",
    "web development",
    "branding",
    "AI automation",
    "motion design",
    "immersive web",
  ],
  authors: [{ name: "ÆTHER Studio" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "ÆTHER — We craft worlds that move",
    description:
      "A cinematic creative studio building immersive brands, websites, and products.",
    siteName: "ÆTHER",
  },
  twitter: {
    card: "summary_large_image",
    title: "ÆTHER — We craft worlds that move",
    description:
      "A cinematic creative studio building immersive brands, websites, and products.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ÆTHER",
  description:
    "A cinematic creative studio building immersive brands, websites, and products.",
  url: SITE_URL,
  email: "hello@aether.studio",
  telephone: "+1-415-555-0142",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  sameAs: [
    "https://instagram.com/aether.studio",
    "https://twitter.com/aetherstudio",
    "https://dribbble.com/aether",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#work"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] glass rounded-full px-4 py-2 text-sm"
        >
          Skip to content
        </a>
        <Cursor />
        <Navbar />
        <SceneProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
