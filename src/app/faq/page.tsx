import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  MapPin,
  IndianRupee,
  Calendar,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { FAQ_DATA } from "@/data/faq";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Home Physiotherapy FAQs | MoveWell Physiocare",
  description:
    "Answers to common questions about MoveWell Physiocare home physiotherapy visits, service area, pricing, scheduling and contact.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Home Physiotherapy FAQs | MoveWell Physiocare",
    description:
      "Answers to common questions about MoveWell Physiocare home physiotherapy visits, service area, pricing, scheduling and contact.",
    url: "/faq",
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ================================================================ */}
      {/* 1. HERO SECTION                                                  */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
            <HelpCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Home Physiotherapy FAQs
          </h1>

          <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed">
            Find clear, factual answers to common questions regarding MoveWell Physiocare&apos;s home visits, service area around Hegganahalli Cross, pricing structure, and appointment booking.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.telUrl}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-[#EFE9DA] hover:text-white font-semibold text-sm border border-[#2F5245] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. ALL 10 FAQS ACCORDION                                         */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            10 Common Questions Answered
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            All details below reflect verified information for MoveWell Physiocare.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E3DCC9] shadow-sm">
          <FAQAccordion items={FAQ_DATA} />
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. QUICK LINKS & CTAS                                            */}
      {/* ================================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Areas We Serve</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Check our 5–10 km service radius around Hegganahalli Cross, Bengaluru.
            </p>
          </div>
          <Link
            href="/areas-we-serve"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline pt-2"
          >
            <span>View Service Area</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
              <Calendar className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">How Visits Work</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Read step-by-step how home visits are scheduled and conducted.
            </p>
          </div>
          <Link
            href="/home-physiotherapy"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline pt-2"
          >
            <span>Learn About Home Visits</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
              <Phone className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Still Have Questions?</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Reach Chinmay directly to discuss your specific case or location.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline pt-2"
          >
            <span>Go to Contact Page</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
