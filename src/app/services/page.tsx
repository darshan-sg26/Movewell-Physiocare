import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Info, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Physiotherapy Services — Chinmay",
  description: `Explore home-visit physiotherapy service categories offered by Chinmay in Bengaluru within a ${SITE_CONFIG.serviceRadiusKm} km service radius.`,
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
          Home Care Offerings
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12140F] tracking-tight">
          Physiotherapy Services
        </h1>
        <p className="text-base sm:text-lg text-[#4A5049] leading-relaxed">
          Comprehensive mobile physiotherapy services delivered directly at your residence in Bengaluru.
        </p>
      </div>

      {/* Placeholder Microcopy Disclosure Banner */}
      <div className="bg-[#EFE9DA] p-5 rounded-2xl border border-[#E3DCC9] flex items-start gap-3.5 max-w-4xl mx-auto">
        <Info className="w-5 h-5 text-[#2F5245] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
          <strong className="text-[#12140F]">Notice regarding service listing:</strong> The service categories displayed below represent candidate physiotherapy offerings drawn from standard mobile care practice. Specific service availability and custom treatment plans will be confirmed directly with Chinmay during your initial enquiry.
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#16241F] text-white rounded-3xl p-8 lg:p-12 border border-[#2F5245] shadow-xl text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Have Questions About a Specific Therapy?
        </h2>
        <p className="text-sm sm:text-base text-[#EFE9DA]/90 max-w-2xl mx-auto leading-relaxed">
          Contact Chinmay directly to discuss your specific physical recovery needs and check home visit scheduling within the 5 km Bengaluru service radius.
        </p>
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
            href="/contact#enquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E332C] text-white font-semibold text-sm border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <span>Enquire Online</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
