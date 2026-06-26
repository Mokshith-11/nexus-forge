# ÆTHER Immersive Agency Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an Awwwards-grade, immersive, full-screen scroll-driven cinematic landing page for the fictional creative studio ÆTHER.

**Architecture:** Next.js 15 App Router single route. A `SmoothScrollProvider` wires Lenis into GSAP ScrollTrigger's RAF. Each section is a self-contained "scene" component composed on the page. Small reusable motion primitives (Cursor, MagneticButton, SplitText, Reveal, Counter) are shared. The hero 3D object is a lazily `dynamic()`-imported React Three Fiber scene. A global `prefers-reduced-motion` switch degrades all motion to static.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis, Framer Motion, React Three Fiber / Three.js, Vitest + Testing Library (smoke tests).

**Verification model (frontend-adapted TDD):** Each task ends with a verification gate — `npm run typecheck` + `npm run build` must pass, and where noted a Vitest smoke test asserting the component renders its key content/landmarks. Visual/motion correctness is confirmed by running `npm run dev` and observing the named behavior.

---

## File Structure

```
app/
  layout.tsx              # fonts, metadata, SEO, JSON-LD, <body> wrappers
  page.tsx                # composes all scenes in order
  globals.css             # Tailwind v4 + design tokens + base styles
components/
  providers/SmoothScroll.tsx     # Lenis <-> GSAP ScrollTrigger integration
  ui/Cursor.tsx                  # custom cursor follower
  ui/MagneticButton.tsx          # magnetic hover button
  ui/SplitText.tsx               # per-char/word split for reveals
  ui/Reveal.tsx                  # scroll-triggered fade/scale/blur reveal
  ui/Counter.tsx                 # animated number counter
  ui/Marquee.tsx                 # infinite marquee strip
  ui/GlassCard.tsx               # glassmorphism card shell
  layout/Navbar.tsx              # floating glass navbar + scroll blur
  layout/SceneProgress.tsx       # scene progress indicator
  scenes/Hero.tsx
  scenes/HeroCanvas.tsx          # R3F orb + particles (dynamic, ssr:false)
  scenes/Manifesto.tsx
  scenes/Work.tsx                # horizontal-scroll gallery
  scenes/Services.tsx
  scenes/Process.tsx             # pinned timeline
  scenes/Stats.tsx
  scenes/Testimonials.tsx
  scenes/Team.tsx
  scenes/Faq.tsx
  scenes/Contact.tsx
  scenes/Footer.tsx
lib/
  content.ts              # all fictional ÆTHER content (projects, services, team, ...)
  motion.ts               # shared GSAP/easing constants, useReducedMotion hook
test/
  setup.ts
  smoke.test.tsx          # renders page sections, asserts key content + landmarks
```

---

### Task 0: Scaffold project

**Files:** Create `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `vitest.config.ts`, `test/setup.ts`.

- [ ] **Step 1:** Create Next.js 15 app non-interactively:
  `npx create-next-app@latest . --ts --tailwind --app --eslint --no-src-dir --import-alias "@/*" --use-npm --yes`
- [ ] **Step 2:** Install motion/3D deps:
  `npm i gsap lenis framer-motion three @react-three/fiber @react-three/drei`
  then dev/test deps:
  `npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @types/three`
- [ ] **Step 3:** Add scripts to `package.json`: `"typecheck": "tsc --noEmit"`, `"test": "vitest run"`. Add `vitest.config.ts` (jsdom env, react plugin, `@` alias, `test/setup.ts`) and `test/setup.ts` (`import '@testing-library/jest-dom'`).
- [ ] **Step 4:** Verify: `npm run build` PASS, `npm run typecheck` PASS.
- [ ] **Step 5:** Commit: `feat: scaffold Next.js 15 + Tailwind + motion/3D deps`.

---

### Task 1: Design tokens, fonts, base styles, SEO layout

**Files:** Modify `app/globals.css`, `app/layout.tsx`. Create `lib/content.ts` (site meta only for now).

- [ ] **Step 1:** In `globals.css` define CSS custom properties under `@theme`/`:root`: `--bg:#050505; --surface:#111; --border:rgba(255,255,255,.08); --text-2:#B3B3B3; --accent:#4F7CFF; --accent-2:#9A7CFF;`. Set `body{background:var(--bg);color:#fff}`, smooth font rendering, `::selection`, base `*{box-sizing}`, and a `.glass` utility (bg blur + border). Add `@media (prefers-reduced-motion: reduce)` hook class `html.reduce`.
- [ ] **Step 2:** In `layout.tsx` load a variable display font + sans via `next/font` (e.g. `next/font/google` Space Grotesk display + Inter body, or self-hosted), expose as CSS vars. Export `metadata` (title, description, openGraph, twitter, metadataBase) and inject `application/ld+json` Organization JSON-LD. Add `<html lang="en">`, semantic structure.
- [ ] **Step 3:** Smoke test `test/smoke.test.tsx`: render a trivial component to confirm Vitest + jsdom + RTL pipeline works (`expect(screen.getByText(...))`).
- [ ] **Step 4:** Verify: `npm run test` PASS, `npm run build` PASS.
- [ ] **Step 5:** Commit: `feat: design tokens, fonts, SEO metadata + JSON-LD`.

