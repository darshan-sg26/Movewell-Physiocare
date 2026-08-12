// FAQ data containing factually verified information for Chinmay's home-visit physiotherapy service.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "home-visit-model",
    question: "Does Chinmay offer clinic visits or only home visits?",
    answer: "Chinmay provides home-visit physiotherapy services exclusively. There is no physical clinic location. All assessment and treatment sessions are conducted directly in the comfort of the patient's home.",
  },
  {
    id: "service-area",
    question: "What areas are covered by the home visit service?",
    answer: "Chinmay travels to patients' homes within a 5 km service radius in Bengaluru. Specific locality coverage and appointment availability can be confirmed when you contact via phone, WhatsApp, or the enquiry form.",
  },
  {
    id: "qualifications",
    question: "What are Chinmay's professional qualifications?",
    answer: "Chinmay holds a Bachelor of Physiotherapy (BPT) degree and specializes in providing personalized, mobile physiotherapy treatments.",
  },
  {
    id: "booking-process",
    question: "How do I request a home physiotherapy session?",
    answer: "You can request a visit by calling +91 91132 85572, sending a WhatsApp message, or completing the online enquiry form on this website. Chinmay will get back to you directly to confirm details.",
  },
  {
    id: "equipment-needed",
    question: "Do I need to have specialized equipment at home?",
    answer: "No. Essential treatment tools and guidance for home-based exercises are brought to your home or structured around space and items available in your residence.",
  },
  {
    id: "pricing-availability",
    question: "What is the fee structure and availability schedule?",
    answer: "Pricing and specific appointment slots are provided upon enquiry, as session timing and requirements depend on patient location and treatment scope.",
  },
];
