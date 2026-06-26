"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

const STATEMENT = "You dream it. We ship it.";

/**
 * The Process opener: a large editorial statement whose words brighten as the
 * section is scrubbed, plus the intro copy and CTA. Owns the `#process` anchor;
 * the step timeline renders directly beneath it.
 */
export default function Manifesto() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !root.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 75%",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={root}
      className="relative mx-auto max-w-5xl px-6 pb-10 pt-32"
    >
      <p className="label mb-8">Our Process</p>
      <p className="display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] text-white">
        {STATEMENT.split(" ").map((word, i) => (
          <span key={i} className="manifesto-word inline-block">
            {word}&nbsp;
          </span>
        ))}
      </p>
      <p className="mt-8 max-w-xl text-[var(--text-2)]">
        Share your vision. We handle the rest — automating workflows, writing
        content, building websites, managing social media, and analyzing data.
        All powered by AI, delivered in days.
      </p>
      <div className="mt-8">
        <MagneticButton
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm text-white transition-colors hover:bg-white/5"
        >
          Start Your Project
        </MagneticButton>
      </div>
    </section>
  );
}
