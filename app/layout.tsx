import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import SceneProgress from "@/components/layout/SceneProgress";
import Intro from "@/components/scenes/Intro";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/**
 * Resolves the canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel once your
 * custom domain is live (e.g. https://yourdomain.com). Falls back to the Vercel
 * preview URL, then the project's vercel.app subdomain for local/preview use.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexusforge.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexus Forge — AI Automation Agency | Custom AI Solutions & Workflow Automation",
    template: "%s · Nexus Forge",
  },
  description:
    "Nexus Forge is an all-in-one AI agency. From automation to content, websites to analytics — one AI-powered team for everything your business needs. Faster. Smarter. Unstoppable.",
  keywords: [
    "AI automation agency",
    "workflow automation",
    "AI agents",
    "n8n automation",
    "AI content",
    "web development",
    "data analytics",
    "WhatsApp automation",
  ],
  authors: [{ name: "Nexus Forge" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Nexus Forge — AI Automation Agency",
    description:
      "Your entire business. Powered by AI. One AI-powered agency for automation, content, websites, and analytics.",
    siteName: "Nexus Forge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Forge — AI Automation Agency",
    description:
      "Your entire business. Powered by AI. One AI-powered agency for everything your business needs.",
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
  name: "Nexus Forge",
  description:
    "An all-in-one AI automation agency — automation, AI agents, content, web development, and analytics.",
  url: SITE_URL,
  email: "vinnyvvinny8@gmail.com",
  sameAs: [
    "https://twitter.com/nexusforge",
    "https://linkedin.com/company/nexusforge",
    "https://github.com/nexusforge",
    "https://instagram.com/nexusforge",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#hero"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] glass rounded-full px-4 py-2 text-sm"
        >
          Skip to content
        </a>
        <Intro />
        <Cursor />
        <Navbar />
        <SceneProgress />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
