"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "bot" | "user"; text: string };

type Flow = "idle" | "awaiting_slot" | "awaiting_name" | "done";

const SLOTS = ["Mon 2:00 PM", "Tue 11:30 AM", "Wed 5:00 PM"];

const GREETING =
  "Hi! 👋 Welcome to Bright Smile Dental. I'm the clinic's AI assistant — I can help you book an appointment, share prices, or answer questions. What do you need?";

/**
 * A self-contained, scripted AI-assistant demo that feels like a real WhatsApp
 * chat: the visitor types, the "assistant" replies with a typing delay and
 * walks them through booking an appointment. No backend or API key needed —
 * it's a sales demo you can screen-record or share as a link.
 */
export default function DemoChat() {
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [flow, setFlow] = useState<Flow>("idle");
  const slotRef = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [msgs, typing]);

  const push = (m: Msg) => setMsgs((prev) => [...prev, m]);

  const botSay = (text: string, delay = 900) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      push({ from: "bot", text });
    }, delay);
  };

  const respond = (raw: string) => {
    const t = raw.toLowerCase();

    if (flow === "awaiting_name") {
      const name = raw.trim().split(" ")[0] || "there";
      setFlow("done");
      botSay(
        `Perfect, ${name}! ✅ You're booked for ${slotRef.current}. You'll get a WhatsApp reminder the day before. See you then! Anything else?`,
        1100,
      );
      return;
    }

    if (flow === "awaiting_slot") {
      const picked =
        SLOTS.find((s) => t.includes(s.toLowerCase().split(" ")[0])) ||
        (/(1|first|mon)/.test(t) && SLOTS[0]) ||
        (/(2|second|tue)/.test(t) && SLOTS[1]) ||
        (/(3|third|wed)/.test(t) && SLOTS[2]) ||
        "";
      if (picked) {
        slotRef.current = picked;
        setFlow("awaiting_name");
        botSay(
          `Great choice — ${picked} it is. Can I get your name to confirm the booking?`,
          900,
        );
        return;
      }
      botSay(
        `No problem — which works best: ${SLOTS.join(", ")}?`,
        800,
      );
      return;
    }

    // idle intent detection
    if (/price|cost|fee|charge|how much/.test(t)) {
      botSay(
        "A consultation is ₹500, adjusted against any treatment. Exact treatment cost is shared after the check-up. Would you like me to book you a slot?",
        1000,
      );
      return;
    }
    if (/time|timing|hours|open|when/.test(t)) {
      botSay(
        "We're open Mon–Sat, 10 AM–8 PM. Want me to find you a slot this week?",
        900,
      );
      return;
    }
    if (/where|location|address|reach/.test(t)) {
      botSay(
        "We're in the city centre, easy to reach with parking. Shall I book you in and send the exact location?",
        900,
      );
      return;
    }
    if (
      /book|appoint|slot|yes|sure|ok|schedule|available|tomorrow|today|week/.test(
        t,
      )
    ) {
      setFlow("awaiting_slot");
      botSay(
        `Sure! Here are the next available slots: ${SLOTS.join(
          ", ",
        )}. Which one works for you?`,
        1000,
      );
      return;
    }
    if (/hi|hello|hey/.test(t)) {
      botSay("Hi there! 😊 Would you like to book an appointment, or hear about our treatments and prices?", 800);
      return;
    }
    botSay(
      "Happy to help with that! I can book appointments, share prices, or answer questions about our treatments. Would you like to book a slot?",
      950,
    );
  };

  const send = () => {
    const text = input.trim();
    if (!text || typing) return;
    push({ from: "user", text });
    setInput("");
    respond(text);
  };

  const reset = () => {
    setMsgs([{ from: "bot", text: GREETING }]);
    setFlow("idle");
    slotRef.current = "";
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="glass overflow-hidden rounded-[28px]">
        {/* header */}
        <div className="flex items-center gap-3 border-b border-[var(--border)] bg-white/[0.02] px-5 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366]/20 text-sm font-medium text-[#25D366]">
            AI
          </span>
          <div>
            <p className="text-sm font-medium text-white">
              Bright Smile Dental
            </p>
            <p className="flex items-center gap-1.5 text-xs text-[#25D366]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              AI assistant · online
            </p>
          </div>
          <button
            onClick={reset}
            className="ml-auto text-xs text-[var(--text-2)] hover:text-white"
          >
            Reset
          </button>
        </div>

        {/* messages */}
        <div
          ref={scrollRef}
          className="h-[420px] space-y-3 overflow-y-auto px-5 py-5"
        >
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm ${
                m.from === "user"
                  ? "ml-auto rounded-tr-sm bg-[#25D366]/15 text-white"
                  : "rounded-tl-sm border border-[var(--border)] bg-white/[0.03] text-white/90"
              }`}
            >
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="w-16 rounded-2xl rounded-tl-sm border border-[var(--border)] bg-white/[0.03] px-3.5 py-3">
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />
              </span>
            </div>
          )}
        </div>

        {/* input */}
        <div className="flex items-center gap-2 border-t border-[var(--border)] p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message… (try 'book an appointment')"
            className="flex-1 rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[var(--text-2)] outline-none focus:border-[var(--accent)]"
          />
          <button
            onClick={send}
            aria-label="Send"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white"
          >
            ↑
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-[var(--text-2)]">
        This is a live demo of the AI assistant Nexus Forge builds. Try asking
        about prices, timings, or booking.
      </p>
    </div>
  );
}
