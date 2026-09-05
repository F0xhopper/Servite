/**
 * Site-wide constants used for metadata, canonical URLs, the sitemap and
 * robots.txt.
 *
 * The canonical origin is the apex domain, without `www`. `www.ossm.org.uk`
 * should redirect to it at the host, so that a page is never reachable at two
 * addresses — search engines treat those as separate sites otherwise.
 *
 * NEXT_PUBLIC_SITE_URL overrides this, which is what preview deployments use so
 * their canonical tags do not point at production.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ossm.org.uk"
).replace(/\/$/, "");

export const siteName = "Secular Order of the Servants of Mary";

export const siteDescription =
  "Secular Order of the Servants of Mary (OSSM). Heirs to an eight-century Servite charism of prayer, fraternity, and compassionate service.";
