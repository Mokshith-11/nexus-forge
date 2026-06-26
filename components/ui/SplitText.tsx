"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** Delay (s) before the stagger begins. */
  delay?: number;
  /** Split granularity. */
  by?: "word" | "char";
};

/**
 * Splits text into masked word/char spans and reveals them with a staggered
 * upward slide when scrolled into view. Each word stays whole (no mid-word
 * wraps) and the whole string remains readable to screen readers via aria-label.
 */
export default function SplitText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  by = "word",
}: Props) {
  const Tag = motion[as];
  const units = by === "char" ? Array.from(text) : text.split(" ");

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            variants={{
              hidden: { y: "110%" },
              show: {
                y: 0,
                transition: { duration: 0.85, ease: EASE.out },
              },
            }}
          >
            {unit}
            {by === "word" ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
