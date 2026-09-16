// Single source of truth for Movewell Physiocare site configuration.

export interface SiteConfig {
  brandName: string;
  practitionerName: string;
  role: string;
  siteUrl: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  yearsOfExperience: string;
  city: string;
  primaryLocation: string;
  serviceArea: string;
  serviceRadius: string;
  pricing: string;
  pricingDetail: string;
  availability: string;
  bookingNotice: string;
  tagline: string;
  whatsappMessage: string;
  whatsappUrl: string;
  telUrl: string;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "MoveWell Physiocare",
  practitionerName: "Chinmay",
  role: "Physiotherapist",
  siteUrl: "https://movewellphysiocare.com",
  phone: "+919113285572",
  phoneDisplay: "+91 91132 85572",
  whatsappNumber: "919113285572",
  yearsOfExperience: "1 year of clinical experience",
  city: "Bengaluru",
  primaryLocation: "Hegganahalli Cross, near Sunkadakatte, Bengaluru",
  serviceArea: "Hegganahalli Cross & surrounding areas (~5–10 km)",
  serviceRadius: "5–10 km",
  pricing: "Consultation starts at ₹500",
  pricingDetail: "Consultation starts at ₹500. Final session pricing may vary depending on the individual's case and requirements.",
  availability: "Home visits available daily, subject to appointment availability.",
  bookingNotice: "Please contact Chinmay to check availability and arrange a suitable time.",
  tagline: "Move well with me.",
  whatsappMessage: "Hi Chinmay, I'd like to enquire about a home physiotherapy session. My name is ______. I am located in ______.",
  whatsappUrl: "https://wa.me/919113285572?text=Hi%20Chinmay%2C%20I%27d%20like%20to%20enquire%20about%20a%20home%20physiotherapy%20session.%20My%20name%20is%20______.%20I%20am%20located%20in%20______.",
  telUrl: "tel:+919113285572",
};

