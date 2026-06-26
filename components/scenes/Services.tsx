"use client";

import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import ServiceFeature from "@/components/scenes/ServiceFeature";
import { SERVICES_PRIMARY, SERVICES_SECONDARY } from "@/lib/content";

/** The services section: four feature blocks with device mockups, then a grid
 *  of secondary offerings. */
export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-20 max-w-2xl">
        <p className="label">Our Services</p>
        <h2 className="display mt-4 text-4xl text-white sm:text-6xl">
          Everything your business needs. One agency.
        </h2>
        <p className="mt-5 text-[var(--text-2)]">
          From automation to content, development to analytics — we handle it
          all with AI-powered precision.
        </p>
      </div>

      <div className="space-y-28">
        {SERVICES_PRIMARY.map((service, i) => (
          <ServiceFeature
            key={service.id}
            service={service}
            flip={i % 2 === 1}
          />
        ))}
      </div>

      <div className="mt-32">
        <Reveal>
          <h3 className="display text-3xl text-white sm:text-4xl">
            And that&apos;s not all.
          </h3>
          <p className="mt-3 text-[var(--text-2)]">
            More ways we help your business grow.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES_SECONDARY.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <GlassCard className="group h-full p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--border-strong)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] text-white transition-colors group-hover:bg-white group-hover:text-black">
                  <Icon name="spark" size={22} />
                </div>
                <h4 className="display mt-5 text-xl text-white">{s.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
                  {s.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white">
                  Learn More <Icon name="arrow" size={14} />
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
