"use client";

import type { PrimaryService } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Icon from "@/components/ui/Icon";
import WorkflowMockup from "@/components/mockups/WorkflowMockup";
import WhatsAppMockup from "@/components/mockups/WhatsAppMockup";
import BlogMockup from "@/components/mockups/BlogMockup";
import CodeMockup from "@/components/mockups/CodeMockup";

const MOCKUPS = {
  workflow: WorkflowMockup,
  whatsapp: WhatsAppMockup,
  blog: BlogMockup,
  code: CodeMockup,
};

/** A single alternating service feature: copy beside its live device mockup. */
export default function ServiceFeature({
  service,
  flip,
}: {
  service: PrimaryService;
  flip: boolean;
}) {
  const Mockup = MOCKUPS[service.mockup];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <p className="label">{service.label}</p>
        <h3 className="display mt-4 text-3xl leading-tight text-white sm:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-md text-[var(--text-2)]">{service.desc}</p>
        <ul className="mt-6 space-y-3">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-white/90">
              <span className="mt-0.5 text-white">
                <Icon name="check" size={16} />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <MagneticButton
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm text-white transition-colors hover:bg-white/5"
          >
            {service.cta}
            <Icon
              name="arrow"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticButton>
        </div>
      </Reveal>

      <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
        <Mockup />
      </Reveal>
    </div>
  );
}
