import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2, Home, Heart, Calendar, ClipboardCheck, Activity, Shield, HeartHandshake, Info, Clock, IndianRupee, Sparkles } from "lucide-react";
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
      description: "Contact Chinmay via Call, WhatsApp, or the enquiry form to share your location and requirements.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "In-Home Assessment",
      description: "Chinmay visits your residence around Hegganahalli Cross to perform a physical movement assessment.",
      icon: ClipboardCheck,
    },
    {
      num: "03",
      title: "Personalised Treatment",
      description: "Receive 1-on-1 physiotherapy sessions incorporating exercises, manual techniques, or electrical stimulation as appropriate.",
      icon: Activity,
    },
    {
      num: "04",
      title: "Ongoing Guidance",
      description: "Session adjustments and home exercise guidance tailored to your functional goals.",
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
                <span>MOVEWELL PHYSIOCARE • HOME VISIT PHYSIOTHERAPY • BENGALURU</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Home Physiotherapy, Delivered to You
              </h1>

              <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed max-w-2xl">
                MoveWell Physiocare provides home-visit physiotherapy sessions around Hegganahalli Cross, Bengaluru, with coverage generally extending approximately 5–10 km depending on location and availability.
              </p>

              {/* Primary Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#16241F] font-bold text-sm sm:text-base hover:bg-[#EFE9DA] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Request a Home Visit</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
                  href={SITE_CONFIG.telUrl}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-[#EFE9DA] hover:text-white font-semibold text-sm border border-[#2F5245] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              {/* Factual Stat & Feature Callouts */}
              <div className="pt-8 border-t border-[#2F5245] grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {SITE_CONFIG.serviceRadius}
                  </div>
                  <p className="text-xs text-[#EFE9DA]/80 mt-1 font-medium">Approx. Service Area</p>
                </div>

                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
                    <Home className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-bold mt-2">Home Visits Only</p>
                  <p className="text-[11px] text-[#EFE9DA]/70">No physical clinic</p>
                </div>

                <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] flex flex-col justify-between col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#C9A227] flex items-center justify-center">
                    <Award className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-bold mt-2">Chinmay</p>
                  <p className="text-[11px] text-[#EFE9DA]/70">1 year of clinical experience</p>
                </div>
              </div>
            </div>

            {/* Right Photo Column: SmartPhoto with hero-session.png */}
            <div className="lg:col-span-5">
              <SmartPhoto
                src="/images/hero-session.png"
                label="Home Physiotherapy Session"
                sublabel="Representative physiotherapy session photo"
                aspectRatio="portrait"
                variant="dark"
                alt="MoveWell Physiocare home-visit physiotherapy session in Bengaluru"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. ABOUT SECTION (#about)                                        */}
      {/* ================================================================ */}
      <section id="about" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Brand Message Pull Quote */}
        <div className="bg-[#EFE9DA] rounded-3xl p-6 sm:p-8 border border-[#E3DCC9] shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#16241F] text-white flex items-center justify-center shrink-0 shadow-md">
            <Heart className="w-7 h-7 text-[#25D366]" aria-hidden="true" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xs font-bold text-[#12140F] uppercase tracking-wider">
              Brand Message
            </h2>
            <blockquote className="text-lg sm:text-xl text-[#12140F] font-bold leading-relaxed italic">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </blockquote>
            <p className="text-xs text-[#4A5049] font-medium">
              Physiotherapy sessions provided by Chinmay — Home visit care in Bengaluru.
            </p>
          </div>
        </div>

        {/* Profile / Service Model Card */}
        <div className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <SmartPhoto
              src="/images/chinmay-portrait.jpg"
              label="Home Physiotherapy Practice"
              sublabel="Representative home care photo"
              aspectRatio="portrait"
              variant="dark"
              alt="MoveWell Physiocare home visit physiotherapy practice"
            />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#C9A227] font-semibold text-xs border border-[#2F5245]">
              <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Practitioner: Chinmay (1 year of clinical experience)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About MoveWell Physiocare
            </h2>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              Chinmay provides home-visit physiotherapy sessions for individuals seeking personalised physiotherapy and rehabilitation support at home.
            </p>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              Sessions take place directly at your residence, eliminating the need to travel while receiving undivided 1-on-1 attention tailored to your recovery goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>1 Year of Clinical Experience</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Home Visits Only — No Physical Clinic</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Hegganahalli Cross (~5–10 km area)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EFE9DA] bg-[#1E332C] p-3 rounded-xl border border-[#2F5245]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Personalised 1-on-1 Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features / Care Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <Home className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Home Environment Focus</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Sessions are structured around your actual home surroundings, making therapeutic exercises practical and easy to follow.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Dedicated 1-on-1 Support</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Chinmay provides focused individual sessions without waiting room delays or rush.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-white flex items-center justify-center font-bold">
              <IndianRupee className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Clear Starting Pricing</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Consultation starts at ₹500. Final pricing depends on individual case requirements.
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
            Current Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight">
            Physiotherapy Services
          </h2>
          <p className="text-sm sm:text-base text-[#4A5049] leading-relaxed">
            Current service offerings available during home-visit sessions with Chinmay.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
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
            Home Care Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12140F] tracking-tight">
            How Home Visit Physiotherapy Works
          </h2>
          <p className="text-sm sm:text-base text-[#4A5049] leading-relaxed">
            Convenient and structured sessions delivered at your residence.
          </p>
        </div>

        {/* Dark Feature Panel */}
        <div className="bg-[#16241F] text-white rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs border border-[#2F5245]">
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Home Visits Only — No Physical Clinic</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Physiotherapy Sessions at Your Residence
            </h3>

            <p className="text-sm sm:text-base text-[#EFE9DA]/90 leading-relaxed">
              MoveWell Physiocare operates exclusively on a home-visit basis. Chinmay travels to patients&apos; homes in and around Hegganahalli Cross, Bengaluru, avoiding the stress of travel for individuals recovering from surgery, pain, or mobility restrictions.
            </p>

            <div className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C9A227]">
                <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Techniques & Modalities</span>
              </div>
              <p className="text-xs text-[#EFE9DA]/90 leading-relaxed">
                Depending on the individual&apos;s needs, sessions may incorporate techniques such as mobilisation, agility training, plyometric exercises, and electrical stimulation.
              </p>
            </div>

            <div className="space-y-2 pt-1 text-xs sm:text-sm text-[#EFE9DA]/90">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>No clinic travel required</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Sessions conducted in your comfortable home setting</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Approx. 5–10 km service area around Hegganahalli Cross</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SmartPhoto
              src="/images/home-setup.png"
              label="Home Session Setup"
              sublabel="Representative home visit setup photo"
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
      {/* 5. SERVICE AREA, PRICING & HOURS SECTION                        */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Area Card */}
          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Service Area</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Home visits are generally available within approximately a 5–10 km service area around Hegganahalli Cross, Bengaluru, subject to availability.
            </p>
            <div className="p-3 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-[11px] text-[#4A5049] leading-normal">
              <strong className="text-[#12140F]">Notice:</strong> Some nearby areas (such as Peenya, Sunkadakatte, Adrahalli, and Laggere) may not be covered. Contact Chinmay to confirm availability at your location.
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
              <IndianRupee className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Session Pricing</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Consultation starts at ₹500. Final session pricing may vary depending on the individual&apos;s case and requirements.
            </p>
            <div className="p-3 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-[11px] text-[#4A5049]">
              Multi-session options may be available. Contact Chinmay for details.
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#12140F]">Hours & Booking</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Home visits available daily, subject to appointment availability.
            </p>
            <div className="p-3 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-[11px] text-[#4A5049]">
              Please contact Chinmay to check availability and arrange a suitable time.
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. CONDITIONS TREATED SECTION (#conditions)                      */}
      {/* ================================================================ */}
      <section id="conditions" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE9DA] rounded-[28px] p-6 sm:p-10 border border-[#E3DCC9] shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#16241F] text-white font-semibold text-xs uppercase tracking-wider">
              Care Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
              Conditions Addressable in Home Visits
            </h2>
            <p className="text-sm text-[#4A5049] leading-relaxed">
              Chinmay currently provides home physiotherapy support for individuals dealing with:
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
      {/* 7. FAQ SECTION (#faq)                                           */}
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
              Find essential details regarding home visits, service area around Hegganahalli Cross, pricing, and booking.
            </p>
          </div>

          <div className="lg:col-span-7">
            <FAQAccordion items={FAQ_DATA} />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. CONTACT & ENQUIRY SECTION (#contact)                          */}
      {/* ================================================================ */}
      <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Contact Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#16241F] text-white rounded-3xl p-6 sm:p-8 border border-[#2F5245] shadow-xl space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Direct Contact Details</h2>
              <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
                For quick enquiries or to check availability for your location, call or message Chinmay directly on WhatsApp.
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
                    <p className="text-xs text-[#EFE9DA]/80 font-medium">Call Chinmay Directly</p>
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
                <span>Service Model & Location Notice</span>
              </h3>
              <p className="text-xs text-[#4A5049] leading-relaxed">
                MoveWell Physiocare has <strong className="text-[#12140F]">no physical clinic — home visits only</strong>. Home visits are generally available within approximately a 5–10 km service area around Hegganahalli Cross, Bengaluru, subject to availability.
              </p>
              <p className="text-xs text-[#4A5049] leading-relaxed">
                Some nearby areas (such as Peenya, Sunkadakatte, Adrahalli, and Laggere) may not be covered. Contact Chinmay to confirm availability at your location.
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
