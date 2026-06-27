export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

/** Logos shown in the "trusted by" marquee — rendered as styled wordmarks. */
export const TRUSTED = [
  "OpenAI",
  "Google",
  "Meta",
  "Shopify",
  "HubSpot",
  "Notion",
];

export type Project = {
  id: string;
  category: string;
  title: string;
  blurb: string;
  /** Two-stop near-monochrome gradient for the poster. */
  gradient: [string, string];
};

export const PROJECTS: Project[] = [
  {
    id: "booking",
    category: "Healthcare Automation",
    title: "AI-Powered Booking System",
    blurb:
      "An end-to-end scheduling engine that qualifies patients over WhatsApp and books them straight into the clinic's calendar.",
    gradient: ["#15151a", "#2b2b34"],
  },
  {
    id: "ecommerce",
    category: "Web Development",
    title: "Full-Stack E-Commerce Site",
    blurb:
      "A blazing-fast storefront with a custom admin dashboard, built on Next.js and deployed in under two weeks.",
    gradient: ["#101016", "#26303f"],
  },
  {
    id: "content",
    category: "Content Strategy",
    title: "Content & SEO Engine",
    blurb:
      "A self-replenishing content pipeline producing SEO-optimized articles that lifted organic traffic 3x in a quarter.",
    gradient: ["#141014", "#34262f"],
  },
  {
    id: "analytics",
    category: "Data Intelligence",
    title: "Analytics Dashboard",
    blurb:
      "A live insights platform turning scattered business data into forecasts, alerts, and one source of truth.",
    gradient: ["#101414", "#22332f"],
  },
];

export type ServiceMockup = "workflow" | "whatsapp" | "blog" | "code";

export type PrimaryService = {
  id: string;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  mockup: ServiceMockup;
};

export const SERVICES_PRIMARY: PrimaryService[] = [
  {
    id: "automation",
    label: "Automation",
    title: "Automate your busywork. 24/7/365.",
    desc: "Custom n8n and Make workflows that connect your entire tech stack. Stop wasting hours on manual processes — let intelligent pipelines handle your lead routing, data syncing, and operations instantly.",
    bullets: [
      "Custom n8n and Make trigger-action pipelines",
      "CRM synchronization (HubSpot, Salesforce)",
      "Error monitoring and automatic retries",
      "End-to-end data enrichment & formatting",
    ],
    cta: "Start Automating",
    mockup: "workflow",
  },
  {
    id: "agents",
    label: "AI Agents",
    title: "Engage, qualify, and book clients automatically.",
    desc: "GPT-powered chatbots on your website and WhatsApp. Qualify prospects, answer FAQs, and book appointments — feeding directly into your CRM.",
    bullets: [
      "WhatsApp Business API automation",
      "Advanced GPT-powered customer support",
      "Automatic booking & scheduling",
      "Lead scoring and agent handoff",
    ],
    cta: "Deploy Your Agent",
    mockup: "whatsapp",
  },
  {
    id: "content",
    label: "Content",
    title: "Words that convert. Content that ranks.",
    desc: "AI-generated blog posts, website copy, social media content, and email campaigns — all reviewed and polished by our quality team for maximum impact.",
    bullets: [
      "SEO-optimized blog posts & articles",
      "Website copywriting & landing pages",
      "Email marketing campaigns",
      "Social media content calendars",
    ],
    cta: "Get Content",
    mockup: "blog",
  },
  {
    id: "development",
    label: "Development",
    title: "Stunning websites. Built in days, not months.",
    desc: "Modern, responsive websites and web apps with premium design. From landing pages to full-stack applications — built with the latest frameworks and optimized for performance.",
    bullets: [
      "React, Next.js & modern frameworks",
      "Responsive & mobile-first design",
      "SEO optimized & blazing fast",
      "Custom dashboards & admin panels",
    ],
    cta: "Build My Site",
    mockup: "code",
  },
];

export type SecondaryService = { title: string; desc: string };

export const SERVICES_SECONDARY: SecondaryService[] = [
  {
    title: "Social Media Management",
    desc: "AI-powered content calendars, post generation, hashtag optimization, and engagement analytics across all platforms.",
  },
  {
    title: "Data Analytics & Insights",
    desc: "Turn raw data into actionable insights. Market analysis, competitor tracking, forecasting, and performance dashboards.",
  },
  {
    title: "AI Strategy Consulting",
    desc: "Expert guidance on integrating AI into your business. From tool selection to implementation roadmaps.",
  },
];

