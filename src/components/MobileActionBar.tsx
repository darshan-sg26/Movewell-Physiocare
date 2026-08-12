"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { track } from "@/lib/track";

export function MobileActionBar() {
  const handlePhone = () => {
    track("phone_click", { location: "mobile_action_bar" });
  };

  const handleWhatsapp = () => {
    track("whatsapp_click", { location: "mobile_action_bar" });
  };

  const handleEnquire = () => {
    track("home_visit_request", { location: "mobile_action_bar" });
  };

  return (
    <div
      aria-label="Quick Action Bar"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#16241F] border-t border-[#2F5245] shadow-2xl px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={SITE_CONFIG.telUrl}
          onClick={handlePhone}
          aria-label={`Call Chinmay at ${SITE_CONFIG.phoneDisplay}`}
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-2 rounded-xl bg-[#1E332C] text-[#FFFFFF] hover:bg-[#2F5245] transition-colors text-center"
        >
          <div className="w-7 h-7 rounded-full bg-[#FFFFFF] text-[#16241F] flex items-center justify-center mb-1">
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold tracking-wide">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsapp}
          aria-label="Message Chinmay on WhatsApp"
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors text-center"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center mb-1">
            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
        </a>

        {/* Enquire Action */}
        <Link
          href="/contact#enquiry-form"
          onClick={handleEnquire}
          aria-label="Submit a home physiotherapy enquiry"
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-2 rounded-xl bg-[#FFFFFF] text-[#16241F] hover:bg-[#EFE9DA] transition-colors text-center"
        >
          <div className="w-7 h-7 rounded-full bg-[#16241F] text-white flex items-center justify-center mb-1">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold tracking-wide">Enquire</span>
        </Link>
      </div>
    </div>
  );
}
