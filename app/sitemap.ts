import type { MetadataRoute } from "next";
import events from "@/data/events.json";
import { years as galleryYears } from "@/lib/gallery";

const base = "https://headstomper.com";
const years = Object.keys(events).sort((a, b) => Number(b) - Number(a));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const gallery = await galleryYears();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/gallery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...gallery.map((year) => ({
      url: `${base}/gallery/${year}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    {
      url: `${base}/legacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...years.map((year) => ({
      url: `${base}/legacy/${year}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
