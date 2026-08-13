// Single source of truth for Movewell Physiocare site configuration.

export interface SiteConfig {
  brandName: string;
  practitionerName: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  qualification: string;
  registration: string;
  yearsOfExperience: string;
  city: string;
  serviceArea: string;
  serviceRadiusKm: number;
  pricing: string;
  availability: string;
  whatsappMessage: string;
  whatsappUrl: string;
  telUrl: string;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "Movewell Physiocare",                             // BRAND HERO NAME
  practitionerName: "Chinmay",                                  // PRACTITIONER
  role: "Lead Physiotherapist",                                 // ROLE
  phone: "+919113285572",                                       // CONFIRMED
  phoneDisplay: "+91 91132 85572",                              // CONFIRMED
  whatsappNumber: "919113285572",                               // CONFIRMED
  qualification: "Bachelor of Physiotherapy (BPT)",             // CONFIRMED
  registration: "[REGISTRATION — to be confirmed]",             // PLACEHOLDER
  yearsOfExperience: "[YEARS_OF_EXPERIENCE — to be confirmed]", // PLACEHOLDER
  city: "Bengaluru",                                            // CONFIRMED
  serviceArea: "Bengaluru (5 km service radius)",               // PLACEHOLDER
  serviceRadiusKm: 5,                                           // CONFIRMED
  pricing: "Pricing details available upon enquiry",           // PLACEHOLDER
  availability: "Flexible scheduling for home visits",          // PLACEHOLDER
  whatsappMessage: "Hi Movewell Physiocare, I'd like to enquire about home physiotherapy",
  whatsappUrl: "https://wa.me/919113285572?text=Hi%20Movewell%20Physiocare%2C%20I%27d%20like%20to%20enquire%20about%20home%20physiotherapy",
  telUrl: "tel:+919113285572",
};
