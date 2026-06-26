import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Services from "@/components/scenes/Services";
import Faq from "@/components/scenes/Faq";
import Testimonials from "@/components/scenes/Testimonials";
import Counter from "@/components/ui/Counter";
import Navbar from "@/components/layout/Navbar";
import { SERVICES, FAQ, TESTIMONIALS, NAV } from "@/lib/content";

describe("content rendering", () => {
  it("renders every service", () => {
    render(<Services />);
    for (const s of SERVICES) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
    }
  });

  it("renders testimonials with company + quote", () => {
    render(<Testimonials />);
    expect(
      screen.getByText(new RegExp(TESTIMONIALS[0].quote.slice(0, 20))),
    ).toBeInTheDocument();
    expect(screen.getByText(TESTIMONIALS[0].company)).toBeInTheDocument();
  });

  it("exposes a labelled counter value", () => {
    render(<Counter value={100} suffix="+" />);
    expect(screen.getByLabelText("100+")).toBeInTheDocument();
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
