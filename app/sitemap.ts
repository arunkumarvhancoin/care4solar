import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://care4solar.com";

  const routes = [
    "",
    "/solar-for-homes",
    "/solar-for-apartments",
    "/commercial-industrial-solar",
    "/operations-maintenance",
    "/projects",
    "/about",
    "/contact",
    "/insights",
    "/faqs",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-19"),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
