import Marquee from "@/components/ui/Marquee";
import { CONTACT, SOCIALS } from "@/lib/content";

/** Minimal premium footer with a giant wordmark marquee and contact details. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] pt-20">
      <Marquee className="opacity-[0.06] select-none" speed={34}>
        <span className="display whitespace-nowrap text-[14vw] italic leading-none text-white">
          Nexus Forge — Your entire business, powered by AI —
        </span>
      </Marquee>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-3xl text-white">Nexus Forge</p>
            <p className="mt-3 max-w-xs text-sm text-[var(--text-2)]">
              An all-in-one AI agency. Your entire business, powered by AI.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-[var(--text-2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--status)]" />
              {CONTACT.status}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            {SOCIALS.length > 0 && (
              <div>
                <p className="label mb-3">Connect</p>
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
            )}
            <div>
              <p className="label mb-3">Reach us</p>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href={`mailto:${CONTACT.email}`} data-cursor>
                    {CONTACT.email}
                  </a>
                </li>
                {CONTACT.whatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor
                    >
                      WhatsApp
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-2)] sm:flex-row">
          <p>© 2026 Nexus Forge. All rights reserved.</p>
          <p>Built with AI — shipped in days, not months.</p>
        </div>
      </div>
    </footer>
  );
}
