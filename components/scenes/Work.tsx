"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/lib/content";

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <article
      data-cursor
      className="group relative flex h-[62vh] w-[78vw] shrink-0 flex-col justify-end overflow-hidden rounded-[28px] border border-[var(--border)] p-7 sm:w-[58vw] lg:w-[42vw]"
    >
      {/* Cinematic gradient poster */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        }}
      />
      {/* Animated "preview" shimmer revealed on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 0%, rgba(255,255,255,0.22), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <span className="label text-white/70">{project.category}</span>
      <h3 className="display mt-4 text-4xl text-white sm:text-5xl">
        {project.title}
      </h3>
      <p className="mt-2 max-w-md text-sm text-white/80">{project.blurb}</p>
    </article>
  );
}

export default function Work() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReduced(isReduced);
    if (isReduced || !root.current || !track.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const getScroll = () =>
        track.current!.scrollWidth - window.innerWidth + 64;
      gsap.to(track.current, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${getScroll()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={root} className="relative overflow-hidden py-24">
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-6">
        <div>
          <p className="label">Selected Work</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
            Featured projects.
          </h2>
        </div>
        <span className="hidden text-sm text-[var(--text-2)] md:block">
          {reduced ? "Scroll" : "Scroll to explore →"}
        </span>
      </div>

      <div
        ref={track}
        className={
          reduced
            ? "mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 [&>article]:h-[58vh] [&>article]:w-full"
            : "flex gap-6 px-8 will-change-transform"
        }
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
