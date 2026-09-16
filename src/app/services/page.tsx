import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HeartPulse,
  Trophy,
  ShieldAlert,
  UserCheck,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { CONDITIONS_DATA } from "@/data/conditions";
import { ServiceCard } from "@/components/ServiceCard";
import { ConditionCard } from "@/components/ConditionCard";

export const metadata: Metadata = {
  title: "Home Physiotherapy Services in Bengaluru | MoveWell Physiocare",
  description:
    "Explore MoveWell Physiocare's home physiotherapy services including manual therapy, exercise therapy, sports rehabilitation, post-surgery rehabilitation and more.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Home Physiotherapy Services in Bengaluru | MoveWell Physiocare",
    description:
      "Explore MoveWell Physiocare's home physiotherapy services including manual therapy, exercise therapy, sports rehabilitation, post-surgery rehabilitation and more.",
    url: "/services",
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function ServicesPage() {
  const highValueSections = [
    {
      id: "neck-back-pain",
      title: "Neck & Back Pain Relief",
      icon: ShieldAlert,
      tag: "Spine & Posture",
      description:
        "Comprehensive home evaluation and physiotherapy for cervical discomfort, lumbar tightness, sciatica symptoms, and postural fatigue caused by desk work or prolonged sitting.",
      approaches: [
        "Spinal mobilisation techniques",
        "Targeted postural and core stability exercises",
        "Ergonomic movement suggestions for home desks and chairs",
        "Gentle hands-on soft tissue release",
      ],
    },
    {
      id: "sports-rehab",
      title: "Sports Rehabilitation",
      icon: Trophy,
      tag: "Athletic Recovery",
      description:
        "Structured recovery and movement training for active individuals recovering from joint sprains, tendon discomfort, muscle strains, or sports injuries.",
      approaches: [
        "Agility training adapted to safe home spaces",
        "Plyometric movement progressions where appropriate",
        "Targeted joint stabilization and muscle strength work",
        "Step-by-step guidance for returning to active movement",
      ],
    },
    {
      id: "post-surgery",
      title: "Post-Surgery Rehabilitation",
      icon: HeartPulse,
      tag: "Post-Surgical Care",
      description:
        "Gradual, safe rehabilitation in your home following joint replacement (knee, hip), fracture repair, or arthroscopic surgery, aligning with medical protocols.",
      approaches: [
        "Post-operative joint mobility work within safe ranges",
        "Bed transfer, sitting, and safe walking practice",
        "Progressive muscle reactivation without clinic travel stress",
        "Monitoring functional milestones in your real living space",
      ],
    },
    {
      id: "geriatric",
      title: "Geriatric Physiotherapy",
      icon: UserCheck,
      tag: "Mobility & Senior Care",
      description:
        "Compassionate home physiotherapy for older adults to enhance walking stability, address age-related joint stiffness, reduce fall risk, and support everyday independence.",
      approaches: [
        "Balance training and gait stability practice",
        "Safe stair climbing and chair-to-stand movement",
        "Gentle mobility exercises for arthritic joints",
        "Home environment safety checks for fall prevention",
      ],
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ================================================================ */}
      {/* 1. HERO SECTION                                                  */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
            <HeartPulse className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Home Visit Offerings • Bengaluru</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Physiotherapy Services
          </h1>

          <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed">
            MoveWell Physiocare provides home-visit physiotherapy sessions across 8 core service categories around Hegganahalli Cross, Bengaluru. Sessions are tailored to your physical needs, recovery stage, and everyday environment.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#16241F] font-bold text-sm sm:text-base hover:bg-[#EFE9DA] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Enquire About a Service</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>WhatsApp Chinmay</span>
            </a>

            <Link
              href="/home-physiotherapy"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-[#EFE9DA] hover:text-white font-semibold text-sm border border-[#2F5245] transition-colors"
            >
              <span>How Home Visits Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. TECHNIQUES & MODALITIES BANNER                                */}
      {/* ================================================================ */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5245]">
            <Sparkles className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
            <span>Practitioner Approaches & Techniques</span>
          </div>
          <p className="text-sm text-[#4A5049] leading-relaxed max-w-2xl">
            Depending on the individual&apos;s needs, sessions may incorporate techniques such as <strong>mobilisation</strong>, <strong>agility training</strong>, <strong>plyometric exercises</strong>, and <strong>electrical stimulation</strong>.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#16241F]">
          <span className="px-3 py-1.5 rounded-full bg-[#F6F2E9] border border-[#E3DCC9]">Mobilisation</span>
          <span className="px-3 py-1.5 rounded-full bg-[#F6F2E9] border border-[#E3DCC9]">Agility Training</span>
          <span className="px-3 py-1.5 rounded-full bg-[#F6F2E9] border border-[#E3DCC9]">Plyometrics</span>
          <span className="px-3 py-1.5 rounded-full bg-[#F6F2E9] border border-[#E3DCC9]">Electrical Stimulation</span>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. ALL 8 SERVICES GRID                                           */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Comprehensive Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            All Physiotherapy Services
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Delivered directly to patients at home within our Hegganahalli Cross service area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. EXPANDED HIGH-VALUE SERVICE SECTIONS                          */}
      {/* ================================================================ */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            In-Depth Service Categories
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Detailed overview of our most commonly requested home-visit rehabilitation focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highValueSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F6F2E9] text-[#16241F] border border-[#E3DCC9]">
                      {section.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#12140F]">{section.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
                    {section.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <p className="text-xs font-bold text-[#12140F] uppercase tracking-wider">
                      Common In-Home Approaches:
                    </p>
                    <ul className="space-y-1.5">
                      {section.approaches.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#4A5049]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3DCC9]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline"
                  >
                    <span>Enquire about {section.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. CONDITIONS WE WORK WITH                                       */}
      {/* ================================================================ */}
      <section id="conditions" className="bg-[#EFE9DA] rounded-[28px] p-6 sm:p-10 border border-[#E3DCC9] shadow-sm space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#16241F] text-white font-semibold text-xs uppercase tracking-wider">
            Rehabilitation Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            Conditions We Work With
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Physiotherapy may form part of an individual&apos;s rehabilitation or pain-management approach for the following conditions:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONDITIONS_DATA.map((condition) => (
            <ConditionCard key={condition.id} condition={condition} />
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. INTERNAL LINKS & CONTACT CTA                                  */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-white rounded-3xl p-8 sm:p-12 border border-[#2F5245] shadow-xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Need Guidance on Which Service Fits Your Needs?
          </h2>
          <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
            Contact Chinmay to discuss your specific condition and confirm whether a home-visit session can be arranged for your location.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={SITE_CONFIG.telUrl}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#16241F] font-bold text-sm hover:bg-[#EFE9DA] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
            <span>WhatsApp Enquiry</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E332C] text-white font-semibold text-sm border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <span>Request a Home Visit</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
