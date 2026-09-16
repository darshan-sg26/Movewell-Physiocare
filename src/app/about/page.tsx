import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Award,
  CheckCircle2,
  Home,
  Heart,
  Activity,
  IndianRupee,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SmartPhoto } from "@/components/SmartPhoto";

export const metadata: Metadata = {
  title: "About Chinmay | MoveWell Physiocare",
  description:
    "Learn about Chinmay and MoveWell Physiocare, a home-visit physiotherapy service around Hegganahalli Cross, Bengaluru.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Chinmay | MoveWell Physiocare",
    description:
      "Learn about Chinmay and MoveWell Physiocare, a home-visit physiotherapy service around Hegganahalli Cross, Bengaluru.",
    url: "/about",
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ================================================================ */}
      {/* 1. HERO SECTION                                                  */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-5">
            <SmartPhoto
              src="/images/chinmay-portrait.jpg"
              label="Home Physiotherapy Practice"
              sublabel="Representative physiotherapy session photo"
              aspectRatio="portrait"
              variant="dark"
              alt="Physiotherapy care at home"
            />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#C9A227] font-semibold text-xs border border-[#2F5245]">
              <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Practitioner: Chinmay ({SITE_CONFIG.yearsOfExperience})</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              About Chinmay
            </h1>

            <blockquote className="text-lg text-[#25D366] font-semibold italic">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              Chinmay provides home-visit physiotherapy sessions for individuals seeking personalised physiotherapy and rehabilitation support at home.
            </p>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              Operating as an independent mobile physiotherapy service under MoveWell Physiocare, care is brought directly to your living space around Hegganahalli Cross, Bengaluru. This eliminates clinic travel stress while enabling functional movement rehabilitation in your actual home environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>1 Year of Clinical Experience</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>100% Home Visit Model</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Hegganahalli Cross (~5–10 km)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Dedicated 1-on-1 Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. PRACTICE PHILOSOPHY & HOME MODEL                              */}
      {/* ================================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center font-bold">
            <Home className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-[#12140F]">Home-Visit Focus</h2>
          <p className="text-xs text-[#4A5049] leading-relaxed">
            MoveWell Physiocare has no physical clinic. Sessions take place where patients live, allowing real-world movement assessment on your stairs, bed, and daily seating.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center font-bold">
            <Activity className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-[#12140F]">Techniques & Modalities</h2>
          <p className="text-xs text-[#4A5049] leading-relaxed">
            Depending on individual needs, sessions incorporate mobilisation, agility training, plyometric exercises, and electrical stimulation where clinically appropriate.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center font-bold">
            <IndianRupee className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-[#12140F]">Clear Starting Price</h2>
          <p className="text-xs text-[#4A5049] leading-relaxed">
            Consultation starts at ₹500. Final session pricing depends on the individual&apos;s case and requirements, with multi-session options available upon enquiry.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. INTERNAL LINKS & CTAS                                         */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-white rounded-3xl p-8 sm:p-12 border border-[#2F5245] shadow-xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Connect With Chinmay
          </h2>
          <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
            Have questions about whether home physiotherapy is right for you? Contact Chinmay directly to discuss your requirements.
          </p>
        </div>

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
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E332C] text-white font-semibold text-sm border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
