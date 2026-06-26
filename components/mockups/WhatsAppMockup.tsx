"use client";

import { motion } from "framer-motion";

/** Mock of a WhatsApp business assistant qualifying and booking a lead. */
export default function WhatsAppMockup() {
  return (
    <div className="glass rounded-[20px] p-5">
      <div className="mb-4 flex items-center gap-3 border-b border-[var(--border)] pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--status)]/20 text-xs font-medium text-[var(--status)]">
          wa
        </span>
        <div>
          <p className="text-sm font-medium text-white">WhatsApp Assistant</p>
          <p className="flex items-center gap-1.5 text-xs text-[var(--status)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--status)]" />
            Online
          </p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-white/[0.06] px-3.5 py-2.5 text-white"
        >
          Hey! Do you have slots available for AI setup next week?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-[85%] rounded-2xl rounded-tl-sm border border-[var(--border)] bg-white/[0.02] px-3.5 py-2.5 text-[var(--text-2)]"
        >
          Yes! I can book you in for a 30-min strategy call. Here are our
          available slots:
          <span className="mt-2 block rounded-lg bg-white/[0.04] px-3 py-2 text-white">
            Monday, June 1st @ 2:00 PM
          </span>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-[var(--text-2)]">Assistant is active…</span>
        <span className="rounded-full bg-[var(--status)]/15 px-2.5 py-1 text-[var(--status)]">
          ✓ Qualified
        </span>
      </div>
    </div>
  );
}
