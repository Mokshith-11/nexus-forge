import { FAQ, SERVICES_PRIMARY, SERVICES_SECONDARY } from "@/lib/content";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexusforge.in";

/**
 * Structured data for the homepage: an FAQPage (eligible for FAQ rich results)
 * and an ItemList of services (helps Google understand the offering). Rendered
 * server-side as JSON-LD.
 */
export default function SeoJsonLd() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const services = [
    ...SERVICES_PRIMARY.map((s) => s.label),
    ...SERVICES_SECONDARY.map((s) => s.title),
  ];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nexus Forge Services",
    itemListElement: services.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name,
        provider: { "@type": "Organization", name: "Nexus Forge", url: SITE_URL },
        areaServed: "Worldwide",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </>
  );
}