---

### Task 2: SmoothScroll provider (Lenis ↔ GSAP) + reduced-motion

**Files:** Create `components/providers/SmoothScroll.tsx`, `lib/motion.ts`. Modify `app/layout.tsx`.

- [ ] **Step 1:** `lib/motion.ts`: export `EASE` constants and a `useReducedMotion()` hook (reads `matchMedia('(prefers-reduced-motion: reduce)')`, returns boolean, sets `html.reduce` class).
- [ ] **Step 2:** `SmoothScroll.tsx` (`'use client'`): instantiate Lenis, register `gsap.registerPlugin(ScrollTrigger)`, drive Lenis via `gsap.ticker` (`lenis.raf`), `ScrollTrigger.update` on Lenis `scroll`, `gsap.ticker.lagSmoothing(0)`. If reduced-motion: skip Lenis, fall back to native scroll. Clean up on unmount. Wrap `{children}`.
- [ ] **Step 3:** Wrap `<body>` children with `<SmoothScroll>` in `layout.tsx`.
- [ ] **Step 4:** Verify: `npm run build` PASS, `npm run typecheck` PASS; `npm run dev` → confirm smooth scrolling and no console errors.
- [ ] **Step 5:** Commit: `feat: Lenis + GSAP ScrollTrigger smooth-scroll provider`.

---

### Task 3: Core UI motion primitives

**Files:** Create `components/ui/{Cursor,MagneticButton,SplitText,Reveal,Counter,Marquee,GlassCard}.tsx`.

- [ ] **Step 1:** `Cursor.tsx` — fixed dot+ring following pointer (rAF lerp), grows on hover of `[data-cursor]`, hidden on touch / reduced-motion.
- [ ] **Step 2:** `MagneticButton.tsx` — wraps children, translates toward pointer within bounds, springs back (Framer Motion), disabled under reduced-motion.
- [ ] **Step 3:** `SplitText.tsx` — splits text into word/char spans with `overflow:hidden` masks; exposes a `play` via ScrollTrigger or Framer `whileInView`; static text under reduced-motion.
- [ ] **Step 4:** `Reveal.tsx` — wrapper applying fade + scale + blur-in `whileInView` (`once:true`), respects reduced-motion. `Counter.tsx` — counts from 0 to target on enter (supports suffix `+`, `%`, `/7`). `Marquee.tsx` — seamless looped strip. `GlassCard.tsx` — glass shell (radius, border, blur, soft glow).
- [ ] **Step 5:** Smoke test: render `Counter` target `100` suffix `+` → asserts `100+` present after flush; render `Reveal` child text → present. Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 6:** Commit: `feat: core motion primitives (cursor, magnetic, split-text, reveal, counter)`.

---

### Task 4: Content module + Navbar + SceneProgress

**Files:** Expand `lib/content.ts`; create `components/layout/{Navbar,SceneProgress}.tsx`.

