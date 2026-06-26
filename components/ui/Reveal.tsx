"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Add a blur-in for a softer cinematic entrance. */
  blur?: boolean;
};

/**
 * Fades, lifts, scales and optionally blurs its children in when scrolled into
 * view. Animates once. Framer Motion automatically respects the user's
 * reduced-motion preference for transforms.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  blur = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        scale: 0.98,
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE.out, delay }}
    >
      {children}
    </motion.div>
  );
}
