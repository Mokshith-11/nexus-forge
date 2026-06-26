"use client";

import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import { WHY } from "@/lib/content";

/** "Why Nexus Forge" — a six-up grid of differentiators. */
export default function Why() {
  return (
    <section id="why" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-2xl">
        <p className="label">Why Nexus Forge</p>
        <h2 className="display mt-4 text-4xl text-white sm:text-6xl">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.06}>
            <GlassCard className="group h-full p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--border-strong)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] text-white transition-colors group-hover:bg-white group-hover:text-black">
                <Icon name={item.icon} size={22} />
              </div>
              <h3 className="display mt-5 text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
                {item.desc}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
