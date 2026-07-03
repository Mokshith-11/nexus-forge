import Link from "next/link";
import Footer from "@/components/scenes/Footer";
import { CONTACT } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  bullets: { title: string; desc: string }[];
  keyword: string;
};

/**
 * Shared, static, SEO-focused landing page. Server-rendered (no client JS),
 * fast, and keyword-targeted — one page per money keyword. Reuses the site
 * theme and footer. The global Navbar/Cursor/WhatsApp button come from layout.
 */
export default function LandingPage({
  eyebrow,
  title,
  highlight,
  intro,
  bullets,
  keyword,
}: Props) {
  return (
    <main>
      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-40">
        <p className="label">{eyebrow}</p>
        <h1 className="display mt-5 text-[clamp(2.4rem,7vw,5rem)] leading-[1.02] text-white">
          {title} <span className="italic text-muted-gradient">{highlight}</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--text-2)]">{intro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black"
          >
            Book a Call
          </Link>
          {CONTACT.whatsapp && (
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border-strong)] px-7 py-3.5 text-sm text-white transition-colors hover:bg-white/5"
            >
              Chat on WhatsApp
            </a>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="glass rounded-[24px] p-7"
            >
              <h2 className="display text-2xl text-white">{b.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[28px] border border-[var(--border)] p-8 text-center sm:p-12">
          <h2 className="display text-3xl text-white sm:text-4xl">
            Ready to get started with {keyword}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-2)]">
            Tell us what you need — we scope it on a quick call and ship in days,
            not months.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black"
            >
              Book a Call
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[var(--border-strong)] px-7 py-3.5 text-sm text-white transition-colors hover:bg-white/5"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
