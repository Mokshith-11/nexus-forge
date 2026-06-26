"use client";

import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/content";

/** Animated impact counters. */
export default function Stats() {
  return (
    <section id="stats" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(79,124,255,0.14), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="border-l border-[var(--border)] px-6 first:border-l-0 lg:px-8"
          >
            <div className="display text-5xl text-white sm:text-6xl lg:text-7xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-3 text-sm text-[var(--text-2)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
