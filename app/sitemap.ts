import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://care4solar.com";

  const routes = [
    "",
    "/residential-solar",
    "/commercial-industrial-solar",
    "/operations-maintenance",
    "/projects",
    "/insights",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-19"),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
