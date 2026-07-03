import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { CITIES, CITY_SLUGS } from "@/lib/cities";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const name = CITIES[city];
  if (!name) return {};
  return {
    title: `AI Automation & Website Designing Agency in ${name} | Nexus Forge`,
    description: `Nexus Forge is an AI automation and website designing agency serving ${name}. We build AI WhatsApp assistants, automate workflows, and design high-converting websites for businesses in ${name}. Delivered in days.`,
    keywords: [
      `AI automation agency ${name}`,
      `website designing in ${name}`,
      `web development company ${name}`,
      `WhatsApp automation ${name}`,
      `digital agency ${name}`,
    ],
    alternates: { canonical: `/${city}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const name = CITIES[city];
  if (!name) notFound();

  return (
    <LandingPage
      eyebrow={`Serving ${name}`}
      title={`AI automation & website design in`}
      highlight={`${name}.`}
      keyword={`AI automation and web design in ${name}`}
      intro={`Nexus Forge helps businesses in ${name} capture more leads and cut manual work with AI. We build AI WhatsApp assistants, automate your workflows, and design fast, high-converting websites — all delivered in days, not months.`}
      bullets={[
        {
          title: `Websites that convert`,
          desc: `Modern, responsive, SEO-optimized website designing for ${name} businesses — built to turn visitors into enquiries.`,
        },
        {
          title: `AI WhatsApp assistants`,
          desc: `Reply to every ${name} lead in seconds and book appointments automatically, 24/7 — never lose a customer to a slow reply.`,
        },
        {
          title: `Workflow automation`,
          desc: `Custom n8n and Make automations that connect your tools and remove busywork for your ${name} team.`,
        },
        {
          title: `Delivered in days`,
          desc: `AI-accelerated execution means ${name} clients go live fast — agency-quality work at a fraction of the cost.`,
        },
      ]}
    />
  );
}
