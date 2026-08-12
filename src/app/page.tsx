import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2, Home, Heart, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { CONDITIONS_DATA } from "@/data/conditions";
import { FAQ_DATA } from "@/data/faq";
import { ServiceCard } from "@/components/ServiceCard";
import { ConditionCard } from "@/components/ConditionCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export default function HomePage() {
  const featuredServices = SERVICES_DATA.slice(0, 3);
  const featuredConditions = CONDITIONS_DATA.slice(0, 6);
  const featuredFaq = FAQ_DATA.slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24 py-6 sm:py-10">
      {/* ---------------------------------------------------------------- */}
      {/* HERO SECTION — DARK PANEL SURFACE (#16241F)                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
          {/* Subtle background geometric accent overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
                <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Home Visit Physiotherapist • Bengaluru</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Professional Physiotherapy Care Brought Direct to Your Home
              </h1>

              <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed max-w-2xl">
                Skip clinic travel and waiting rooms. {SITE_CONFIG.name} ({SITE_CONFIG.qualification}) delivers dedicated home-visit physiotherapy assessments and therapeutic sessions across Bengaluru within a {SITE_CONFIG.serviceRadiusKm} km service radius.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={SITE_CONFIG.telUrl}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#16241F] font-bold text-sm sm:text-base hover:bg-[#EFE9DA] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className="w-7 h-7 rounded-full bg-[#16241F] text-white flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <Link
                  href="/contact#enquiry-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-[#EFE9DA] hover:text-white font-semibold text-sm border border-[#2F5245] transition-colors"
                >
                  <span>Enquire Online</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Stat & Feature Callout Grid — STRICT FACTUAL ONLY */}
              <div className="pt-8 border-t border-[#2F5245] grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Stat 1: 5 km service radius (CONFIRMED FACT) */}
                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {SITE_CONFIG.serviceRadiusKm} <span className="text-lg text-[#25D366]">km</span>
                  </div>
                  <p className="text-xs text-[#EFE9DA]/80 mt-1 font-medium">Service Radius in Bengaluru</p>
                </div>

                {/* Stat 2 substitute: Feature Badge (Home Visits) */}
                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
                    <Home className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-bold mt-2">100% Home Visit</p>
                  <p className="text-[11px] text-[#EFE9DA]/70">No physical clinic travel</p>
                </div>

                {/* Stat 3 substitute: Qualification Badge */}
                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] flex flex-col justify-between col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#C9A227] flex items-center justify-center">
                    <Award className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-bold mt-2">{SITE_CONFIG.qualification}</p>
                  <p className="text-[11px] text-[#EFE9DA]/70">Qualified Practitioner</p>
                </div>
              </div>
            </div>

            {/* Right Placeholder Image Column */}
            <div className="lg:col-span-5">
              <PlaceholderImage
                label="Chinmay — Home Visit Session"
                sublabel="Representative photo slot — to be updated when official imagery is provided."
                aspectRatio="portrait"
                variant="dark"
                alt="Placeholder image slot for Chinmay performing a home-visit physiotherapy session in Bengaluru"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PROFESSIONAL INTRODUCTION CARD (Section 4 Reference)            */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE9DA] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3DCC9] shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#16241F] text-white flex items-center justify-center shrink-0 shadow-md">
            <Heart className="w-7 h-7 text-[#25D366]" aria-hidden="true" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-lg font-bold text-[#12140F] uppercase tracking-wider text-xs">
              Professional Introduction
            </h2>
            <blockquote className="text-base sm:text-lg text-[#12140F] font-medium leading-relaxed italic">
              &ldquo;Effective physiotherapy starts with understanding your daily environment. By providing care directly in your home, we focus on safe, functional movement restoration that fits naturally into your everyday routine.&rdquo;
            </blockquote>
            <p className="text-xs text-[#4A5049] font-semibold">
              — {SITE_CONFIG.name}, {SITE_CONFIG.qualification}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* WHY HOME VISIT PHYSIOTHERAPY? — LIGHT PANEL SURFACE              */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Patient Convenience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight">
            Why Choose Home Visit Physiotherapy?
          </h2>
          <p className="text-sm sm:text-base text-[#4A5049]">
            Receiving care at home eliminates unnecessary travel strain and allows treatment to be adapted directly to your living space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-7 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#12140F]">Zero Traffic & Travel Stress</h3>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              Avoid navigating Bengaluru traffic or commuting while in pain. Chinmay brings all necessary treatment tools directly to your doorstep.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <Home className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#12140F]">Real Home Environment Care</h3>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              Exercises and ergonomic advice are tailored directly to your furniture, stairs, bed height, and living layout for practical daily safety.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#12140F]">1-on-1 Dedicated Focus</h3>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              Every session is fully dedicated to you without the distractions of a busy clinic or multi-patient queue.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FEATURED SERVICES OVERVIEW (Candidate Grid + Microcopy Badges)    */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
              Example Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight mt-2">
              Physiotherapy Services Overview
            </h2>
            <p className="text-sm text-[#4A5049] mt-1">
              Sample service types commonly provided during home visits.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16241F] text-white font-semibold text-sm hover:bg-[#1E332C] transition-colors self-start md:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* COMMON CONDITIONS SECTION                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE9DA] rounded-[28px] p-6 sm:p-10 border border-[#E3DCC9] shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#16241F] text-white font-semibold text-xs uppercase tracking-wider">
              Reference Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
              Conditions Physiotherapy Commonly Helps With (Examples)
            </h2>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              Chinmay will confirm which specific conditions he currently treats — please ask when you enquire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredConditions.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ PREVIEW SECTION                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              Find essential details regarding home visits, service radius, and contact options.
            </p>
            <div className="pt-2">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#16241F] hover:underline"
              >
                <span>Read all FAQs</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FAQAccordion items={featuredFaq} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* DIRECT ENQUIRY FORM SECTION                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <EnquiryForm />
      </section>
    </div>
  );
}
