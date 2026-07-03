import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Website Designing & Development Company | Nexus Forge",
  description:
    "Nexus Forge designs and builds high-converting, modern websites — from landing pages to full web apps. Fast, responsive, SEO-optimized website designing for businesses in India and worldwide.",
  keywords: [
    "website designing",
    "website design company",
    "web development agency",
    "website development",
    "Next.js website design",
    "responsive web design India",
  ],
  alternates: { canonical: "/website-design" },
};

export default function Page() {
  return (
    <LandingPage
      eyebrow="Website Designing & Development"
      title="Websites that look stunning and"
      highlight="actually convert."
      keyword="website designing"
      intro="We design and build modern, blazing-fast websites and web apps with premium design — from landing pages to full-stack applications. Every site is responsive, SEO-optimized, and built to turn visitors into customers."
      bullets={[
        {
          title: "Premium, custom design",
          desc: "No cookie-cutter templates. We craft a unique, on-brand design that makes your business look world-class.",
        },
        {
          title: "Built to convert",
          desc: "Clear structure, fast load times, and strong calls-to-action — designed around turning traffic into enquiries.",
        },
        {
          title: "Responsive & SEO-ready",
          desc: "Looks flawless on every device and built for search from day one, so customers can actually find you.",
        },
        {
          title: "Shipped in days",
          desc: "AI-accelerated delivery means your new website goes live in days, not months — without cutting corners.",
        },
      ]}
    />
  );
}
