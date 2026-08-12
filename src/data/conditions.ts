// PLACEHOLDER DATA — candidate list of conditions.
// Confirm actual conditions addressed with Chinmay before publishing.

export interface ConditionItem {
  id: string;
  name: string;
  category: string;
  description: string;
  isPlaceholder: boolean;
}

export const CONDITIONS_DATA: ConditionItem[] = [
  {
    id: "lower-back-pain",
    name: "Lower Back Pain & Sciatica",
    category: "Spine Care",
    description: "Lumbar pain, muscle spasms, disc discomfort, and radiating leg tightness.",
    isPlaceholder: true,
  },
  {
    id: "neck-stiffness",
    name: "Neck Stiffness & Cervical Strain",
    category: "Spine Care",
    description: "Postural fatigue, upper back tension, and movement restriction from desk work.",
    isPlaceholder: true,
  },
  {
    id: "knee-pain-arthrosis",
    name: "Knee Pain & Osteoarthritis",
    category: "Joint & Bone Care",
    description: "Joint stiffness, walking discomfort, and age-related wear in the knee joint.",
    isPlaceholder: true,
  },
  {
    id: "shoulder-impingement",
    name: "Frozen Shoulder & Impingement",
    category: "Joint & Bone Care",
    description: "Limited overhead range of motion, rotator cuff weakness, and shoulder pain.",
    isPlaceholder: true,
  },
  {
    id: "post-op-recovery",
    name: "Post-Operative Joint Care",
    category: "Post-Surgical",
    description: "Rehabilitation following ACL reconstruction, joint replacements, or fractures.",
    isPlaceholder: true,
  },
  {
    id: "sports-sprains",
    name: "Ligament Sprains & Muscle Strains",
    category: "Sports & Muscle",
    description: "Acute muscle tears, ankle sprains, tendonitis, and sports injuries.",
    isPlaceholder: true,
  },
  {
    id: "balance-gait",
    name: "Balance Discomfort & Gait Unsteadiness",
    category: "Mobility & Senior Care",
    description: "Difficulty walking stably, fear of falling, and general mobility decline.",
    isPlaceholder: true,
  },
  {
    id: "posture-deconditioning",
    name: "Postural Strain & Deconditioning",
    category: "General Wellness",
    description: "General muscle weakness or stiffness following periods of restricted activity.",
    isPlaceholder: true,
  },
];
