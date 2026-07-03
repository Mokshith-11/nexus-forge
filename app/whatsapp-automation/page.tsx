import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "WhatsApp Automation & AI Chatbots for Business | Nexus Forge",
  description:
    "Nexus Forge builds AI WhatsApp assistants and chatbots that reply to leads in seconds, qualify them, and book appointments automatically — 24/7. Perfect for clinics, real estate, and service businesses.",
  keywords: [
    "WhatsApp automation",
    "WhatsApp chatbot",
    "AI chatbot for business",
    "WhatsApp Business API",
    "AI booking assistant",
    "chatbot for clinics",
  ],
  alternates: { canonical: "/whatsapp-automation" },
};

export default function Page() {
  return (
    <LandingPage
      eyebrow="WhatsApp Automation & AI Agents"
      title="Reply in seconds. Book clients"
      highlight="automatically."
      keyword="WhatsApp automation"
      intro="We deploy GPT-powered assistants on your WhatsApp and website that reply instantly, answer FAQs, qualify leads, and book appointments straight into your calendar — feeding everything into your CRM. Never lose a lead to a slow reply again."
      bullets={[
        {
          title: "Instant 24/7 replies",
          desc: "Every enquiry gets an answer in 10 seconds, day or night — so leads book with you, not a competitor.",
        },
        {
          title: "Qualify & book automatically",
          desc: "The assistant qualifies prospects and schedules appointments without any manual back-and-forth.",
        },
        {
          title: "WhatsApp Business API",
          desc: "Professional, compliant automation on the channel your customers already use every day.",
        },
        {
          title: "Lead scoring & handoff",
          desc: "Hot leads are scored and handed to your team, with every conversation logged in your CRM.",
        },
      ]}
    />
  );
}
