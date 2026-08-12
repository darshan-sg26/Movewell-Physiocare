// PLACEHOLDER DATA — these are example service categories only.
// Confirm actual services offered with Chinmay before publishing.

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  iconName: string; // Lucide icon identifier
  isPlaceholder: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    shortDescription: "Hands-on techniques focused on joint mobilization, muscle tension relief, and soft tissue manipulation.",
    fullDescription: "Manual therapy involves specialized hands-on clinical techniques to relieve pain, increase range of motion, and reduce soft tissue inflammation. Delivered directly in the comfort of your home.",
    benefits: [
      "Targeted joint and muscle mobilization",
      "Immediate pain and stiffness relief",
      "Tailored manual pressure for your comfort level",
      "No clinic travel required"
    ],
    iconName: "Hand",
    isPlaceholder: true,
  },
  {
    slug: "exercise-therapy",
    title: "Exercise Therapy",
    shortDescription: "Customized therapeutic exercise programs designed to rebuild strength, endurance, and flexibility.",
    fullDescription: "Guided therapeutic exercises tailored to your current physical condition, movement goals, and home environment. Focuses on progressive recovery and functional movement restoration.",
    benefits: [
      "Custom movement protocols using home equipment",
      "Step-by-step progress tracking",
      "Core stabilization and postural correction",
      "Safe exercise progression under professional supervision"
    ],
    iconName: "Activity",
    isPlaceholder: true,
  },
  {
    slug: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    shortDescription: "Focused recovery protocols for athletic injuries, joint sprains, muscle strains, and performance return.",
    fullDescription: "Rehabilitation for active individuals recovering from sports-related injuries, ligament sprains, or muscle strains. Goal-oriented treatment to restore full functional athletic performance safely.",
    benefits: [
      "Acute and chronic sports injury assessment",
      "Sport-specific movement retraining",
      "Injury prevention and biomechanical guidance",
      "Accelerated recovery planning"
    ],
    iconName: "Trophy",
    isPlaceholder: true,
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post-Surgery Rehabilitation",
    shortDescription: "Structured post-operative care for orthopedic, joint replacement, and spinal surgery recovery.",
    fullDescription: "Gentle yet progressive rehabilitation following surgery. Guided exercises and mobility work designed to promote tissue healing, restore joint function, and rebuild mobility at home.",
    benefits: [
      "Post-operative mobility and gait guidance",
      "Safe progression protocols aligning with surgeon guidelines",
      "Swelling and scar tissue management exercises",
      "Convenient home care avoiding travel fatigue"
    ],
    iconName: "HeartPulse",
    isPlaceholder: true,
  },
  {
    slug: "neck-back-pain-treatment",
    title: "Neck & Back Pain Relief",
    shortDescription: "Targeted physiotherapy for spine discomfort, postural strain, sciatica, and chronic back stiffness.",
    fullDescription: "Comprehensive evaluation and treatment for cervical and lumbar discomfort caused by desk work, postural fatigue, or disc issues. Designed to relieve nerve pressure and restore spinal strength.",
    benefits: [
      "Ergonomic and posture assessment",
      "Spinal stabilization and decompression exercises",
      "Pain reduction techniques",
      "Home-friendly posture modification strategies"
    ],
    iconName: "ShieldAlert",
    isPlaceholder: true,
  },
  {
    slug: "geriatric-physiotherapy",
    title: "Geriatric Physiotherapy",
    shortDescription: "Compassionate home care tailored for seniors to enhance balance, prevent falls, and maintain mobility.",
    fullDescription: "Specialized physiotherapy for elderly patients experiencing age-related joint stiffness, balance difficulties, arthritis, or mobility reduction. Focused on safety, independence, and fall prevention.",
    benefits: [
      "Fall prevention and balance training",
      "Joint mobility preservation for arthritis",
      "Safe transfer and walking practice at home",
      "Patience-centered compassionate care"
    ],
    iconName: "UserCheck",
    isPlaceholder: true,
  },
];
