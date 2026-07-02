"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Global GA4 event tracking for the CTAs that matter. Listens at the document
 * level so individual components stay untouched. Fires:
 *  - `cta_click`   → any link/button pointing at #contact, mailto:, or wa.me,
 *                    or carrying a data-track attribute
 *  - `form_submit` → the contact form
 * No-ops silently when GA isn't loaded (e.g. NEXT_PUBLIC_GA_ID unset).
 */
export default function TrackClicks() {
  useEffect(() => {
    const send = (name: string, params: Record<string, string>) => {
      try {
        sendGAEvent("event", name, params);
      } catch {
        /* GA not loaded — ignore */
      }
    };

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button",
      ) as HTMLElement | null;
      if (!el) return;

      const href = el.getAttribute("href") ?? "";
      const tracked = el.getAttribute("data-track");
      const label =
        tracked ||
        (href.includes("wa.me") && "whatsapp") ||
        (href.startsWith("mailto:") && "email") ||
        (href === "#contact" && "book_call") ||
        null;
      if (!label) return;

      send("cta_click", {
        cta: label,
        text: (el.textContent ?? "").trim().slice(0, 60),
      });
    };

    const onSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement | null;
      if (form?.closest?.("#contact")) {
        send("form_submit", { form: "contact" });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  return null;
}
