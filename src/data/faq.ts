// FAQ data for MoveWell Physiocare home-visit physiotherapy service in Bengaluru.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "home-physiotherapy",
    question: "Do you provide physiotherapy at home?",
    answer: "Yes. MoveWell Physiocare operates exclusively as a home-visit physiotherapy service. All physical assessments and rehabilitation sessions are conducted directly in the comfort of your home.",
  },
  {
    id: "service-area",
    question: "Which areas do you cover?",
    answer: "Home visits are generally available within an approximate 5–10 km service radius around Hegganahalli Cross in Bengaluru. Coverage depends on the exact location and appointment availability.",
  },
  {
    id: "hegganahalli-cross",
    question: "Do you provide home visits near Hegganahalli Cross?",
    answer: "Yes. Hegganahalli Cross is the central reference point for MoveWell Physiocare's home visits. Contact Chinmay to check availability for your specific locality or street.",
  },
  {
    id: "request-visit",
    question: "How do I request a home visit?",
    answer: "Contact Chinmay directly at +91 91132 85572 via phone call, send a message on WhatsApp, or submit a request through our website enquiry form.",
  },
  {
    id: "session-cost",
    question: "How much does a consultation cost?",
    answer: "Consultation starts at ₹500. Final pricing may vary depending on the individual's case, required techniques, and specific session requirements.",
  },
  {
    id: "working-hours",
    question: "Are home visits available every day?",
    answer: "Home visits are available daily, subject to appointment availability. Contact Chinmay in advance to arrange a suitable time.",
  },
  {
    id: "equipment-needed",
    question: "Do I need equipment at home?",
    answer: "No special equipment is required before your first session. Chinmay brings essential portable physiotherapy tools and adapts exercises to your existing home setup.",
  },
  {
    id: "services-provided",
    question: "What services do you provide?",
    answer: "MoveWell Physiocare provides manual therapy, exercise therapy, sports rehabilitation, post-surgery rehabilitation, neck & back pain relief, geriatric physiotherapy, massage therapy, and electrotherapy.",
  },
  {
    id: "check-coverage",
    question: "How do I check whether my location is covered?",
    answer: "You can reach out to Chinmay on WhatsApp or by phone with your location or landmark. Chinmay will confirm whether a home visit can be scheduled for your address.",
  },
  {
    id: "contact-chinmay",
    question: "How can I contact Chinmay?",
    answer: "You can call +91 91132 85572, message via WhatsApp using our prefilled enquiry link, or fill out the enquiry form on our contact page.",
  },
];

