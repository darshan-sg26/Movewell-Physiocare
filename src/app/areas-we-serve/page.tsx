import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Home,
  CheckCircle2,
  Clock,
  HelpCircle,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Home Physiotherapy Around Hegganahalli Cross, Bengaluru | MoveWell Physiocare",
  description:
    "Check MoveWell Physiocare's approximate 5–10 km home physiotherapy service area around Hegganahalli Cross, Bengaluru.",
  alternates: {
    canonical: "/areas-we-serve",
  },
  openGraph: {
    title: "Home Physiotherapy Around Hegganahalli Cross, Bengaluru | MoveWell Physiocare",
    description:
      "Check MoveWell Physiocare's approximate 5–10 km home physiotherapy service area around Hegganahalli Cross, Bengaluru.",
    url: "/areas-we-serve",
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function AreasWeServePage() {
  const serviceHighlights = [
    {
      title: "Hegganahalli Cross Central Hub",
      description:
        "Hegganahalli Cross serves as the central reference point from which Chinmay travels to deliver home physiotherapy sessions.",
    },
    {
      title: "Approx. 5–10 km Service Range",
      description:
        "Sessions are generally available within an approximate 5–10 km radius, depending on appointment availability and travel routes.",
    },
    {
      title: "Direct Doorstep Care",
      description:
        "MoveWell Physiocare operates exclusively on a home-visit basis. There is no physical clinic — all treatment takes place in your home.",
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
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Service Area & Location Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Home Physiotherapy Around Hegganahalli Cross, Bengaluru
          </h1>

          <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed">
            MoveWell Physiocare provides home-visit physiotherapy around Hegganahalli Cross, Bengaluru. The service area generally extends approximately 5–10 km depending on the exact location and appointment availability.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Check My Location on WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.telUrl}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-[#EFE9DA] hover:text-white font-semibold text-sm border border-[#2F5245] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#16241F] hover:bg-[#EFE9DA] font-semibold text-sm transition-colors"
            >
              <span>Enquiry Form</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. THE HOME-VISIT MODEL EXPLAINED                                */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Mobile Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            How MoveWell Physiocare Operates
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            MoveWell Physiocare operates 100% as a mobile physiotherapy practice. We do not have a physical clinic location or waiting room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceHighlights.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#12140F]">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. COVERAGE & AREA CONFIRMATION GUIDANCE                         */}
      {/* ================================================================ */}
      <section className="bg-[#EFE9DA] rounded-[28px] p-6 sm:p-10 border border-[#E3DCC9] shadow-sm space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#16241F] text-white font-semibold text-xs uppercase tracking-wider">
            Important Information
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            Confirming Your Address
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Because travel times vary across Bengaluru, service coverage is assessed on an individual basis.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E3DCC9] space-y-4">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4A5049] leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-[#12140F]">Area Coverage Disclaimer:</strong>
              <p className="mt-1">
                Some nearby localities (such as Peenya, Sunkadakatte, Adrahalli, and Laggere) may not be covered depending on route constraints and existing schedule commitments. Please contact Chinmay directly to confirm whether your specific street or apartment can be accommodated.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-xs text-[#12140F] font-medium">
            &ldquo;Not sure whether your location is covered? Contact Chinmay with your location to check availability.&rdquo;
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. HOW TO CHECK YOUR LOCATION                                    */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Quick Check
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            How to Check If Your Area is Covered
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Follow these simple steps before booking your session:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-2">
            <span className="text-2xl font-black text-[#16241F]/30">01</span>
            <h3 className="text-base font-bold text-[#12140F]">Share Your Landmark</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Send your street name, landmark, or apartment complex name in or around Hegganahalli Cross.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-2">
            <span className="text-2xl font-black text-[#16241F]/30">02</span>
            <h3 className="text-base font-bold text-[#12140F]">Schedule Evaluation</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Chinmay reviews his daily route and current slots to see if your location can be served smoothly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-2">
            <span className="text-2xl font-black text-[#16241F]/30">03</span>
            <h3 className="text-base font-bold text-[#12140F]">Confirm Visit Time</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Once confirmed, a suitable time slot is scheduled for your in-home physiotherapy session.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. INTERNAL LINKS & CTAS                                         */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-white rounded-3xl p-8 sm:p-12 border border-[#2F5245] shadow-xl space-y-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Learn More About Our Home Care
          </h2>
          <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
            Explore how our sessions work, view the complete list of physiotherapy services, or reach out to verify your address.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/home-physiotherapy"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#16241F] font-bold text-sm hover:bg-[#EFE9DA] transition-colors"
          >
            <span>How Home Visits Work</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-white font-semibold text-sm border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
          >
            <span>Contact Chinmay</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
