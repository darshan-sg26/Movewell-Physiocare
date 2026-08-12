import React from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Chinmay — Book a Home Physiotherapy Visit",
  description: `Contact Chinmay (${SITE_CONFIG.qualification}) to enquire about home-visit physiotherapy in Bengaluru within a ${SITE_CONFIG.serviceRadiusKm} km service radius.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
          Direct Communication
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12140F] tracking-tight">
          Contact Chinmay
        </h1>
        <p className="text-base sm:text-lg text-[#4A5049] leading-relaxed">
          Reach out directly via Call, WhatsApp, or the enquiry form below to discuss your home physiotherapy needs in Bengaluru.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Details & Service Notice */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact Card */}
          <div className="bg-[#16241F] text-white rounded-3xl p-6 sm:p-8 border border-[#2F5245] shadow-xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Direct Phone & WhatsApp</h2>
            <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
              For quick enquiries or urgent scheduling requests, calling or messaging on WhatsApp provides direct access to Chinmay.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={SITE_CONFIG.telUrl}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E332C] hover:bg-[#2F5245] border border-[#2F5245] transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#16241F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#EFE9DA]/80 font-medium">Direct Phone Call</p>
                  <p className="text-lg font-bold text-white">{SITE_CONFIG.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] transition-all text-white group"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-white/90 font-medium">WhatsApp Message</p>
                  <p className="text-lg font-bold text-white">Chat on WhatsApp</p>
                </div>
              </a>
            </div>
          </div>

          {/* Service Area & Disclosure Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DCC9] shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#12140F] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#2F5245]" aria-hidden="true" />
              <span>Service Area & Radius</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
              Chinmay travels to patients&apos; homes within a <strong className="text-[#12140F]">5 km service radius</strong> in Bengaluru.
            </p>

            <div className="p-4 rounded-2xl bg-[#F6F2E9] border border-[#E3DCC9] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16241F]">
                <ShieldCheck className="w-4 h-4 text-[#2E9E6B]" aria-hidden="true" />
                <span>Mobile Service Disclosure</span>
              </div>
              <p className="text-xs text-[#4A5049] leading-relaxed">
                This practice operates 100% on a home-visit basis. There is no physical clinic to visit. All sessions take place in the patient&apos;s home.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Enquiry Form */}
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
