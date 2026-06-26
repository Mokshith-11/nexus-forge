"use client";

import Reveal from "@/components/ui/Reveal";
import { TEAM } from "@/lib/content";

/** Interactive team cards: portrait tile with hover lift + gradient reveal. */
export default function Team() {
  return (
    <section id="team" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-2)]">
          Team
        </p>
        <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
          The people behind ÆTHER
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.05}>
            <article
              data-cursor
              className="group relative aspect-[3/4] overflow-hidden rounded-[24px] border border-[var(--border)]"
            >
              {/* Portrait placeholder built from initials + gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_30%,#1c2350,#0a0a14)] transition-transform duration-700 group-hover:scale-105"
              >
                <span className="display text-6xl text-white/15 transition-colors duration-500 group-hover:text-white/30">
                  {member.initials}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-lg font-medium text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--text-2)]">{member.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
