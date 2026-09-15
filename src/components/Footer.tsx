import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Award, CheckCircle2, Activity } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16241F] text-[#F6F2E9] border-t border-[#2F5245] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Lead Practitioner Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EFE9DA] text-[#16241F] flex items-center justify-center font-bold text-lg">
                <Activity className="w-5 h-5 text-[#16241F]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">{SITE_CONFIG.brandName}</h2>
                <p className="text-xs text-[#EFE9DA]/80">Home Visit Physiotherapy Care</p>
              </div>
            </div>
            <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
              Mobile home-visit physiotherapy service bringing personalized physical assessment and rehabilitation care directly to your residence in Bengaluru.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#EFE9DA]/90 bg-[#1E332C] px-3 py-2 rounded-xl border border-[#2F5245]">
              <Award className="w-4 h-4 text-[#C9A227] shrink-0" aria-hidden="true" />
              <span>Practitioner: {SITE_CONFIG.practitionerName} ({SITE_CONFIG.yearsOfExperience})</span>
            </div>
          </div>

          {/* Quick Navigation Sitemap */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors text-[#EFE9DA]/90">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors text-[#EFE9DA]/90">
                  About MoveWell Physiocare
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors text-[#EFE9DA]/90">
                  Physiotherapy Services
                </Link>
              </li>
              <li>
                <Link href="/#home-physiotherapy" className="hover:text-white transition-colors text-[#EFE9DA]/90">
                  Home Visits
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors text-[#EFE9DA]/90">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors text-[#EFE9DA]/90">
                  Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Service Radius */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide">Direct Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.telUrl}
                  className="flex items-center gap-3 text-[#EFE9DA]/90 hover:text-white transition-colors"
                  aria-label={`Call ${SITE_CONFIG.brandName} at ${SITE_CONFIG.phoneDisplay}`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1E332C] text-white flex items-center justify-center shrink-0 border border-[#2F5245]">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#EFE9DA]/90 hover:text-white transition-colors"
                  aria-label={`WhatsApp ${SITE_CONFIG.brandName}`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                  </div>
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#EFE9DA]/90 pt-1">
                <div className="w-8 h-8 rounded-full bg-[#1E332C] text-white flex items-center justify-center shrink-0 border border-[#2F5245] mt-0.5">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider">Service Area</p>
                  <p className="text-xs text-[#EFE9DA]/90 mt-0.5">{SITE_CONFIG.serviceArea}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Commitment & Disclosure Box */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white mb-4 tracking-wide">Service Model</h3>
            <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#25D366]">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>100% Home Visit Service</span>
              </div>
              <p className="text-xs text-[#EFE9DA]/90 leading-relaxed">
                No physical clinic — home visits only. MoveWell Physiocare provides physiotherapy sessions exclusively at patients&apos; homes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2F5245] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE9DA]/70">
          <p>© {currentYear} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Home Visit Physiotherapy • Practitioner: {SITE_CONFIG.practitionerName}
          </p>
        </div>
      </div>
    </footer>
  );
}
