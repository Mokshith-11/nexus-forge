"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A custom cursor follower: an outer ring that lerps toward the pointer and an
 * inner dot that tracks it instantly. Grows when hovering `[data-cursor]`
 * elements. Hidden on coarse pointers and under reduced-motion (via CSS).
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;
    let hovering = false;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const overInteractive = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor]",
      );
      hovering = Boolean(overInteractive);
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (ring.current) {
        const scale = hovering ? 1.9 : 1;
        ring.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ring.current.style.opacity = hovering ? "0.9" : "0.55";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="cursor-root pointer-events-none fixed inset-0 z-[9998] hidden md:block">
      <div
        ref={ring}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-white/60"
        style={{ transition: "opacity 0.2s ease" }}
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white"
      />
    </div>
  );
}
