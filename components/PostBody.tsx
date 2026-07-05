import type { Block } from "@/lib/posts";

/** Renders a blog post body from typed content blocks. */
export default function PostBody({ body }: { body: Block[] }) {
  return (
    <div className="mt-10 space-y-6">
      {body.map((block, i) => {
        if ("h2" in block) {
          return (
            <h2
              key={i}
              className="display pt-4 text-2xl text-white sm:text-3xl"
            >
              {block.h2}
            </h2>
          );
        }
        if ("ul" in block) {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {block.ul.map((li, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-[var(--text-2)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-lg leading-relaxed text-[var(--text-2)]">
            {block.p}
          </p>
        );
      })}
    </div>
  );
}
