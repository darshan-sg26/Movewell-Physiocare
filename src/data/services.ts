// Official service list for MoveWell Physiocare home-visit physiotherapy in Bengaluru.

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  iconName: string;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    shortDescription: "Hands-on physiotherapy techniques used as part of an individualised treatment session.",
    fullDescription: "Hands-on physiotherapy techniques used as part of an individualised treatment session. Tailored to the patient's comfort and movement goals.",
    benefits: [
      "Individualised hands-on techniques",
      "Focus on joint and muscle movement",
      "Adjusted to patient comfort level",
      "Delivered directly at your home"
    ],
    iconName: "Hand",
    image: "/images/services/manual-therapy.png",
    imageAlt: "Manual therapy physiotherapy session",
    objectPosition: "top",
  },
  {
    slug: "exercise-therapy",
    title: "Exercise Therapy",
    shortDescription: "Guided therapeutic exercises selected according to the individual's needs and goals.",
    fullDescription: "Guided therapeutic exercises selected according to the individual's needs and goals, focused on progressive mobility and strength in your home environment.",
    benefits: [
      "Tailored home exercise routine",
      "Focus on strength and movement goals",
      "Progressive exercise guidance",
      "Supervised movement practice"
    ],
    iconName: "Activity",
    image: "/images/services/exercise-therapy.png",
    imageAlt: "Exercise therapy physiotherapy session",
    objectPosition: "top",
  },
  {
    slug: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    shortDescription: "Exercise-based rehabilitation and movement training for sports-related recovery.",
    fullDescription: "Exercise-based rehabilitation and movement training for sports-related recovery, designed to support individuals returning to active movement.",
    benefits: [
      "Movement training for sports recovery",
      "Targeted strength and flexibility work",
      "Focus on safe return to active movement",
      "Personalised exercise progressions"
    ],
    iconName: "Trophy",
    image: "/images/services/sports-rehabilitation.png",
    imageAlt: "Sports rehabilitation exercise session",
    objectPosition: "top",
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post-Surgery Rehabilitation",
    shortDescription: "Physiotherapy support following surgery, based on the individual's recovery needs and medical guidance.",
    fullDescription: "Physiotherapy support following surgery, based on the individual's recovery needs and medical guidance to restore safe home mobility.",
    benefits: [
      "Care tailored to post-surgical recovery stage",
      "Guided mobility and gentle movement",
      "Focus on regaining functional independence",
      "Convenient home care avoiding travel"
    ],
    iconName: "HeartPulse",
    image: "/images/services/post-surgery-rehabilitation.png",
    imageAlt: "Post-surgery physiotherapy rehabilitation session",
    objectPosition: "top",
  },
  {
    slug: "neck-back-pain-relief",
    title: "Neck & Back Pain Relief",
    shortDescription: "Physiotherapy focused on movement, exercise, and appropriate hands-on techniques for neck and back-related concerns.",
    fullDescription: "Physiotherapy focused on movement, exercise, and appropriate hands-on techniques for neck and back-related concerns.",
    benefits: [
      "Targeted posture and movement evaluation",
      "Guided spinal mobility exercises",
      "Ergonomic and daily activity guidance",
      "Home-friendly movement strategies"
    ],
    iconName: "ShieldAlert",
    image: "/images/services/neck-back-pain.png",
    imageAlt: "Physiotherapy session for neck and back pain",
    objectPosition: "top",
  },
  {
    slug: "geriatric-physiotherapy",
    title: "Geriatric Physiotherapy",
    shortDescription: "Physiotherapy focused on mobility, strength, balance, and functional movement for older adults.",
    fullDescription: "Physiotherapy focused on mobility, strength, balance, and functional movement for older adults in their home surroundings.",
    benefits: [
      "Balance and gait movement guidance",
      "Joint mobility and muscle strength support",
      "Functional independence at home",
      "Patient-centered compassionate sessions"
    ],
    iconName: "UserCheck",
    image: "/images/services/geriatric-physiotherapy.png",
    imageAlt: "Geriatric physiotherapy session",
    objectPosition: "top",
  },
  {
    slug: "massage-therapy",
    title: "Massage Therapy",
    shortDescription: "Massage techniques incorporated into physiotherapy sessions where appropriate.",
    fullDescription: "Massage techniques incorporated into physiotherapy sessions where clinically appropriate to complement functional exercise and mobility work.",
    benefits: [
      "Soft tissue relaxation techniques",
      "Incorporated into sessions as appropriate",
      "Targeted muscle tension relief",
      "Tailored application for comfort"
    ],
    iconName: "Sparkles",
    image: "/images/services/massage_therapy.png",
    imageAlt: "Physiotherapy massage therapy session",
    objectPosition: "top",
  },
  {
    slug: "electrotherapy",
    title: "Electrotherapy",
    shortDescription: "Electrotherapy techniques such as electrical stimulation may be used when clinically appropriate.",
    fullDescription: "Electrotherapy techniques such as electrical stimulation may be used when clinically appropriate as part of a comprehensive home physiotherapy plan.",
    benefits: [
      "Electrical stimulation when appropriate",
      "Targeted therapeutic modality application",
      "Integrated into broader rehabilitation",
      "Applied based on individual evaluation"
    ],
    iconName: "Zap",
    image: "/images/services/electro-therapy.png",
    imageAlt: "Electrotherapy physiotherapy session",
    objectPosition: "top",
  },
];
