"use client";

import { useEffect, useState } from "react";

/** Shared easing curves used across GSAP + Framer Motion. */
export const EASE = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  expoOut: "expo.out",
  power3: "power3.out",
};

export const REVEAL_DURATION = 0.9;

/**
 * Tracks the user's reduced-motion preference and mirrors it onto
 * `html.reduce` so CSS and JS can branch off a single source of truth.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (matches: boolean) => {
      setReduced(matches);
      document.documentElement.classList.toggle("reduce", matches);
    };
    apply(mq.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/** True on touch / coarse pointers where hover affordances should be skipped. */
export function isCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none)").matches;
}
