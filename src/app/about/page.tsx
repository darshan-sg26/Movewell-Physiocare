import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Award, MapPin, CheckCircle2, Phone, MessageCircle, Home, Shield, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "About Chinmay — Physiotherapist (BPT)",
  description: `Learn about Chinmay (${SITE_CONFIG.qualification}), an independent physiotherapist providing personalized home visits in Bengaluru.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12 sm:space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
          Professional Background
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12140F] tracking-tight">
          About Chinmay
        </h1>
        <p className="text-base sm:text-lg text-[#4A5049] leading-relaxed">
          Independent physiotherapist dedicated to patient-centered care and functional rehabilitation directly in the comfort of your home.
        </p>
      </div>

      {/* Main Profile Grid */}
      <div className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Placeholder Portrait */}
        <div className="lg:col-span-5">
          <PlaceholderImage
            label="Chinmay's Professional Portrait"
            sublabel="Recommended: Clean portrait against plain background (800x1000px)."
            aspectRatio="portrait"
            variant="dark"
            alt="Placeholder image slot for Chinmay's professional portrait photo"
          />
        </div>

        {/* Right Column: Factual Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#C9A227] font-semibold text-xs border border-[#2F5245]">
            <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{SITE_CONFIG.qualification}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Dedicated Mobile Physiotherapy Care
          </h2>

          <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
            Chinmay is a qualified physiotherapist holding a Bachelor of Physiotherapy (BPT) degree. Operating as an independent mobile practitioner, Chinmay delivers tailored therapy directly to patients who require convenient, home-based rehabilitation in Bengaluru.
          </p>

          <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
            Without the constraints of a traditional physical clinic, every session is structured around the patient&apos;s real-world environment, facilitating practical functional recovery and daily activity confidence.
          </p>

          {/* Fact Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>Bachelor of Physiotherapy (BPT)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>100% Home Visit Model</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>5 km Service Radius (Bengaluru)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>Personalized 1-on-1 Sessions</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
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
          </div>
        </div>
      </div>

      {/* Practice Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F]">
            Practice Principles
          </h2>
          <p className="text-sm text-[#4A5049]">
            Core commitments driving every patient interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <Shield className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Environment-Specific Safety</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Assessing home mobility challenges directly—stairways, bed heights, seating ergonomics—to ensure safe movement in your real living space.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Uninterrupted 1-on-1 Focus</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Sessions are dedicated solely to one patient at a time, allowing continuous observation, posture correction, and encouragement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <Home className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">No Physical Clinic Overhead</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Operating exclusively as a mobile practice means total focus on delivering quality care at your residence without physical location hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
