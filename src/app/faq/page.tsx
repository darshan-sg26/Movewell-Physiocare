import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { FAQ_DATA } from "@/data/faq";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs — Home Physiotherapy with Chinmay",
  description: `Frequently asked questions about home-visit physiotherapy sessions, service radius, and contact options with Chinmay in Bengaluru.`,
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
          Got Questions?
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12140F] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#4A5049] leading-relaxed max-w-2xl mx-auto">
          Find transparent answers about home-visit physiotherapy procedures, service area coverage in Bengaluru, and booking steps.
        </p>
      </div>

      {/* Accordion List */}
      <div className="pt-2">
        <FAQAccordion items={FAQ_DATA} />
      </div>

      {/* Have more questions box */}
      <div className="bg-[#16241F] text-white rounded-3xl p-8 sm:p-10 border border-[#2F5245] shadow-xl text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#1E332C] text-[#25D366] flex items-center justify-center mx-auto border border-[#2F5245]">
          <HelpCircle className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Have a Question Not Answered Here?</h2>
          <p className="text-sm text-[#EFE9DA]/90 max-w-lg mx-auto">
            Chinmay is happy to answer specific queries regarding home visit scheduling, therapy suitability, and location coverage.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={SITE_CONFIG.telUrl}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#16241F] font-bold text-sm hover:bg-[#EFE9DA] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <Link
            href="/contact#enquiry-form"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-white font-semibold text-sm border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <span>Enquire Online</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
