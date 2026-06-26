"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
};

/**
 * Counts from 0 up to `value` once, when scrolled into view. Supports decimals
 * (e.g. 4.2) and string suffixes (e.g. "k+", "x", "hrs"). Renders the final
 * value immediately under reduced-motion. The full label is the accessible text.
 */
export default function Counter({
  value,
  suffix = "",
  decimals = 0,
  className = "",
  duration = 1600,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  const format = (n: number) => n.toFixed(decimals);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setDisplay(eased * value);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${format(value)}${suffix}`}>
      <span aria-hidden="true">
        {format(display)}
        {suffix}
      </span>
    </span>
  );
}
