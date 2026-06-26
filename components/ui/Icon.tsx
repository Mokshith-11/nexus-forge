import type { SVGProps } from "react";

const PATHS: Record<string, React.ReactNode> = {
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />,
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  design: (
    <>
      <path d="M3 21l3-1 11-11a2.1 2.1 0 0 0-3-3L3 17z" />
      <path d="M14 6l3 3" />
    </>
  ),
  branding: (
    <>
      <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
    </>
  ),
  agents: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 5v3M9 13h.01M15 13h.01M9 16h6" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L4.5 9.7l5.9-.9z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export default function Icon({
  name,
  size = 24,
  ...props
}: { name: string; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name] ?? null}
    </svg>
  );
}
