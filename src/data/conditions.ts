// Verified conditions treated by MoveWell Physiocare in home-visit sessions.

export interface ConditionItem {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const CONDITIONS_DATA: ConditionItem[] = [
  {
    id: "lower-back-pain",
    name: "Lower Back Pain & Sciatica",
    category: "Spine Care",
    description: "Lower back discomfort, nerve tightness, or muscular strain.",
  },
  {
    id: "neck-stiffness",
    name: "Neck Stiffness & Cervical Strain",
    category: "Spine Care",
    description: "Cervical stiffness, upper back tension, or restricted neck mobility.",
  },
  {
    id: "knee-pain",
    name: "Knee Pain & Osteoarthritis",
    category: "Joint Care",
    description: "Knee joint stiffness, age-related wear, or walking discomfort.",
  },
  {
    id: "frozen-shoulder",
    name: "Frozen Shoulder & Impingement",
    category: "Joint Care",
    description: "Restricted overhead arm range, shoulder stiffness, or rotator cuff discomfort.",
  },
  {
    id: "post-op-care",
    name: "Post-Operative Joint Care",
    category: "Post-Surgical Care",
    description: "Rehabilitation support following joint surgery or surgical interventions.",
  },
  {
    id: "sprains-strains",
    name: "Ligament Sprains & Muscle Strains",
    category: "Muscle & Ligament Care",
    description: "Soft tissue strains, acute muscle tightness, or ligament sprain recovery.",
  },
  {
    id: "balance-gait",
    name: "Balance & Gait Issues",
    category: "Mobility Care",
    description: "Balance challenges, walking unsteadiness, or functional mobility support.",
  },
  {
    id: "postural-strain",
    name: "Postural Strain & Deconditioning",
    category: "General Mobility",
    description: "Muscle weakness or postural fatigue following extended periods of reduced movement.",
  },
  {
    id: "joint-stiffness",
    name: "Joint Stiffness",
    category: "Joint Care",
    description: "General joint tightness and restricted range of movement in daily activities.",
  },
];

