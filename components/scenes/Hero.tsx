"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
import Icon from "@/components/ui/Icon";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-72 w-72 rounded-full bg-[radial-gradient(circle_at_35%_30%,#c9d4ff,#4f7cff_38%,#5b2bbf_78%,#1a0e3d)] blur-[2px]" />
    </div>
  ),
});

/** Fullscreen cinematic hero: 3D orb, particles, mouse-parallax light. */
export default function Hero() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Parallax gradient light */}
      <div
        ref={lightRef}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,124,255,0.20), rgba(154,124,255,0.10) 40%, transparent 68%)",
        }}
      />

      {/* 3D layer */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--text-2)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Available for new work — 2026
        </motion.span>

        <h1 className="display mt-6 text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.95] text-white">
          <SplitText as="span" text="We craft worlds" className="block" />
          <span className="block">
            <SplitText as="span" text="that " className="inline" delay={0.25} />
            <SplitText
              as="span"
              text="move"
              className="inline text-gradient"
              delay={0.4}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mx-auto mt-7 max-w-xl text-base text-[var(--text-2)] sm:text-lg"
        >
          A cinematic creative studio building immersive brands, websites, and
          products at the intersection of design, motion, and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform"
          >
            View our work
            <Icon
              name="arrow"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-[var(--border-strong)] px-7 py-3.5 text-sm text-white transition-colors hover:bg-white/5"
          >
            Get in touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[var(--text-2)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="flex flex-col items-center gap-2">
          Scroll
          <motion.span
            className="block h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
