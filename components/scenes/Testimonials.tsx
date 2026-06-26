"use client";

import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import { TESTIMONIALS } from "@/lib/content";

/** Glassmorphism testimonial cards with avatar, company and star rating. */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-2xl">
        <p className="label">Testimonials</p>
        <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
          Don&apos;t take our word for it.
        </h2>
        <p className="mt-5 text-[var(--text-2)]">
          See what forward-thinking business leaders say about working with
          Nexus Forge.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <GlassCard className="flex h-full flex-col p-8">
              <div
                className="flex gap-1 text-[var(--accent)]"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Icon key={s} name="star" size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-white">
                “{t.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-sm font-medium text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-[var(--text-2)]">{t.role}</p>
                  <p className="label mt-1 text-[0.6rem]">{t.company}</p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