- [ ] **Step 1:** `lib/content.ts`: typed exports — `NAV`, `PROJECTS` (title, category[], blurb, poster, accent), `SERVICES` (icon, title, desc), `PROCESS` (step, title, desc), `STATS` (value, suffix, label), `TESTIMONIALS` (name, company, quote, rating, avatar), `TEAM` (name, role, avatar), `FAQ` (q, a), `CONTACT`/footer info. Fully written fictional ÆTHER content.
- [ ] **Step 2:** `Navbar.tsx` (`'use client'`) — floating glass bar, logo + nav links (anchor scroll), CTA `MagneticButton`; adds heavier blur/condense after scrollY > 40 (Framer `useScroll`); mobile menu. Keyboard accessible.
- [ ] **Step 3:** `SceneProgress.tsx` — vertical dot index of scenes synced to active section (IntersectionObserver), `aria-hidden`.
- [ ] **Step 4:** Smoke test: Navbar renders all `NAV` labels + nav landmark `role="navigation"`. Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 5:** Commit: `feat: content module, glass navbar, scene progress`.

---

### Task 5: Hero scene + R3F canvas

**Files:** Create `components/scenes/Hero.tsx`, `components/scenes/HeroCanvas.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** `HeroCanvas.tsx` (`'use client'`) — R3F `<Canvas>` capped `dpr={[1,1.8]}`: a distorted/iridescent sphere (drei `MeshDistortMaterial` or shader), instanced particle field, lights tinted accent/purple, gentle auto-rotate + mouse-driven rotation. Reduce particle count on small screens.
- [ ] **Step 2:** `Hero.tsx` — full-viewport section: `dynamic(() => import('./HeroCanvas'), { ssr:false, loading: gradient fallback })`; mouse-parallax gradient light layer; `SplitText` headline "We craft worlds that move"; subtitle; `MagneticButton` CTA; scroll cue. `data-cursor` hot zones.
- [ ] **Step 3:** Add `<Hero/>` to `page.tsx`. Smoke test: Hero section has `role` heading containing "worlds" and a CTA link/button (canvas mocked / not asserted).
- [ ] **Step 4:** Verify `npm run test` + `npm run build` PASS; `npm run dev` → orb visible, rotates with mouse, particles drift, reduced-motion shows static gradient.
- [ ] **Step 5:** Commit: `feat: cinematic hero with R3F orb + particles`.

---

### Task 6: Manifesto scene

**Files:** Create `components/scenes/Manifesto.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Full-viewport editorial statement; large multi-line copy revealed word-by-word on scrub via `SplitText` + ScrollTrigger; subtle pinned background gradient drift.
- [ ] **Step 2:** Add to `page.tsx`. Smoke test asserts manifesto key phrase present.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: manifesto scene with scrubbed text reveal`.

---

### Task 7: Featured Work horizontal gallery

**Files:** Create `components/scenes/Work.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Pinned section translating a horizontal track of `PROJECTS` panels on vertical scroll (GSAP ScrollTrigger pin + scrub, x = -(track-vw)); each panel: poster/`next/image`, hover zoom, muted autoplay `<video>` on hover (poster fallback), category tags, title, blurb. Reduced-motion → vertical stacked grid (no pin).
- [ ] **Step 2:** Add to `page.tsx`. Smoke test: all project titles render.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS; `dev` → horizontal scrub works, hover zoom plays.
- [ ] **Step 4:** Commit: `feat: featured work horizontal scroll gallery`.

---

### Task 8: Services scene

**Files:** Create `components/scenes/Services.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Responsive grid of 6 `SERVICES` `GlassCard`s with icon, title, desc; hover morph (scale/border glow/gradient sweep), staggered `Reveal` on enter, `data-cursor`.
- [ ] **Step 2:** Add to page. Smoke test: all 6 service titles present.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: interactive services grid`.

---

### Task 9: Process pinned timeline

**Files:** Create `components/scenes/Process.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Pinned 5-step timeline (Discover→Strategy→Design→Develop→Launch); connector line/path drawn (`strokeDashoffset`) and steps activate as scroll scrubs; numbered nodes, titles, descriptions. Reduced-motion → static stacked list with full connector.
- [ ] **Step 2:** Add to page. Smoke test: all 5 step titles present.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: pinned process timeline with animated connectors`.

---

### Task 10: Statistics scene

**Files:** Create `components/scenes/Stats.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** 4-up `STATS` row using `Counter` (100+, 98%, 5+, 24/7) animating on enter, labels, thin dividers, subtle gradient.
- [ ] **Step 2:** Add to page. Smoke test: labels (Projects, etc.) present.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: animated statistics counters`.

---

### Task 11: Testimonials scene

