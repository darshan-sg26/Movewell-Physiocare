import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://movewellphysiocare.com";
  const currentDate = new Date().toISOString().split("T")[0];

  const routes = [
    "",
    "/about",
    "/services",
    "/home-physiotherapy",
    "/contact",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
