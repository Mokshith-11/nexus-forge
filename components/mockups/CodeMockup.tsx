"use client";

/** Mock of a live code editor with a Lighthouse / build readout. */
export default function CodeMockup() {
  return (
    <div className="glass rounded-[20px] p-5">
      <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-2)]">
        <span className="font-mono">index.tsx</span>
        <span className="flex items-center gap-1.5 text-[var(--status)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--status)]" />
          Live
        </span>
      </div>

      <pre className="overflow-hidden rounded-xl border border-[var(--border)] bg-white/[0.02] p-4 font-mono text-[13px] leading-relaxed text-[var(--text-2)]">
        <code>
          <span className="text-white">import</span> {"{ motion }"}{" "}
          <span className="text-white">from</span> &apos;framer-motion&apos;
          {"\n"}
          <span className="text-[var(--text-2)]">// Hero Section</span>
          {"\n"}
          <span className="text-white">export default function</span> Hero() {"{"}
          {"\n"}
          {"  "}<span className="text-white">return</span> (
          {"\n"}
          {"    "}&lt;motion.div
          {"\n"}
          {"      "}className=&quot;hero-section&quot;
          {"\n"}
          {"      "}animate={"{{ opacity: 1 }}"}
          {"\n"}
          {"    "}&gt;
        </code>
      </pre>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[var(--border)] bg-white/[0.02] px-3.5 py-3">
          <p className="text-xs text-[var(--text-2)]">Lighthouse</p>
          <p className="display text-2xl text-white">98</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-white/[0.02] px-3.5 py-3">
          <p className="text-xs text-[var(--text-2)]">Build</p>
          <p className="display text-2xl text-white">0.8s</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-[var(--text-2)]">
        Framework: Next.js · TypeScript · Deployed on Vercel
      </p>
    </div>
  );
}
