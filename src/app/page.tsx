import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2, Home, Heart, Calendar, ClipboardCheck, Activity, Shield, HeartHandshake, Info } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { CONDITIONS_DATA } from "@/data/conditions";
import { FAQ_DATA } from "@/data/faq";
import { ServiceCard } from "@/components/ServiceCard";
import { ConditionCard } from "@/components/ConditionCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SmartPhoto } from "@/components/SmartPhoto";

export default function HomePage() {
  const steps = [
    {
      num: "01",
      title: "Initial Contact & Enquiry",
      description: "Reach out via Phone, WhatsApp, or the online enquiry form with your location in Bengaluru.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "In-Home Assessment",
      description: "Our physiotherapist arrives at your residence to perform a detailed physical movement and pain evaluation.",
      icon: ClipboardCheck,
    },
    {
      num: "03",
      title: "Environment-Tailored Treatment",
      description: "Receive 1-on-1 manual therapy, guided exercises, and mobility training using your home setup.",
      icon: Activity,
    },
    {
      num: "04",
      title: "Progress Tracking & Guidance",
      description: "Ongoing session adjustments and clear home exercise guidance to maintain long-term recovery.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 py-6 sm:py-10">
      {/* ================================================================ */}
      {/* 1. HERO SECTION (#home) — MOVEWELL PHYSIOCARE                    */}
      {/* ================================================================ */}
      <section id="home" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
                <Activity className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Movewell Physiocare • Home Visit Service • Bengaluru</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {SITE_CONFIG.brandName} — Professional Home Visit Physiotherapy
              </h1>

              <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed max-w-2xl">
                Skip clinic travel and waiting rooms. {SITE_CONFIG.brandName} delivers dedicated home-visit physiotherapy assessments and therapeutic sessions led by {SITE_CONFIG.practitionerName} ({SITE_CONFIG.qualification}) across Bengaluru within a {SITE_CONFIG.serviceRadiusKm} km service radius.
              </p>

              {/* Primary Call-to-Action Buttons */}
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

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-[#EFE9DA] hover:text-white font-semibold text-sm border border-[#2F5245] transition-colors"
                >
                  <span>Enquire Online</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              {/* Factual Stat & Feature Callouts */}
              <div className="pt-8 border-t border-[#2F5245] grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {SITE_CONFIG.serviceRadiusKm} <span className="text-lg text-[#25D366]">km</span>
                  </div>
                  <p className="text-xs text-[#EFE9DA]/80 mt-1 font-medium">Service Radius in Bengaluru</p>
                </div>

                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
                    <Home className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-bold mt-2">100% Home Visit</p>
                  <p className="text-[11px] text-[#EFE9DA]/70">No clinic travel needed</p>
                </div>

                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] flex flex-col justify-between col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#C9A227] flex items-center justify-center">
                    <Award className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-bold mt-2">{SITE_CONFIG.practitionerName} ({SITE_CONFIG.qualification})</p>
                  <p className="text-[11px] text-[#EFE9DA]/70">Lead Practitioner</p>
                </div>
              </div>
            </div>

            {/* Right Photo Column: SmartPhoto with hero-session.png */}
            <div className="lg:col-span-5">
              <SmartPhoto
                src="/images/hero-session.png"
                label={`${SITE_CONFIG.brandName} — Home Session`}
                sublabel="Home visit physiotherapy session"
                aspectRatio="portrait"
                variant="dark"
                alt="Movewell Physiocare home-visit physiotherapy session in Bengaluru"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. ABOUT SECTION (#about)                                        */}
      {/* ================================================================ */}
      <section id="about" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Professional Intro Pull Quote */}
        <div className="bg-[#EFE9DA] rounded-3xl p-6 sm:p-8 border border-[#E3DCC9] shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#16241F] text-white flex items-center justify-center shrink-0 shadow-md">
            <Heart className="w-7 h-7 text-[#25D366]" aria-hidden="true" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xs font-bold text-[#12140F] uppercase tracking-wider">
              Clinical Philosophy
            </h2>
            <blockquote className="text-base sm:text-lg text-[#12140F] font-medium leading-relaxed italic">
              &ldquo;At {SITE_CONFIG.brandName}, effective physiotherapy starts with understanding your daily living environment. By providing care directly in your home, we focus on safe, functional movement restoration that fits naturally into your everyday routine.&rdquo;
            </blockquote>
            <p className="text-xs text-[#4A5049] font-semibold">
              — {SITE_CONFIG.practitionerName}, {SITE_CONFIG.qualification} (Lead Practitioner)
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <SmartPhoto
              src="/images/chinmay-portrait.jpg"
              label={`${SITE_CONFIG.practitionerName}'s Professional Portrait`}
              sublabel="Lead Physiotherapist"
              aspectRatio="portrait"
              variant="dark"
              alt={`${SITE_CONFIG.practitionerName}'s professional portrait photo`}
            />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#C9A227] font-semibold text-xs border border-[#2F5245]">
              <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Lead Practitioner: {SITE_CONFIG.practitionerName} ({SITE_CONFIG.qualification})</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About {SITE_CONFIG.brandName}
            </h2>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              {SITE_CONFIG.brandName} is a mobile home-visit physiotherapy practice in Bengaluru led by Chinmay ({SITE_CONFIG.qualification}). Operating as an independent mobile service, {SITE_CONFIG.brandName} delivers tailored physical therapy directly to patients requiring convenient, high-quality home-based rehabilitation.
            </p>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              Without the overhead or congestion of a physical clinic, every therapy session is structured around your real-world environment, facilitating practical functional recovery and daily activity confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Lead: {SITE_CONFIG.practitionerName} ({SITE_CONFIG.qualification})</span>
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
          </div>
        </div>

        {/* Practice Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
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
      </section>

      {/* ================================================================ */}
      {/* 3. SERVICES SECTION (#services)                                  */}
      {/* ================================================================ */}
      <section id="services" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Home Care Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight">
            Physiotherapy Services Overview
          </h2>
          <p className="text-sm sm:text-base text-[#4A5049] leading-relaxed">
            Candidate service categories commonly provided by {SITE_CONFIG.brandName} during home visits in Bengaluru.
          </p>
        </div>

        {/* Microcopy Banner */}
        <div className="bg-[#EFE9DA] p-4 rounded-2xl border border-[#E3DCC9] flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-[#2F5245] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs text-[#4A5049] leading-relaxed">
            <strong className="text-[#12140F]">Service Notice:</strong> The service categories displayed below represent candidate physiotherapy offerings drawn from standard mobile care practice. Specific service availability and custom treatment plans will be confirmed directly during your initial enquiry.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. HOME PHYSIOTHERAPY MODEL SECTION (#home-physiotherapy)        */}
      {/* ================================================================ */}
      <section id="home-physiotherapy" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Mobile Care Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight">
            How Home Visit Physiotherapy Works
          </h2>
          <p className="text-sm sm:text-base text-[#4A5049] leading-relaxed">
            Simple, structured, and transparent from first enquiry to full physical recovery.
          </p>
        </div>

        {/* Dark Feature Panel */}
        <div className="bg-[#16241F] text-white rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs border border-[#2F5245]">
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Dedicated Mobile Practice</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Designed Around Your Life, Not a Clinic Schedule
            </h3>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              Many patients recovering from surgery, joint stiffness, severe back discomfort, or age-related mobility decline find traveling to a physical clinic exhausting or painful. The home-visit model brings full professional attention to your residence.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#EFE9DA]/90">
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
          </div>

          <div className="lg:col-span-5">
            <SmartPhoto
              src="/images/home-setup.png"
              label="Home Session Setup Photo"
              sublabel="Home visit session setup"
              aspectRatio="portrait"
              variant="dark"
              alt="Home physiotherapy visit session demonstration"
            />
          </div>
        </div>

        {/* 4-Step Grid */}
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
                  <h4 className="text-lg font-bold text-[#12140F] mb-2">{step.title}</h4>
                  <p className="text-xs text-[#4A5049] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. COMMON CONDITIONS SECTION (#conditions)                      */}
      {/* ================================================================ */}
      <section id="conditions" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE9DA] rounded-[28px] p-6 sm:p-10 border border-[#E3DCC9] shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#16241F] text-white font-semibold text-xs uppercase tracking-wider">
              Reference Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
              Conditions Physiotherapy Commonly Helps With (Examples)
            </h2>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              {SITE_CONFIG.brandName} will confirm which specific conditions are currently treated — please ask when you enquire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONDITIONS_DATA.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. FAQ SECTION (#faq)                                           */}
      {/* ================================================================ */}
      <section id="faq" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>

          <div className="lg:col-span-7">
            <FAQAccordion items={FAQ_DATA} />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. CONTACT & ENQUIRY SECTION (#contact)                          */}
      {/* ================================================================ */}
      <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Contact Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#16241F] text-white rounded-3xl p-6 sm:p-8 border border-[#2F5245] shadow-xl space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Direct Contact Details</h2>
              <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
                For quick enquiries or direct scheduling requests, calling or messaging on WhatsApp provides immediate access to {SITE_CONFIG.brandName}.
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

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DCC9] shadow-sm space-y-3">
              <h3 className="text-base font-bold text-[#12140F] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2F5245]" aria-hidden="true" />
                <span>Service Radius Disclosure</span>
              </h3>
              <p className="text-xs text-[#4A5049] leading-relaxed">
                {SITE_CONFIG.brandName} operates 100% on a mobile home-visit basis. There is no physical clinic. Services are provided directly at patients&apos; homes within a <strong className="text-[#12140F]">5 km service radius</strong> in Bengaluru.
              </p>
            </div>
          </div>

          {/* Embedded Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
