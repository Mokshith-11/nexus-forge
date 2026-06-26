"use client";

import { useEffect, useState } from "react";
import { SCENES } from "@/lib/content";

/**
 * A vertical dot index on the right edge that highlights the active scene as it
 * enters the viewport. Decorative — hidden from assistive tech and on small
 * screens.
 */
export default function SceneProgress() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = SCENES.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SCENES.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-6 top-1/2 z-[80] hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      {SCENES.map((scene, i) => (
        <a
          key={scene.id}
          href={`#${scene.id}`}
          className="group relative flex items-center"
          tabIndex={-1}
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === active
                ? "h-6 w-[3px] bg-white"
                : "h-[3px] w-[3px] bg-white/30 group-hover:bg-white/60"
            }`}
          />
          <span className="absolute right-5 whitespace-nowrap text-[11px] uppercase tracking-widest text-[var(--text-2)] opacity-0 transition-opacity group-hover:opacity-100">
            {scene.label}
          </span>
        </a>
      ))}
    </div>
  );
}