export type WhyItem = { icon: string; title: string; desc: string };

export const WHY: WhyItem[] = [
  {
    icon: "automation",
    title: "Days, Not Months",
    desc: "From concept to live delivery at lightning speed. AI-powered execution means zero agency bottleneck.",
  },
  {
    icon: "design",
    title: "Obsessively Crafted",
    desc: "Every detail considered. Every workflow, design, and word of content perfectly refined by AI and verified by experts.",
  },
  {
    icon: "agents",
    title: "Data-Driven Everything",
    desc: "Every decision backed by analytics. Every strategy validated by real data before we execute.",
  },
  {
    icon: "secure",
    title: "Secure by Default",
    desc: "Enterprise-grade encryption and API security come standard. Your data stays yours.",
  },
  {
    icon: "branding",
    title: "AI-Native Team",
    desc: "Our entire workforce runs on cutting-edge AI. Faster output, lower costs, consistent quality — 24/7.",
  },
  {
    icon: "code",
    title: "10x More Affordable",
    desc: "Get agency-quality work at a fraction of the cost. AI efficiency means massive savings passed to you.",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    desc: "Share your vision. We map your goals, audience, and the workflows worth automating.",
  },
  {
    index: "02",
    title: "Strategize",
    desc: "We design the AI architecture and a clear roadmap — what we build, in what order, and why.",
  },
  {
    index: "03",
    title: "Build",
    desc: "We craft the automations, agents, content, and interfaces, refined by AI and verified by experts.",
  },
  {
    index: "04",
    title: "Automate",
    desc: "We connect everything into your stack so it runs itself — monitored, resilient, and always-on.",
  },
  {
    index: "05",
    title: "Launch",
    desc: "We ship in days, measure results, and keep optimizing long after go-live.",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
};

export const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "k+", label: "Words Written Monthly" },
  { value: 4.2, suffix: "x", decimals: 1, label: "Average ROI Increase" },
  { value: 48, suffix: "hrs", label: "Average Turnaround" },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Lead Practitioner",
    company: "NURI AESTHETICS",
    quote:
      "NexusForge completely transformed our business. Their WhatsApp automation handles 80% of appointments, their content team writes all our blogs, and the new website they built us tripled our online bookings.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Arjun Patel",
    role: "CEO",
    company: "GROWTHSTACK DIGITAL",
    quote:
      "We replaced three separate agencies with NexusForge. They handle our automation, content, and social media — all at a fraction of the cost. The AI-powered approach delivers faster and more consistent results.",
    rating: 5,
    initials: "AP",
  },
  {
    name: "Priya Sharma",
    role: "COO",
    company: "SCALEUP SAAS",
    quote:
      "Their analytics team identified a churn pattern we had missed for months. Combined with the automated workflows and content strategy they built, we saw 40% growth in just one quarter.",
    rating: 5,
    initials: "PS",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "What exactly does an all-in-one AI agency do?",
    a: "We handle the work that normally takes several agencies — workflow automation, AI chat agents, content, websites, social media, and analytics — under one roof, all accelerated by AI and verified by our experts.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most websites and automations go live in days, not months. Our average turnaround is 48 hours for focused builds; larger platforms run in short, predictable cycles.",
  },
  {
    q: "Which tools and platforms do you work with?",
    a: "We build on n8n, Make, the WhatsApp Business API, OpenAI, HubSpot, Salesforce, Next.js, and Vercel — and we integrate with whatever already powers your stack.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Enterprise-grade encryption and API security come standard on every engagement, and your data always stays yours.",
  },
  {
    q: "How do we get started?",
    a: "Book a free strategy call through the contact section below. Tell us what you need — automation, content, a website, or all of the above — and we'll map a plan within two business days.",
  },
];

export const CONTACT = {
  email: "vinnyvvinny8@gmail.com",
  status: "Available for projects",
};

export const SOCIALS: NavItem[] = [
  { label: "WhatsApp", href: "https://wa.me/0000000000" },
  { label: "Twitter", href: "https://twitter.com/nexusforge" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nexusforge" },
  { label: "GitHub", href: "https://github.com/nexusforge" },
  { label: "Instagram", href: "https://instagram.com/nexusforge" },
];

export const SCENES = [
  { id: "hero", label: "Home" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "stats", label: "Stats" },
  { id: "testimonials", label: "Voices" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];
