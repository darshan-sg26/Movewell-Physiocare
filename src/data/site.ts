// Single source of truth for Chinmay's website data.
// All values marked CONFIRMED are safe to render.
// All values marked PLACEHOLDER must be updated when confirmed with Chinmay.

export interface SiteConfig {
  name: string;
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
  name: "Chinmay",                                              // CONFIRMED
  role: "Physiotherapist",                                      // CONFIRMED
  phone: "+919113285572",                                       // CONFIRMED
  phoneDisplay: "+91 91132 85572",                              // CONFIRMED
  whatsappNumber: "919113285572",                               // CONFIRMED
  qualification: "Bachelor of Physiotherapy (BPT)",             // CONFIRMED
  registration: "[CHINMAY_REGISTRATION — to be confirmed]",     // PLACEHOLDER
  yearsOfExperience: "[YEARS_OF_EXPERIENCE — to be confirmed]", // PLACEHOLDER
  city: "Bengaluru",                                            // CONFIRMED (broad city)
  serviceArea: "Bengaluru (5 km service radius)",               // PLACEHOLDER — specific localities to be confirmed
  serviceRadiusKm: 5,                                           // CONFIRMED
  pricing: "Pricing details available upon enquiry",           // PLACEHOLDER — to be confirmed
  availability: "Flexible scheduling for home visits",          // PLACEHOLDER — to be confirmed
  whatsappMessage: "Hi Chinmay, I'd like to enquire about home physiotherapy",
  whatsappUrl: "https://wa.me/919113285572?text=Hi%20Chinmay%2C%20I%27d%20like%20to%20enquire%20about%20home%20physiotherapy",
  telUrl: "tel:+919113285572",
};
