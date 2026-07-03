import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/lib/cities";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexusforge.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/website-design",
    "/ai-automation",
    "/whatsapp-automation",
    ...CITY_SLUGS.map((c) => `/${c}`),
  ];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
