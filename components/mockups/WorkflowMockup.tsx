"use client";

import { motion } from "framer-motion";

const NODES = [
  { name: "Webhook Trigger", status: "200 OK", icon: "⚡" },
  { name: "OpenAI Assistant API", status: "thinking…", icon: "🧠" },
  { name: "Update HubSpot CRM", status: "saved", icon: "✓" },
];

/** Mock of an n8n-style automation pipeline executing live. */
export default function WorkflowMockup() {
  return (
    <div className="glass rounded-[20px] p-5 font-mono text-sm">
      <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-2)]">
        <span>workflow_sync.json</span>
        <span className="flex items-center gap-1.5 text-[var(--status)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--status)]" />
          active
        </span>
      </div>
      <div className="space-y-2.5">
        {NODES.map((node, i) => (
          <motion.div
            key={node.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-white/[0.02] px-3.5 py-3"
          >
            <span className="flex items-center gap-2.5 text-white">
              <span aria-hidden>{node.icon}</span>
              {node.name}
            </span>
            <span className="text-xs text-[var(--text-2)]">{node.status}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-xs text-[var(--text-2)]">
        Avg execution speed: <span className="text-white">1.2s</span>
      </p>
    </div>
  );
}
