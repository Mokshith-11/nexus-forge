"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT =
  "We believe the best brands aren't seen — they're felt. ÆTHER builds immersive experiences where design, motion, and intelligence move as one.";

/**
 * A large editorial statement whose words brighten one-by-one as the section is
 * scrubbed through. Under reduced-motion the text simply renders fully lit.
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
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={root}
      className="relative mx-auto flex min-h-[90svh] max-w-5xl items-center px-6 py-32"
    >
      <p className="display text-[clamp(1.7rem,4.5vw,3.4rem)] leading-[1.25] text-white">
        {TEXT.split(" ").map((word, i) => (
          <span key={i} className="manifesto-word inline-block">
            {word}&nbsp;
          </span>
        ))}
      </p>
    </section>
  );
}
