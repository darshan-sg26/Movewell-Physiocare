import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Home, Calendar, ClipboardCheck, Activity, Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Home Physiotherapy — How It Works",
  description: `Detailed explanation of the home-visit physiotherapy model provided by Chinmay in Bengaluru within a ${SITE_CONFIG.serviceRadiusKm} km service radius.`,
  alternates: {
    canonical: "/home-physiotherapy",
  },
};

export default function HomePhysiotherapyPage() {
  const steps = [
    {
      num: "01",
      title: "Initial Contact & Enquiry",
      description: "Reach out via Phone, WhatsApp, or the online enquiry form. Share your location in Bengaluru and basic query details.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "In-Home Assessment",
      description: "Chinmay arrives at your residence to perform a detailed physical movement evaluation, post-op review, or pain assessment.",
      icon: ClipboardCheck,
    },
    {
      num: "03",
      title: "Environment-Tailored Treatment",
      description: "Receive 1-on-1 manual therapy, guided therapeutic exercises, and mobility training using your own home setup for practical recovery.",
      icon: Activity,
    },
    {
      num: "04",
      title: "Progress Tracking & Guidance",
      description: "Ongoing session adjustments and clear home exercise instructions to build long-term strength, joint mobility, and independence.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12 sm:space-y-16">
      {/* Page Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
          Mobile Healthcare Model
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12140F] tracking-tight">
          How Home Visit Physiotherapy Works
        </h1>
        <p className="text-base sm:text-lg text-[#4A5049] leading-relaxed">
          Understanding the step-by-step process of receiving professional, personalized physiotherapy right at your doorstep in Bengaluru.
        </p>
      </div>

      {/* Hero Dark Feature Panel */}
      <div className="bg-[#16241F] text-white rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs border border-[#2F5245]">
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Dedicated Mobile Practice</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Designed Around Your Life, Not a Clinic Schedule
          </h2>

          <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
            Many patients recovering from surgery, joint stiffness, severe back discomfort, or age-related mobility decline find traveling to a physical clinic exhausting or painful. The home-visit model brings full professional attention to your residence.
          </p>

          <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#EFE9DA]/90">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>No clinic travel or waiting room delays</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>Assessment adapted to your stairs, chairs, and home layout</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>Undivided 1-on-1 focus from Chinmay ({SITE_CONFIG.qualification})</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>5 km service radius coverage in Bengaluru</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
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
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <PlaceholderImage
            label="Home Session Setup Photo"
            sublabel="Placeholder for representative home physiotherapy session imagery."
            aspectRatio="portrait"
            variant="dark"
            alt="Placeholder slot for home physiotherapy visit session demonstration"
          />
        </div>
      </div>

      {/* 4-Step Process Section */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-[#12140F]">
            The 4-Step Home Care Journey
          </h2>
          <p className="text-sm text-[#4A5049]">
            Simple, structured, and transparent from first contact to recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#16241F]/30">{step.num}</span>
                    <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#12140F] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#4A5049] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#EFE9DA] rounded-3xl p-8 lg:p-12 border border-[#E3DCC9] shadow-sm text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F]">
          Ready to Book a Home Physiotherapy Visit?
        </h2>
        <p className="text-sm sm:text-base text-[#4A5049] max-w-xl mx-auto">
          Contact Chinmay today to verify availability for your locality in Bengaluru within the 5 km service area.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#enquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#16241F] text-white font-bold text-sm hover:bg-[#1E332C] transition-colors"
          >
            <span>Submit Enquiry Form</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
