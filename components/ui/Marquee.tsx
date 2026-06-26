"use client";

import type { ReactNode } from "react";

/**
 * Seamless infinite marquee. Duplicates its children and translates the track
 * with a CSS animation that pauses under reduced-motion (via globals.css).
 */
export default function Marquee({
  children,
  speed = 28,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
