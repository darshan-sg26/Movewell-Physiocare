import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;
  const currentDate = new Date().toISOString().split("T")[0];

  const routes = [
    "",
    "/about",
    "/services",
    "/home-physiotherapy",
    "/areas-we-serve",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
