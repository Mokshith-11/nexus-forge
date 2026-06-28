import { NextResponse } from "next/server";

/**
 * Same-origin contact endpoint. Receives the form POST from the site and
 * relays it to the studio inbox via Resend. Because it's same-origin and the
 * email send happens server-side, no ad-blocker or CORS can interfere.
 *
 * Set RESEND_API_KEY in the environment. Emails are sent from Resend's shared
 * onboarding sender to the studio inbox (no domain verification needed to
 * deliver to your own address).
 */
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO = "vinnyvvinny8@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: {
    name?: string;
    email?: string;
    budget?: string;
    message?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const budget = (body.budget ?? "").trim() || "Not specified";
  const message = (body.message ?? "").trim();

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Email not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Nexus Forge <onboarding@resend.dev>",
      to: [TO],
      reply_to: email,
      subject: `New enquiry from ${name} — nexusforge.in`,
      text: `New enquiry from nexusforge.in\n\nName: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nMessage:\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
