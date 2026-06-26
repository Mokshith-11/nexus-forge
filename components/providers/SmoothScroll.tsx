"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";

/**
 * Wires Lenis smooth scroll into the GSAP ticker and keeps ScrollTrigger in
 * sync. Under prefers-reduced-motion we skip Lenis entirely and let the
 * browser scroll natively, while still registering ScrollTrigger so reveal
 * fallbacks work.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (reduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Pause smooth scroll while the intro preloader is on screen.
    const lock = () => lenis.stop();
    const unlock = () => lenis.start();
    window.addEventListener("intro:lock", lock);
    window.addEventListener("intro:unlock", unlock);

    // Recompute pin/scrub positions once everything is laid out.
    const refresh = () => ScrollTrigger.refresh();
    const id = window.setTimeout(refresh, 300);

    return () => {
      window.clearTimeout(id);
      window.removeEventListener("intro:lock", lock);
      window.removeEventListener("intro:unlock", unlock);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
