export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string; // ISO
  readMins: number;
  excerpt: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "website-designing-cost-in-india",
    title: "How Much Does Website Designing Cost in India? (2026 Guide)",
    description:
      "A clear, honest breakdown of website designing costs in India in 2026 — from landing pages to full web apps — and what actually drives the price.",
    keyword: "website designing cost in India",
    date: "2026-07-01",
    readMins: 6,
    excerpt:
      "What does a website really cost in India in 2026? Here's an honest breakdown by type, plus what actually moves the price.",
    body: [
      {
        p: "One of the first questions every business owner asks is: how much does website designing cost in India? The honest answer is that it ranges widely — from ₹8,000 for a basic template site to ₹5,00,000+ for a custom web application. This guide breaks down what you actually get at each price point in 2026.",
      },
      { h2: "Website designing cost by type (2026)" },
      {
        ul: [
          "Basic template/landing page: ₹8,000 – ₹25,000. Good for a simple online presence.",
          "Custom small-business website (5–8 pages): ₹25,000 – ₹80,000. Unique design, mobile-first, SEO basics.",
          "Premium/animated marketing site: ₹80,000 – ₹2,00,000. Custom animations, CMS, performance tuning.",
          "Web application / dashboard: ₹2,00,000+. Custom functionality, integrations, backend.",
        ],
      },
      { h2: "What actually drives the price" },
      {
        p: "Two websites with the same page count can cost 5× different amounts. The real cost drivers are: custom design vs. template, animations and interactivity, integrations (payments, CRM, booking), SEO and performance work, and ongoing support. A cheap site that loads slowly or ranks nowhere often costs more in lost customers than a well-built one.",
      },
      { h2: "Should you go cheap or premium?" },
      {
        p: "If your website is a brochure, a template is fine. If it's how you win customers — where people judge whether to trust you and buy — invest in a fast, custom, conversion-focused site. The goal isn't the cheapest quote; it's the best return.",
      },
      { h2: "How Nexus Forge approaches it" },
      {
        p: "We build modern, high-converting websites — from landing pages to full applications — using AI-accelerated delivery, so you get premium quality in days, not months, at a fraction of typical agency cost. Tell us your goal and we'll scope a fixed price on a quick call.",
      },
    ],
  },
  {
    slug: "whatsapp-chatbot-for-clinics",
    title: "WhatsApp Chatbot for Clinics: The Complete 2026 Guide",
    description:
      "How WhatsApp chatbots help clinics reply instantly, qualify patients, and book appointments 24/7 — and how to set one up in 2026.",
    keyword: "WhatsApp chatbot for clinics",
    date: "2026-07-02",
    readMins: 5,
    excerpt:
      "Clinics lose 30–40% of enquiries to slow replies. Here's how a WhatsApp chatbot fixes it — and books appointments while you sleep.",
    body: [
      {
        p: "Most clinics get plenty of enquiries on WhatsApp and Instagram — and lose a big share of them simply because replies are too slow. By the time the front desk answers, the patient has booked elsewhere. A WhatsApp chatbot fixes this by replying in seconds and booking appointments automatically, 24/7.",
      },
      { h2: "What a WhatsApp chatbot does for a clinic" },
      {
        ul: [
          "Replies to every enquiry in under 10 seconds, day or night.",
          "Answers common questions — timings, pricing, location, services.",
          "Qualifies the patient and books the appointment into your calendar.",
          "Hands complex cases to your staff, with the full chat logged.",
        ],
      },
      { h2: "Why speed matters so much" },
      {
        p: "Studies across service businesses consistently show the first responder wins the booking. For a clinic, a 5-minute delay at 9pm often means the patient books with a competitor by morning. An always-on assistant closes that gap entirely.",
      },
      { h2: "Is it hard to set up?" },
      {
        p: "No. Using the WhatsApp Business API plus an AI assistant, a clinic chatbot can go live in a few days. It connects to your calendar and CRM, follows your tone, and only escalates when needed. You keep control; it just handles the repetitive first response.",
      },
      { h2: "Getting started" },
      {
        p: "Nexus Forge builds AI WhatsApp assistants for clinics that reply instantly, qualify patients, and book appointments automatically. If your clinic gets enquiries you can't always answer fast enough, this is the quickest win available. Book a call and we'll show you a live example.",
      },
    ],
  },
  {
    slug: "ai-automation-tools-for-small-business",
    title: "5 AI Automation Ideas That Save Small Businesses 20+ Hours a Week",
    description:
      "Practical AI automation ideas for small businesses in 2026 — from lead replies to reporting — that cut manual work and free up your team.",
    keyword: "AI automation for small business",
    date: "2026-07-03",
    readMins: 5,
    excerpt:
      "AI automation isn't just for big companies. Here are 5 practical ways small businesses use it to reclaim 20+ hours a week.",
    body: [
      {
        p: "AI automation used to be an enterprise luxury. In 2026, small businesses can use the same tools to remove hours of repetitive work every week. Here are five of the highest-impact, easiest-to-start automations.",
      },
      { h2: "1. Instant lead replies" },
      {
        p: "An AI assistant on WhatsApp and your website replies to every enquiry in seconds, qualifies it, and books the meeting — so no lead goes cold while you're busy.",
      },
      { h2: "2. Automatic CRM updates" },
      {
        p: "Every new lead, form fill, or payment can auto-update your CRM (HubSpot, Salesforce, or a simple sheet) — no manual data entry, no missed follow-ups.",
      },
      { h2: "3. Content on autopilot" },
      {
        p: "AI can draft blog posts, social captions, and email campaigns tailored to your brand, which your team reviews and ships — turning a week of writing into an afternoon.",
      },
      { h2: "4. Reporting and insights" },
      {
        p: "Instead of building reports by hand, automated dashboards pull your data together and flag trends — so you make decisions on facts, fast.",
      },
      { h2: "5. Back-office workflows" },
      {
        p: "Invoicing, scheduling, reminders, and data syncing between apps can all run automatically with tools like n8n and Make, connected once and left to run.",
      },
      { h2: "Where to start" },
      {
        p: "Pick the one task that eats the most time and automate that first. Nexus Forge builds custom AI automations for small businesses — start with a quick call and we'll map the highest-ROI automation for you.",
      },
    ],
  },
];
