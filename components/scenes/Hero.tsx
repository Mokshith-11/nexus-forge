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
      <div className="h-72 w-72 rounded-full bg-[radial-gradient(circle_at_40%_35%,#26262b,#0c0c0e_70%)] blur-[2px]" />
    </div>
  ),
});

/** Fullscreen hero: minimal serif headline over a subtle monochrome 3D backdrop. */
export default function Hero() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
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
      <div
        ref={lightRef}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06), transparent 65%)",
        }}
      />

      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--text-2)]"
        >
          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium tracking-wider text-black">
            NEW
          </span>
          India&apos;s First All-in-One AI Agency
        </motion.span>

        <h1 className="display mt-8 text-[clamp(2.9rem,9vw,7.5rem)] font-light leading-[0.98] text-white">
          <SplitText as="span" text="Your Entire" className="block" />
          <SplitText
            as="span"
            text="Business."
            className="block italic"
            delay={0.15}
          />
          <span className="block">
            <SplitText as="span" text="Powered by " className="inline" delay={0.3} />
            <SplitText
              as="span"
              text="AI."
              className="inline italic text-white"
              delay={0.45}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-base text-[var(--text-2)] sm:text-lg"
        >
          From automation to content, websites to analytics — one AI-powered
          agency for everything your business needs. Faster. Smarter.
          Unstoppable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black"
          >
            Book a Call
            <Icon
              name="arrow"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticButton>
          <MagneticButton
            href="#process"
            className="rounded-full border border-[var(--border-strong)] px-7 py-3.5 text-sm text-white transition-colors hover:bg-white/5"
          >
            See Process
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#process"
        aria-label="Scroll to process"
        className="label absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
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
