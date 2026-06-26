# ÆTHER — Immersive Cinematic Agency Site — Design Spec

Date: 2026-06-26

## Goal
An Awwwards-grade, immersive, **full-screen scroll-driven cinematic journey** for a fictional creative studio (**ÆTHER**, tagline *"We craft worlds that move."*). Inspired in *feel* by scrollytelling experiences like the Richard Mille Art Prize site — scene-by-scene reveals, heavy intentional motion, dark gallery aesthetic — but fully original, responsive on desktop + mobile, and carrying full agency content.

## Direction (decided)
- Immersive scroll-experience: each section is a full-viewport "scene," pinned and revealed on scroll.
- Responsive desktop + mobile (NOT portrait-only). No audio.
- Curated, performance-first stack. Fictional but cohesive brand/content.

## Stack
- **Next.js 15** (App Router) + **React 19** + **TypeScript**, single route `/`.
- **Tailwind CSS v4** with design tokens for the exact palette.
- **Lenis** smooth scroll → drives **GSAP + ScrollTrigger** (pinning, scrubbed timelines, split-text, counters, horizontal gallery).
- **Framer Motion** for component-level hover/enter (cards, accordion, nav, form).
- **React Three Fiber / Three.js** for the hero 3D object only — `dynamic()` import, `ssr:false`, `<Suspense>` fallback, DPR-capped, instanced particles.
- Self-hosted fonts via `next/font` (variable display + clean sans).

## Color & type tokens
- bg `#050505`, surface `#111111`, border `rgba(255,255,255,0.08)`, secondary text `#B3B3B3`, primary text white, accent `#4F7CFF` with purple `#9A7CFF` gradient.
- Radii 20–28px, thin borders, soft glows, generous whitespace.

## Scene flow (each ~full viewport, scroll-pinned with internal reveals)
1. **Hero** — 3D orb + particle field, mouse-parallax gradient light, split-text headline "We craft worlds that move", animated CTA, scroll cue.
2. **Manifesto / About** — large editorial statement, line-by-line masked reveal on scrub.
3. **Featured Work** — horizontal-scroll gallery; each project a cinematic panel with hover zoom + muted video/poster, category tags, details.
4. **Services** — 6 interactive cards (AI Automation, Web Dev, Mobile Apps, UI/UX, Branding, AI Agents) with hover morph.
5. **Process** — pinned 5-step timeline (Discover→Strategy→Design→Develop→Launch) with animated connectors drawn on scrub.
6. **Statistics** — counters (100+, 98%, 5+, 24/7) animating on enter.
7. **Testimonials** — glassmorphism cards: client image, company, quote, rating.
8. **Team** — interactive cards with hover animation.
9. **FAQ** — accordion, smooth height/opacity transitions.
10. **Contact** — premium animated form (client-side validation, simulated success — no backend).
11. **Footer** — minimal: socials, email, phone, location, copyright.

## Global motion / UI primitives (small, single-purpose, reused)
- Floating glass navbar (blurs/condenses on scroll), scene-progress indicator, custom `Cursor` follower, `MagneticButton`, `SplitText`, `Reveal`, `GlassCard`, `Counter`, `Marquee`, page-load transition.

## Performance & accessibility
- Lazy-load 3D + below-fold scenes, code-split heavy libs, `next/image` blur placeholders.
- Full `prefers-reduced-motion` fallback: disable Lenis/pinning, render scenes as a normal stacked scroll, swap animated reveals for static.
- Semantic landmarks, keyboard-operable nav/accordion/form, `:focus-visible` rings, alt text.
- SEO metadata + OpenGraph + JSON-LD; target 90+ Lighthouse.

## Out of scope (YAGNI)
No CMS, no backend/email send, no auth, no multi-page routing, no audio.

## Risks
- Pinned scenes + Lenis + ScrollTrigger interplay (use `ScrollTrigger.scrollerProxy` / Lenis raf integration) — must verify no scroll-jank.
- 3D on low-end/mobile — cap DPR, reduce particle count on small screens, reduced-motion bypass.
