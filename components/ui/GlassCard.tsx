import type { ReactNode } from "react";

/**
 * Glassmorphism card shell: blurred translucent surface, hairline border,
 * large radius and a soft inner highlight. Composable via className.
 */
export default function GlassCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`glass relative overflow-hidden rounded-[24px] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      {children}
    </Tag>
  );
}
