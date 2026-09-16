import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  IndianRupee,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact MoveWell Physiocare | Home Physiotherapy Bengaluru",
  description:
    "Contact MoveWell Physiocare for home-visit physiotherapy around Hegganahalli Cross, Bengaluru. Consultation starts at ₹500.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MoveWell Physiocare | Home Physiotherapy Bengaluru",
    description:
      "Contact MoveWell Physiocare for home-visit physiotherapy around Hegganahalli Cross, Bengaluru. Consultation starts at ₹500.",
    url: "/contact",
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ================================================================ */}
      {/* 1. HERO SECTION                                                  */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Direct Enquiries & Scheduling</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Contact MoveWell Physiocare
          </h1>

          <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed">
            Reach out to Chinmay directly via phone or WhatsApp to enquire about home-visit availability, discuss your physical requirements, or arrange a session around Hegganahalli Cross, Bengaluru.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={SITE_CONFIG.telUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#16241F] font-bold text-sm sm:text-base hover:bg-[#EFE9DA] transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. CONTACT DETAILS & FORM GRID                                   */}
      {/* ================================================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Details & Disclosures */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-[#12140F]">Practitioner Contact</h2>

            <div className="space-y-4">
              <a
                href={SITE_CONFIG.telUrl}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F6F2E9] hover:bg-[#EFE9DA] border border-[#E3DCC9] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#16241F] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#4A5049] font-medium">Direct Phone Call</p>
                  <p className="text-base font-bold text-[#12140F]">{SITE_CONFIG.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#2F5245] font-medium">WhatsApp Chat</p>
                  <p className="text-base font-bold text-[#12140F]">Chat with Chinmay</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Practice Model Disclosure */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5245]">
              <MapPin className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>Location & Model Disclosure</span>
            </div>

            <h3 className="text-lg font-bold text-[#12140F]">
              No Physical Clinic — Home Visits Only
            </h3>

            <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
              MoveWell Physiocare operates exclusively on a mobile basis. All sessions are conducted directly in patients&apos; homes. We do not have a physical clinic location, waiting room, or outpatient facility.
            </p>

            <div className="p-3 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-xs text-[#4A5049] space-y-1">
              <p><strong>Primary Hub:</strong> Hegganahalli Cross, Bengaluru</p>
              <p><strong>Service Range:</strong> Approximately 5–10 km depending on location and appointment availability.</p>
              <p className="text-[11px] text-[#4A5049] pt-1">
                Note: Some nearby areas (such as Peenya, Sunkadakatte, Adrahalli, and Laggere) may not be covered. Contact Chinmay to confirm.
              </p>
            </div>

            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline pt-1"
            >
              <span>Explore service area details</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Hours & Consultation Cost */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5245]">
              <Clock className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>Hours & Pricing</span>
            </div>

            <div className="space-y-2 text-xs text-[#4A5049]">
              <p>
                <strong>Availability:</strong> Home visits available daily, subject to appointment availability.
              </p>
              <p>
                <strong>Consultation:</strong> Starts at ₹500. Final session pricing may vary depending on the individual&apos;s case and requirements.
              </p>
              <p>
                <strong>Booking Notice:</strong> Please contact Chinmay to check availability and arrange a suitable time.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Form */}
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
