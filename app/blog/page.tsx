import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/scenes/Footer";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — AI Automation, Web Design & Growth | Nexus Forge",
  description:
    "Practical guides on AI automation, WhatsApp chatbots, website designing, and growing your business with AI — from the Nexus Forge team.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-40">
        <p className="label">Blog</p>
        <h1 className="display mt-5 text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] text-white">
          Ideas on AI, automation &amp; growth.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--text-2)]">
          Practical guides on AI automation, WhatsApp chatbots, website
          designing, and using AI to grow your business.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-8 transition-opacity hover:opacity-80"
              >
                <p className="label text-[0.65rem]">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readMins} min read
                </p>
                <h2 className="display mt-3 text-2xl text-white sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-[var(--text-2)]">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm text-white/70 group-hover:text-white">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
