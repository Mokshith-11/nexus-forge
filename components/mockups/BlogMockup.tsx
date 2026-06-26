"use client";

/** Mock of an AI-drafted, SEO-scored blog post. */
export default function BlogMockup() {
  return (
    <div className="glass rounded-[20px] p-5">
      <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-2)]">
        <span className="font-mono">blog_post_draft.md</span>
        <span className="rounded-full bg-[var(--status)]/15 px-2.5 py-1 text-[var(--status)]">
          Published
        </span>
      </div>

      <h4 className="display text-xl text-white">
        Top 10 AI Tools for Small Business
      </h4>
      <p className="mt-1 text-xs text-[var(--text-2)]">
        By NexusForge Content Team · 8 min read
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
        Artificial intelligence is no longer a luxury reserved for enterprise
        companies. Today, small businesses can leverage powerful AI tools to
        automate workflows, generate content, analyze data…
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[var(--border)] bg-white/[0.02] px-3.5 py-3">
          <p className="text-xs text-[var(--text-2)]">SEO Score</p>
          <p className="display text-2xl text-white">95/100</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-white/[0.02] px-3.5 py-3">
          <p className="text-xs text-[var(--text-2)]">Words</p>
          <p className="display text-2xl text-white">2,400</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-[var(--text-2)]">
        Readability: A+ · Keyword density: Optimal
      </p>
    </div>
  );
}
