"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NAV } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";
import Icon from "@/components/ui/Icon";

/**
 * Floating glass navbar. Condenses and deepens its blur after a small scroll
 * threshold. Collapses to a slide-down panel on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[90] flex justify-center px-4">
      <motion.nav
        aria-label="Primary"
        className="pointer-events-auto mt-4 flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500"
        animate={{
          backgroundColor: scrolled
            ? "rgba(10,10,12,0.55)"
            : "rgba(10,10,12,0.0)",
          borderColor: scrolled
            ? "rgba(255,255,255,0.10)"
            : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        style={{ borderWidth: 1, borderStyle: "solid" }}
      >
        <a
          href="#hero"
          className="label text-white"
          aria-label="Nexus Forge home"
        >
          NEXUS FORGE
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm text-[var(--text-2)] transition-colors hover:text-white"
                data-cursor
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            href="#contact"
            className="glass rounded-full px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Get Started
          </MagneticButton>
        </div>

        <button
          className="pointer-events-auto text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass pointer-events-auto fixed inset-x-4 top-20 z-[89] rounded-3xl p-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-lg text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-white px-5 py-2 text-black"
              >
                Get Started
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
