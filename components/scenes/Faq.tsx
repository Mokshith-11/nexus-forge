"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "@/lib/content";
import Icon from "@/components/ui/Icon";

/** Accessible single-open accordion with animated panels. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-28">
      <div className="mb-14 text-center">
        <p className="label">FAQ</p>
        <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
          Good questions.
        </h2>
      </div>

      <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {FAQ.map((item, i) => {
          const expanded = open === i;
          return (
            <li key={item.q}>
              <h3>
                <button
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                >
                  <span className="text-lg text-white">{item.q}</span>
                  <span
                    className="shrink-0 text-[var(--text-2)] transition-transform duration-300"
                    style={{
                      transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Icon name="close" size={18} />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-[var(--text-2)]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
