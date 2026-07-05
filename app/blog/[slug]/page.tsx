import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/scenes/Footer";
import PostBody from "@/components/PostBody";
import { POSTS } from "@/lib/posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nexusforge.in";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Nexus Forge`,
    description: post.description,
    keywords: [post.keyword],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Nexus Forge" },
    publisher: { "@type": "Organization", name: "Nexus Forge", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article className="mx-auto max-w-3xl px-6 pb-16 pt-40">
        <Link href="/blog" className="label text-[0.65rem] hover:text-white">
          ← Blog
        </Link>
        <p className="label mt-6 text-[0.65rem]">
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          · {post.readMins} min read
        </p>
        <h1 className="display mt-4 text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.08] text-white">
          {post.title}
        </h1>

        <PostBody body={post.body} />

        <div className="mt-14 rounded-[24px] border border-[var(--border)] p-8 text-center">
          <h2 className="display text-2xl text-white">
            Want this set up for your business?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--text-2)]">
            Nexus Forge builds it for you — fast. Book a quick call and we&apos;ll
            scope it.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black"
          >
            Book a Call
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
