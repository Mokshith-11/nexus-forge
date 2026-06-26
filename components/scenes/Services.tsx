"use client";

import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import { SERVICES } from "@/lib/content";

/** Interactive service grid with hover-morphing glass cards. */
export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-2)]">
          Services
        </p>
        <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
          What we do, end to end
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.06}>
            <GlassCard
              as="article"
              className="group h-full p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--border-strong)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(79,124,255,0.45), transparent 70%)",
                }}
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className="display mt-6 text-2xl text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
                {service.desc}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
