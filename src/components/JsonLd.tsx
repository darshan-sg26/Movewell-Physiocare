import React from "react";
import { SITE_CONFIG } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PhysicalTherapy",
    "name": SITE_CONFIG.brandName,
    "description": "Mobile home-visit physiotherapy services in Bengaluru.",
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
          "description": "Bengaluru Service Radius Center",
        },
        "geoRadius": `${SITE_CONFIG.serviceRadiusKm} km`,
      },
    ],
    "medicalSpecialty": "Physiotherapy",
    "provider": {
      "@type": "Person",
      "name": SITE_CONFIG.practitionerName,
      "jobTitle": SITE_CONFIG.role,
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Degree",
        "name": SITE_CONFIG.qualification,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
