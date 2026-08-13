// FAQ data for Movewell Physiocare home-visit physiotherapy service in Bengaluru.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "home-visit-model",
    question: "Does Movewell Physiocare have a physical clinic?",
    answer: "No. Movewell Physiocare operates exclusively as a mobile home-visit physiotherapy service. All physical assessments and rehabilitation sessions are conducted directly in the comfort of the patient's home.",
  },
  {
    id: "practitioner",
    question: "Who conducts the home physiotherapy sessions?",
    answer: "Sessions are conducted by Chinmay (BPT), lead physiotherapist at Movewell Physiocare, providing dedicated 1-on-1 care.",
  },
  {
    id: "service-area",
    question: "What areas in Bengaluru are covered?",
    answer: "Movewell Physiocare provides home visits within a 5 km service radius in Bengaluru. Specific locality coverage and appointment slots can be confirmed when you contact via phone, WhatsApp, or the enquiry form.",
  },
  {
    id: "booking-process",
    question: "How do I request a home visit?",
    answer: "You can request a visit by calling +91 91132 85572, sending a WhatsApp message, or submitting the online enquiry form. Our team will contact you directly to confirm timing and session details.",
  },
  {
    id: "equipment-needed",
    question: "Do I need specialized equipment at home?",
    answer: "No. All essential treatment tools and exercise guidance are provided by our physiotherapist or adapted safely using your existing home setup.",
  },
  {
    id: "pricing-availability",
    question: "What is the fee structure and scheduling availability?",
    answer: "Pricing and session timing are confirmed during your enquiry, as treatment requirements depend on patient location and clinical scope.",
  },
];
