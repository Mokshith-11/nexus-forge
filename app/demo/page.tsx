import type { Metadata } from "next";
import Link from "next/link";
import DemoChat from "@/components/DemoChat";
import Footer from "@/components/scenes/Footer";

export const metadata: Metadata = {
  title: "Live AI Assistant Demo | Nexus Forge",
  description:
    "Try a live demo of the AI WhatsApp assistant Nexus Forge builds — it replies instantly, answers questions, and books appointments automatically.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-40 text-center">
        <p className="label">Live Demo</p>
        <h1 className="display mt-5 text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] text-white">
          See the AI assistant <span className="italic text-muted-gradient">book a client.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-2)]">
          This is exactly what we set up on your WhatsApp. Type to it below —
          ask about prices, timings, or say &quot;book an appointment&quot; — and
          watch it reply and schedule you in, instantly.
        </p>
      </section>

      <section className="px-6 pb-16">
        <DemoChat />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="rounded-[28px] border border-[var(--border)] p-8 sm:p-12">
          <h2 className="display text-3xl text-white sm:text-4xl">
            Want this replying to your leads 24/7?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--text-2)]">
            We&apos;ll build and connect it to your WhatsApp in days. Book a quick
            call and we&apos;ll show you exactly how it works for your business.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black"
          >
            Book a Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
