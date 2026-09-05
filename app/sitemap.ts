import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * The site is three routes: the homepage, the contact page, and the feast day
 * calendar. Everything else in the navigation is an anchor into the homepage
 * and so is covered by the first entry.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/feast-days`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
