import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/ice-cream", "/booking", "/reviews", "/work-events", "/hiring", "/contact"];

  return routes.map((route) => ({
    url: `https://www.icecreambike.se${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
