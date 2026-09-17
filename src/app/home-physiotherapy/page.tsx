import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Home,
  Calendar,
  ClipboardCheck,
  Activity,
  IndianRupee,
  Clock,
  Sparkles,
  HelpCircle,
  UserCheck,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { FAQ_DATA } from "@/data/faq";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy in Bengaluru | MoveWell Physiocare",
  description:
    "Learn how MoveWell Physiocare home physiotherapy visits work around Hegganahalli Cross, Bengaluru, and how to check availability.",
  alternates: {
    canonical: "/home-physiotherapy",
  },
  openGraph: {
    title: "Home Visit Physiotherapy in Bengaluru | MoveWell Physiocare",
    description:
      "Learn how MoveWell Physiocare home physiotherapy visits work around Hegganahalli Cross, Bengaluru, and how to check availability.",
    url: "/home-physiotherapy",
    siteName: SITE_CONFIG.brandName,
    type: "website",
  },
};

export default function HomePhysiotherapyPage() {
  const steps = [
    {
      step: "01",
      title: "Initial Contact & Pre-Assessment",
      description:
        "Call or message Chinmay directly on WhatsApp with your location, primary discomfort, and scheduling preference.",
      icon: Phone,
    },
    {
      step: "02",
      title: "Appointment Confirmation",
      description:
        "Confirm your address around Hegganahalli Cross (~5–10 km) and agree on a convenient appointment time.",
      icon: Calendar,
    },
    {
      step: "03",
      title: "In-Home Movement Evaluation",
      description:
        "Chinmay visits your home to assess range of motion, muscle strength, joint mobility, and functional movement.",
      icon: ClipboardCheck,
    },
    {
      step: "04",
      title: "Targeted Therapy & Guidance",
      description:
        "Receive personalized hands-on therapy, guided corrective exercises, and daily ergonomics tailored to your home environment.",
      icon: ShieldCheck,
    },
  ];

  const whoMayBenefit = [
    {
      title: "Patients Recovering from Surgery",
      description:
        "Individuals recovering from orthopedic or general surgery who should avoid traveling through Bangalore traffic.",
    },
    {
      title: "Seniors with Limited Mobility",
      description:
        "Elderly family members who require gentle movement exercise, balance practice, and fall prevention in their own home.",
    },
    {
      title: "Joint & Musculoskeletal Pain",
      description:
        "Individuals suffering from persistent knee, shoulder, or back pain who benefit from one-on-one guided movement.",
    },
    {
      title: "Busy Professionals & Caregivers",
      description:
        "Those whose schedules make clinic travel impractical and who prefer professional physiotherapy at home.",
    },
  ];

  const whatToPrepare = [
    {
      title: "Comfortable Clothing",
      description: "Loose, comfortable attire (e.g. track pants, t-shirt) that permits easy movement and joint evaluation.",
    },
    {
      title: "Clear Movement Space",
      description: "A small, well-lit floor area or sturdy chair and bed where exercises and physical assessments can take place safely.",
    },
    {
      title: "Prior Medical Records (If Applicable)",
      description: "Relevant doctor recommendations, surgical discharge summaries, or imaging reports to inform safe practice.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Contact Chinmay",
      description: "Call or message Chinmay directly via WhatsApp or the website form.",
    },
    {
      num: "02",
      title: "Discuss Your Requirements",
      description: "Share the physical concern, mobility challenges, or rehabilitation goals you are experiencing.",
    },
    {
      num: "03",
      title: "Confirm Location & Availability",
      description: "Verify your address around Hegganahalli Cross, Bengaluru, and agree on an available date and time.",
    },
    {
      num: "04",
      title: "Schedule the Visit",
      description: "Your appointment slot is set for Chinmay to travel directly to your residence.",
    },
    {
      num: "05",
      title: "Physiotherapy Session at Home",
      description: "Comprehensive assessment, manual therapy, and guided therapeutic exercises conducted in your home.",
    },
  ];

  // Selected home-visit relevant FAQs
  const homeVisitFaqs = FAQ_DATA.filter((item) =>
    [
      "home-physiotherapy",
      "service-area",
      "hegganahalli-cross",
      "request-visit",
      "session-cost",
      "equipment-needed",
    ].includes(item.id)
  );

  return (
    <div className="space-y-16 lg:space-y-24 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ================================================================ */}
      {/* 1. HERO & WHAT IS HOME PHYSIOTHERAPY                             */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-[#F6F2E9] rounded-[28px] p-6 sm:p-10 lg:p-14 border border-[#2F5245] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
              <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Dedicated Mobile Care Model</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Home Visit Physiotherapy in Bengaluru
            </h1>

            <p className="text-base sm:text-lg text-[#EFE9DA]/90 leading-relaxed max-w-2xl">
              Home physiotherapy brings professional physical assessment, therapeutic exercise, and hands-on techniques directly to your residence. MoveWell Physiocare operates exclusively on a home-visit basis around Hegganahalli Cross, Bengaluru.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#16241F] font-bold text-sm sm:text-base hover:bg-[#EFE9DA] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Request a Home Visit</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

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

            <div className="pt-6 border-t border-[#2F5245] flex flex-wrap gap-4 text-xs text-[#EFE9DA]/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Home Visits Only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Hegganahalli Cross (~5–10 km)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Consultation Starts at ₹500
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1E332C] rounded-3xl p-6 sm:p-7 border border-[#2F5245] shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-[#2F5245] pb-3">
                <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider">
                  Care Process
                </span>
                <span className="text-xs text-[#EFE9DA]/70 font-medium">
                  At Your Residence
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                What to Expect During a Home Visit
              </h3>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#16241F] text-[#25D366] font-bold flex items-center justify-center shrink-0 border border-[#2F5245]">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-white">Pre-Visit Consultation</p>
                    <p className="text-[#EFE9DA]/70 mt-0.5">Quick call or WhatsApp message to discuss your condition and confirm location.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#16241F] text-[#25D366] font-bold flex items-center justify-center shrink-0 border border-[#2F5245]">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-white">In-Home Assessment</p>
                    <p className="text-[#EFE9DA]/70 mt-0.5">Evaluation of joint movement, posture, and mobility in your living environment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#16241F] text-[#25D366] font-bold flex items-center justify-center shrink-0 border border-[#2F5245]">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-white">Hands-On & Exercise Therapy</p>
                    <p className="text-[#EFE9DA]/70 mt-0.5">Guided exercise, manual techniques, and functional movement practice.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#16241F] text-[#25D366] font-bold flex items-center justify-center shrink-0 border border-[#2F5245]">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-white">Daily Routine Guidance</p>
                    <p className="text-[#EFE9DA]/70 mt-0.5">Ergonomic tips and exercises tailored to your furniture, bed, and stairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. WHO MAY BENEFIT FROM A HOME VISIT                             */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Patient Scenarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            Who May Benefit from a Home Visit?
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Home physiotherapy is suited for individuals who value convenient care in their natural living space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whoMayBenefit.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#12140F]">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. WHAT HAPPENS DURING A HOME VISIT                              */}
      {/* ================================================================ */}
      <section className="bg-[#EFE9DA] rounded-[28px] p-6 sm:p-10 border border-[#E3DCC9] shadow-sm space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#16241F] text-white font-semibold text-xs uppercase tracking-wider">
            Session Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            What Happens During a Home Visit?
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Each session is structured around your specific physical capabilities and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E3DCC9] space-y-2">
            <h3 className="text-base font-bold text-[#12140F]">1. Movement Assessment</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Chinmay evaluates joint mobility, posture, functional movements, and areas of discomfort to understand your current physical state.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E3DCC9] space-y-2">
            <h3 className="text-base font-bold text-[#12140F]">2. Targeted Treatment</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Depending on your case, techniques such as mobilisation, guided exercises, massage techniques, or electrical stimulation are applied.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E3DCC9] space-y-2">
            <h3 className="text-base font-bold text-[#12140F]">3. Home Exercise Instruction</h3>
            <p className="text-xs text-[#4A5049] leading-relaxed">
              Clear, manageable exercises are demonstrated using your everyday furniture (chairs, beds) so you can safely continue between visits.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. HOW TO PREPARE BEFORE A SESSION                               */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Patient Preparation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            What to Prepare Before a Session
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            Simple steps to ensure your home visit is smooth, comfortable, and productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatToPrepare.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-[#12140F]">{item.title}</h3>
              <p className="text-xs text-[#4A5049] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. PROCESS STEPS                                                 */}
      {/* ================================================================ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
            Step-by-Step
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight">
            Arranging a Home Visit
          </h2>
          <p className="text-sm text-[#4A5049] leading-relaxed">
            How to request, schedule, and receive a home physiotherapy session.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-5 rounded-2xl border border-[#E3DCC9] shadow-sm flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#16241F]/30">{step.num}</span>
                <div className="w-7 h-7 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12140F] mb-1">{step.title}</h3>
                <p className="text-xs text-[#4A5049] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. SERVICES AVAILABLE THROUGH HOME VISITS                        */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-white rounded-[28px] p-6 sm:p-10 lg:p-12 border border-[#2F5245] shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#1E332C] text-[#25D366] font-semibold text-xs uppercase tracking-wider border border-[#2F5245]">
              Services Offered
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
              Services Available at Home
            </h2>
            <p className="text-xs sm:text-sm text-[#EFE9DA]/90 mt-1 max-w-xl">
              All 8 core services offered by MoveWell Physiocare are available for home-visit sessions.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#16241F] font-bold text-xs sm:text-sm hover:bg-[#EFE9DA] shrink-0 transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.slug}
              className="bg-[#1E332C] p-4 rounded-2xl border border-[#2F5245] space-y-2"
            >
              <h3 className="text-sm font-bold text-white">{service.title}</h3>
              <p className="text-xs text-[#EFE9DA]/80 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. SERVICE AREA & PRICING                                        */}
      {/* ================================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold text-[#12140F]">Service Area & Reach</h2>
          <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
            MoveWell Physiocare provides home visits within approximately a 5–10 km service radius around Hegganahalli Cross, Bengaluru. Exact coverage depends on appointment availability and travel routes.
          </p>
          <div className="p-3 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-xs text-[#4A5049]">
            Note: Some nearby areas (such as Peenya, Sunkadakatte, Adrahalli, and Laggere) may not be covered. Contact Chinmay with your address to confirm.
          </div>
          <Link
            href="/areas-we-serve"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline"
          >
            <span>Learn more about service areas</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DCC9] shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#16241F] text-[#25D366] flex items-center justify-center">
            <IndianRupee className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold text-[#12140F]">Pricing & Availability</h2>
          <p className="text-xs sm:text-sm text-[#4A5049] leading-relaxed">
            Consultation starts at ₹500. Final session pricing may vary depending on the individual&apos;s case and requirements.
          </p>
          <div className="p-3 bg-[#F6F2E9] rounded-xl border border-[#E3DCC9] text-xs text-[#4A5049] space-y-1">
            <p><strong>Working Days:</strong> Daily, subject to appointment availability.</p>
            <p><strong>Packages:</strong> Multi-session options may be available. Contact Chinmay for details.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline"
          >
            <span>Contact to schedule a visit</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. FAQ ACCORDION                                                 */}
      {/* ================================================================ */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#16241F]/10 text-[#16241F] font-semibold text-xs uppercase tracking-wider">
              Home Care FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12140F] tracking-tight mt-2">
              Common Questions About Home Visits
            </h2>
          </div>

          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16241F] hover:underline shrink-0"
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <FAQAccordion items={homeVisitFaqs} />
      </section>

      {/* ================================================================ */}
      {/* 9. CONTACT / WHATSAPP CTA                                        */}
      {/* ================================================================ */}
      <section className="bg-[#16241F] text-white rounded-3xl p-8 sm:p-12 border border-[#2F5245] shadow-xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to Schedule a Home Visit?
          </h2>
          <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
            Contact Chinmay to check availability for your location around Hegganahalli Cross and arrange a suitable session time.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={SITE_CONFIG.telUrl}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#16241F] font-bold text-sm sm:text-base hover:bg-[#EFE9DA] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
            <span>WhatsApp Enquiry</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E332C] text-white font-semibold text-sm sm:text-base border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <span>Submit Enquiry Form</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
