import React from "react";
import { SITE_CONFIG } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "name": SITE_CONFIG.brandName,
    "description": "Home-visit physiotherapy service around Hegganahalli Cross, Bengaluru.",
    "url": SITE_CONFIG.siteUrl,
    "telephone": SITE_CONFIG.phone,
    "priceRange": "₹500+",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bengaluru",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hegganahalli Cross and surrounding areas (~5–10 km)",
      },
    ],
    "medicalSpecialty": "Physiotherapy",
    "provider": {
      "@type": "Person",
      "name": SITE_CONFIG.practitionerName,
      "jobTitle": SITE_CONFIG.role,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

