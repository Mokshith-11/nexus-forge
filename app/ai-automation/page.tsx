import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "AI Automation Agency | Workflow & Business Automation | Nexus Forge",
  description:
    "Nexus Forge is an AI automation agency. We automate your workflows, lead routing, CRM, and operations with custom n8n and Make pipelines — so your team stops doing busywork. Delivered in days.",
  keywords: [
    "AI automation agency",
    "business automation",
    "workflow automation",
    "n8n automation",
    "Make automation",
    "AI automation India",
  ],
  alternates: { canonical: "/ai-automation" },
};

export default function Page() {
  return (
    <LandingPage
      eyebrow="AI Automation"
      title="Automate your busywork,"
      highlight="24/7/365."
      keyword="AI automation"
      intro="We build intelligent automations that connect your entire tech stack and run themselves. Stop losing hours to manual processes — let AI-powered pipelines handle lead routing, data syncing, and operations instantly."
      bullets={[
        {
          title: "Custom workflow pipelines",
          desc: "Tailored n8n and Make trigger-action automations that plug into the tools you already use.",
        },
        {
          title: "CRM & data sync",
          desc: "Automatic syncing with HubSpot, Salesforce and more — your data stays clean, enriched, and up to date.",
        },
        {
          title: "Always-on & resilient",
          desc: "Error monitoring and automatic retries mean your automations keep running without babysitting.",
        },
        {
          title: "Measurable ROI",
          desc: "Free up hours every week and cut costs. Every automation is built around a real business outcome.",
        },
      ]}
    />
  );
}
