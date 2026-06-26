"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/lib/content";

/**
 * A pinned five-step timeline. A vertical connector draws itself and each step
 * activates as the section is scrubbed. Reduced-motion renders a static,
 * fully-drawn list.
 */
export default function Process() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !root.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");

      gsap.fromTo(
        ".process-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );

      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.25, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: { trigger: step, start: "top 75%" },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative pb-28 pt-4">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative pl-10 sm:pl-16">
          {/* Connector track */}
          <div className="absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px bg-white/10 sm:left-[22px]" />
          <div className="process-line-fill absolute left-[14px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-[var(--accent)] to-[var(--accent-2)] sm:left-[22px]" />

          <ol className="space-y-14">
            {PROCESS.map((step) => (
              <li key={step.index} className="process-step relative">
                <span className="absolute -left-10 top-0 grid h-7 w-7 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-[11px] text-[var(--text-2)] sm:-left-16 sm:h-9 sm:w-9 sm:text-xs">
                  {step.index}
                </span>
                <h3 className="display text-2xl text-white sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--text-2)]">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
