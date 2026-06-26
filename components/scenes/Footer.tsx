import Marquee from "@/components/ui/Marquee";
import { CONTACT, SOCIALS } from "@/lib/content";

/** Minimal premium footer with a giant wordmark marquee and contact details. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] pt-20">
      <Marquee className="opacity-[0.07] select-none" speed={32}>
        <span className="display whitespace-nowrap text-[14vw] leading-none text-white">
          ÆTHER — WE CRAFT WORLDS THAT MOVE —
        </span>
      </Marquee>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-3xl text-white">ÆTHER</p>
            <p className="mt-3 max-w-xs text-sm text-[var(--text-2)]">
              A cinematic creative studio. We craft worlds that move.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-[var(--text-2)]">
                Connect
              </p>
              <ul className="space-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/80 transition-colors hover:text-white"
                      data-cursor
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-[var(--text-2)]">
                Reach us
              </p>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>{CONTACT.phone}</li>
                <li>{CONTACT.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-2)] sm:flex-row">
          <p>© {new Date().getFullYear()} ÆTHER Studio. All rights reserved.</p>
          <p>Crafted with intent — Lisbon · Remote</p>
        </div>
      </div>
    </footer>
  );
}
