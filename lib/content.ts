export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  categories: string[];
  blurb: string;
  year: string;
  /** Two-stop gradient used for the cinematic poster. */
  gradient: [string, string];
};

export const PROJECTS: Project[] = [
  {
    id: "nebula",
    title: "Nebula",
    client: "Aurora Labs",
    categories: ["Branding", "Motion"],
    blurb:
      "A living identity system for a deep-space research collective, animated across every surface.",
    year: "2025",
    gradient: ["#243b8f", "#4f7cff"],
  },
  {
    id: "helix",
    title: "Helix",
    client: "Vanto Health",
    categories: ["Web", "3D"],
    blurb:
      "An interactive genomics platform that turns dense biological data into a tactile, explorable world.",
    year: "2025",
    gradient: ["#3a1d6e", "#9a7cff"],
  },
  {
    id: "monolith",
    title: "Monolith",
    client: "Form & Field",
    categories: ["Web", "Art Direction"],
    blurb:
      "A flagship e-commerce experience for an architectural furniture house, built around stillness and scale.",
    year: "2024",
    gradient: ["#0f2f3a", "#3fb6c4"],
  },
  {
    id: "pulse",
    title: "Pulse",
    client: "Cadence",
    categories: ["Product", "AI"],
    blurb:
      "An AI music companion with a generative visual language that breathes in time with every track.",
    year: "2024",
    gradient: ["#5a1b3a", "#ff5f9e"],
  },
  {
    id: "atlas",
    title: "Atlas",
    client: "Northwind",
    categories: ["Mobile", "UI/UX"],
    blurb:
      "A travel super-app reimagined as a cinematic atlas — every journey rendered like a film.",
    year: "2023",
    gradient: ["#1a3a2e", "#5dd1a0"],
  },
];

export type Service = {
  icon: string; // tabler icon name (rendered via inline SVG mapping)
  title: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    icon: "automation",
    title: "AI Automation",
    desc: "We design intelligent systems that remove busywork and let teams move at the speed of thought.",
  },
  {
    icon: "code",
    title: "Web Development",
    desc: "High-performance, immersive websites engineered with the latest web platform and motion tooling.",
  },
  {
    icon: "mobile",
    title: "Mobile Apps",
    desc: "Native-grade iOS and Android products with interfaces that feel inevitable in the hand.",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    desc: "Research-led product design that balances editorial beauty with ruthless usability.",
  },
  {
    icon: "branding",
    title: "Branding",
    desc: "Identity systems built to move — typography, motion, and voice that travel across any surface.",
  },
  {
    icon: "agents",
    title: "AI Agents",
    desc: "Custom autonomous agents that plug into your stack and quietly compound your team's output.",
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
    desc: "We immerse in your world — audience, ambition, and the tension worth designing around.",
  },
  {
    index: "02",
    title: "Strategy",
    desc: "We shape a sharp narrative and a roadmap that turns the vision into something buildable.",
  },
  {
    index: "03",
    title: "Design",
    desc: "We craft the aesthetic and motion language, prototyping until every interaction feels right.",
  },
  {
    index: "04",
    title: "Develop",
    desc: "We engineer it to be fast, accessible, and resilient — production-grade from the first commit.",
  },
  {
    index: "05",
    title: "Launch",
    desc: "We ship, measure, and refine — staying close long after the confetti settles.",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 5, suffix: "+", label: "Years of craft" },
  { value: 24, suffix: "/7", label: "Partner support" },
];

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mara Okafor",
    company: "Aurora Labs",
    quote:
      "ÆTHER didn't just design our brand — they gave it gravity. Every frame feels intentional.",
    rating: 5,
    initials: "MO",
  },
  {
    name: "Daniel Reyes",
    company: "Vanto Health",
    quote:
      "The most fluent team we've worked with. They translated impossibly complex data into something people actually feel.",
    rating: 5,
    initials: "DR",
  },
  {
    name: "Sofia Lindqvist",
    company: "Form & Field",
    quote:
      "A rare studio that obsesses over both the pixel and the load time. The result outperformed every benchmark we set.",
    rating: 5,
    initials: "SL",
  },
  {
    name: "Kenji Watanabe",
    company: "Cadence",
    quote:
      "They built an AI experience that feels alive. Our users describe it as magic — we just call it ÆTHER.",
    rating: 5,
    initials: "KW",
  },
];

export type Member = { name: string; role: string; initials: string };

export const TEAM: Member[] = [
  { name: "Iris Calderón", role: "Founder · Creative Director", initials: "IC" },
  { name: "Theo Marsh", role: "Head of Engineering", initials: "TM" },
  { name: "Naomi Adeyemi", role: "Design Lead", initials: "NA" },
  { name: "Lukas Brandt", role: "Motion Director", initials: "LB" },
  { name: "Priya Nair", role: "AI & Systems", initials: "PN" },
  { name: "Elena Rossi", role: "Strategy & Partnerships", initials: "ER" },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "What kind of projects do you take on?",
    a: "We partner on ambitious brand, web, product, and AI work — from a single cinematic landing page to a full multi-quarter platform build. If it needs to move people, it's our kind of project.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "A focused website lands in 4–8 weeks. Larger product and platform work runs in monthly cycles. We scope a clear roadmap during the Strategy phase so you always know what's next.",
  },
  {
    q: "Do you work with teams outside your timezone?",
    a: "Always. We're distributed across Europe and the Americas and run async-first with overlapping live hours. Most of our clients are remote.",
  },
  {
    q: "Can you work with our existing brand or codebase?",
    a: "Yes. We're equally comfortable extending an established system or building from a blank canvas. We'll audit what exists and recommend the smallest change that has the biggest impact.",
  },
  {
    q: "How do we get started?",
    a: "Send a note through the contact form below with a sketch of what you're imagining. We'll reply within two business days to set up an intro call.",
  },
];

export const CONTACT = {
  email: "hello@aether.studio",
  phone: "+1 (415) 555-0142",
  location: "Lisbon · Remote-first",
};

export const SOCIALS: NavItem[] = [
  { label: "Instagram", href: "https://instagram.com/aether.studio" },
  { label: "Twitter", href: "https://twitter.com/aetherstudio" },
  { label: "Dribbble", href: "https://dribbble.com/aether" },
  { label: "LinkedIn", href: "https://linkedin.com/company/aether" },
];

export const SCENES = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "stats", label: "Impact" },
  { id: "testimonials", label: "Voices" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];
