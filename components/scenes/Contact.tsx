"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Icon from "@/components/ui/Icon";
import { CONTACT } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Premium contact form with client-side validation and a simulated success
 *  state. No network request is made. */
export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email)) e.email = "Enter a valid email address.";
    if (values.message.trim().length < 10)
      e.message = "Tell us a little more (10+ characters).";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-[var(--border)] bg-white/[0.03] px-5 py-4 text-white placeholder-transparent outline-none transition-colors focus:border-[var(--accent)]";
  const label =
    "pointer-events-none absolute left-5 top-4 text-sm text-[var(--text-2)] transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="label">Get In Touch</p>
          <h2 className="display mt-3 text-4xl leading-[1.05] text-white sm:text-6xl">
            Your next project
            <span className="italic text-muted-gradient"> starts here.</span>
          </h2>
          <p className="mt-6 max-w-sm text-[var(--text-2)]">
            Book a free strategy call. Tell us what you need — automation,
            content, a website, or all of the above.
          </p>
          <dl className="mt-10 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 text-[var(--text-2)]">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} data-cursor>
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="w-20 text-[var(--text-2)]">Status</dt>
              <dd className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--status)]" />
                {CONTACT.status}
              </dd>
            </div>
          </dl>
        </div>

        <div className="glass rounded-[28px] p-8">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--accent)] text-white">
                  <Icon name="arrow" size={26} />
                </span>
                <h3 className="display mt-5 text-2xl text-white">
                  Message received
                </h3>
                <p className="mt-2 max-w-xs text-sm text-[var(--text-2)]">
                  Thanks, {values.name.split(" ")[0] || "there"}. We&apos;ll be
                  in touch shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="relative">
                  <input
                    id="name"
                    className={`peer ${field}`}
                    placeholder="Name"
                    value={values.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, name: e.target.value }))
                    }
                  />
                  <label htmlFor="name" className={label}>
                    Your name
                  </label>
                  {errors.name && (
                    <p id="err-name" className="mt-1.5 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    className={`peer ${field}`}
                    placeholder="Email"
                    value={values.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, email: e.target.value }))
                    }
                  />
                  <label htmlFor="email" className={label}>
                    Email address
                  </label>
                  {errors.email && (
                    <p id="err-email" className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="budget"
                    className={`peer ${field}`}
                    placeholder="Budget"
                    value={values.budget}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, budget: e.target.value }))
                    }
                  />
                  <label htmlFor="budget" className={label}>
                    Budget (optional)
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className={`peer ${field} resize-none`}
                    placeholder="Message"
                    value={values.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "err-message" : undefined}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, message: e.target.value }))
                    }
                  />
                  <label htmlFor="message" className={label}>
                    Tell us about your project
                  </label>
                  {errors.message && (
                    <p id="err-message" className="mt-1.5 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <MagneticButton
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black"
                >
                  Send message
                  <Icon name="arrow" size={18} />
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