**Files:** Create `components/scenes/Testimonials.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Glassmorphism `GlassCard`s: avatar, name, company, quote, star rating; marquee or draggable row; `Reveal` stagger.
- [ ] **Step 2:** Add to page. Smoke test: a testimonial quote + company present.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: glassmorphism testimonials`.

---

### Task 12: Team scene

**Files:** Create `components/scenes/Team.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Interactive team cards: portrait, name, role; hover animation (image reveal/duotone shift, name slide). Responsive grid.
- [ ] **Step 2:** Add to page. Smoke test: team member names present.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: interactive team cards`.

---

### Task 13: FAQ accordion

**Files:** Create `components/scenes/Faq.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Accessible accordion (`button[aria-expanded]`, region) with smooth Framer Motion height/opacity; one-open behavior; keyboard operable.
- [ ] **Step 2:** Add to page. Smoke test: question renders; clicking toggles `aria-expanded`.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: FAQ accordion`.

---

### Task 14: Contact scene

**Files:** Create `components/scenes/Contact.tsx`. Modify `app/page.tsx`.

- [ ] **Step 1:** Large premium form (name, email, budget, message) with floating labels, client-side validation, animated submit → simulated success state (no network). Accessible labels + error messaging (`aria-describedby`).
- [ ] **Step 2:** Add to page. Smoke test: submitting empty form shows validation; valid submit shows success message.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: animated contact form`.

---

### Task 15: Footer + final assembly

**Files:** Create `components/scenes/Footer.tsx`. Modify `app/page.tsx`, `app/layout.tsx`.

- [ ] **Step 1:** Minimal footer: big wordmark, social links, email, phone, location, copyright; mount `Cursor`, `Navbar`, `SceneProgress` globally; ensure scene order in `page.tsx` matches spec.
- [ ] **Step 2:** Add to page. Smoke test (`smoke.test.tsx` full page): asserts presence of hero heading, each scene heading, contentinfo landmark, contact + footer info.
- [ ] **Step 3:** Verify `npm run test` + `npm run build` PASS.
- [ ] **Step 4:** Commit: `feat: footer + global chrome + full page assembly`.

---

### Task 16: Performance, a11y & reduced-motion pass

**Files:** Touch scenes as needed; `next.config.ts`.

- [ ] **Step 1:** Confirm `dynamic`/lazy boundaries (HeroCanvas, below-fold heavy scenes), `next/image` usage + blur placeholders, code-split heavy libs. Cap particle counts on mobile.
- [ ] **Step 2:** Verify reduced-motion path disables Lenis + all pins/scrubs and renders static stacked layout end-to-end (`dev` with OS reduced-motion on).
- [ ] **Step 3:** A11y sweep: landmarks, heading order, focus-visible rings, keyboard nav/accordion/form, alt text, color contrast for `--text-2` on `--bg`.
- [ ] **Step 4:** Run `npx @next/bundle-analyzer` (optional) / `npm run build` and check route is statically rendered; note any oversized chunk.
- [ ] **Step 5:** Verify `npm run test` + `npm run build` + `npm run typecheck` PASS.
- [ ] **Step 6:** Commit: `perf: lazy-loading, reduced-motion fallbacks, a11y pass`.

---

## Self-Review

- **Spec coverage:** Hero✓(T5) Manifesto✓(T6) Work✓(T7) Services✓(T8) Process✓(T9) Stats✓(T10) Testimonials✓(T11) Team✓(T12) FAQ✓(T13) Contact✓(T14) Footer✓(T15); navbar/progress✓(T4); primitives/cursor/magnetic/split/counter✓(T3); Lenis+GSAP✓(T2); tokens/fonts/SEO/JSON-LD✓(T1); reduced-motion + perf + a11y✓(T16); R3F orb/particles/parallax✓(T5). All spec sections mapped.
- **Placeholder scan:** No "TBD"/"add error handling" left; content fully specified in T4; validation behavior specified in T14.
- **Type consistency:** `content.ts` export names (`PROJECTS`, `SERVICES`, `PROCESS`, `STATS`, `TESTIMONIALS`, `TEAM`, `FAQ`, `NAV`) used consistently across T7–T15. Primitive names (`Reveal`, `Counter`, `SplitText`, `MagneticButton`, `GlassCard`, `Cursor`) consistent across tasks.
