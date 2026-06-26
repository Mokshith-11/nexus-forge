import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Services from "@/components/scenes/Services";
import Why from "@/components/scenes/Why";
import Faq from "@/components/scenes/Faq";
import Testimonials from "@/components/scenes/Testimonials";
import Counter from "@/components/ui/Counter";
import Navbar from "@/components/layout/Navbar";
import {
  SERVICES_PRIMARY,
  SERVICES_SECONDARY,
  WHY,
  FAQ,
  TESTIMONIALS,
  NAV,
} from "@/lib/content";

describe("services", () => {
  it("renders every primary and secondary service", () => {
    render(<Services />);
    for (const s of SERVICES_PRIMARY) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
    }
    for (const s of SERVICES_SECONDARY) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
    }
  });
});

describe("why section", () => {
  it("renders all differentiators", () => {
    render(<Why />);
    for (const item of WHY) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });
});

describe("testimonials", () => {
  it("renders quote, role and company", () => {
    render(<Testimonials />);
    expect(
      screen.getByText(new RegExp(TESTIMONIALS[0].quote.slice(0, 20))),
    ).toBeInTheDocument();
    expect(screen.getByText(TESTIMONIALS[0].role)).toBeInTheDocument();
    expect(screen.getByText(TESTIMONIALS[0].company)).toBeInTheDocument();
  });
});

describe("counter", () => {
  it("formats integer suffix", () => {
    render(<Counter value={100} suffix="+" />);
    expect(screen.getByLabelText("100+")).toBeInTheDocument();
  });

  it("formats decimal value with suffix", () => {
    render(<Counter value={4.2} decimals={1} suffix="x" />);
    expect(screen.getByLabelText("4.2x")).toBeInTheDocument();
  });
});

describe("navbar", () => {
  it("renders a primary navigation with all links", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeTruthy();
    for (const item of NAV) {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0);
    }
  });
});

describe("faq accordion", () => {
  it("toggles aria-expanded when a question is clicked", () => {
    render(<Faq />);
    const triggers = screen.getAllByRole("button", { expanded: false });
    const target = triggers.find((b) => b.textContent?.includes(FAQ[1].q));
    expect(target).toBeTruthy();
    fireEvent.click(target!);
    expect(target!.getAttribute("aria-expanded")).toBe("true");
  });
});
