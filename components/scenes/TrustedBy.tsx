import Marquee from "@/components/ui/Marquee";
import { TRUSTED } from "@/lib/content";

/** A quiet marquee of partner wordmarks beneath the hero. */
export default function TrustedBy() {
  return (
    <section
      aria-label="Built with the tools you trust"
      className="relative border-y border-[var(--border)] py-10"
    >
      <p className="label mb-7 text-center">Built with the tools you trust</p>
      <Marquee speed={30} className="opacity-60">
        {TRUSTED.map((name) => (
          <span
            key={name}
            className="display whitespace-nowrap text-2xl text-white/70 sm:text-3xl"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
