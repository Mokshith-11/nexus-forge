"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Automate", "Create", "Analyze", "Scale"];

/**
 * Cinematic preloader: cycles a few words alongside a 0→100 counter and the
 * "NF" mark, then clips away to reveal the page. Locks scroll while active by
 * dispatching `intro:lock` / `intro:unlock` (handled in SmoothScroll) plus a
 * body-overflow fallback. Always unlocks — even under reduced-motion or if it
 * errors — so the page can never be left unscrollable. Shows once per session.
 */
export default function Intro() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const seen = sessionStorage.getItem("nf-intro-seen");
    if (reduced || seen) return;

    setActive(true);
    sessionStorage.setItem("nf-intro-seen", "1");

    // Lock scroll.
    window.dispatchEvent(new Event("intro:lock"));
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const DURATION = 2200;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * 100));
      setWordIndex(Math.min(WORDS.length - 1, Math.floor(p * WORDS.length)));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const done = window.setTimeout(() => setActive(false), DURATION + 650);

    const unlock = () => {
      window.dispatchEvent(new Event("intro:unlock"));
      document.body.style.overflow = "";
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(done);
      unlock();
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        window.dispatchEvent(new Event("intro:unlock"));
        document.body.style.overflow = "";
      }}
    >
      {active && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--bg)]"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="display absolute left-6 top-6 text-sm tracking-[0.3em] text-white sm:left-10 sm:top-10">
            NF
          </span>

          <div className="relative h-[1.2em] overflow-hidden text-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={wordIndex}
                className="display block text-5xl italic text-white sm:text-7xl"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="label absolute bottom-8 right-6 text-4xl sm:bottom-12 sm:right-12 sm:text-6xl">
            {count.toString().padStart(3, "0")}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
