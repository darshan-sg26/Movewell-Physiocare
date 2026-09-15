import React from "react";
import { SITE_CONFIG } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PhysicalTherapy",
    "name": SITE_CONFIG.brandName,
    "description": "Home-visit physiotherapy services in Bengaluru provided by Chinmay.",
    "telephone": SITE_CONFIG.phone,
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": SITE_CONFIG.city,
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "description": "Hegganahalli Cross, Bengaluru",
        },
        "geoRadius": SITE_CONFIG.serviceRadius,
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

