// FAQ data for MoveWell Physiocare home-visit physiotherapy service in Bengaluru.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "home-physiotherapy",
    question: "Do you provide home physiotherapy?",
    answer: "Yes. MoveWell Physiocare provides home-visit physiotherapy sessions. Contact Chinmay to check availability for your location.",
  },
  {
    id: "service-area",
    question: "Which areas do you cover?",
    answer: "Home visits are generally available within approximately a 5–10 km service area around Hegganahalli Cross in Bengaluru. Coverage depends on the location, so please contact Chinmay to confirm.",
  },
  {
    id: "request-visit",
    question: "How do I request a home visit?",
    answer: "Contact Chinmay directly at +91 91132 85572 to discuss your requirements and check availability.",
  },
  {
    id: "session-cost",
    question: "How much does a session cost?",
    answer: "Consultation starts at ₹500. Final pricing may vary depending on the individual's case and requirements.",
  },
  {
    id: "working-hours",
    question: "Are home visits available every day?",
    answer: "Home visits are available daily, subject to appointment availability.",
  },
  {
    id: "equipment-needed",
    question: "Do I need special equipment at home?",
    answer: "Equipment requirements can vary depending on the session. Chinmay will advise you if anything specific is needed.",
  },
];

