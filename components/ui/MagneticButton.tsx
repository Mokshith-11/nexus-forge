"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/**
 * A button/link that drifts toward the pointer within its bounds and springs
 * back on leave. Falls back to a static element under reduced-motion.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
  type = "button",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span style={{ display: "inline-flex" }}>{children}</motion.span>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      data-cursor
    >
      {href ? (
        <a href={href} aria-label={ariaLabel} className={className}>
          {inner}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={className}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}
