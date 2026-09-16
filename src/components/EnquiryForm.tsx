"use client";

/**
 * EnquiryForm Component for Movewell Physiocare
 */

import React, { useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { track } from "@/lib/track";

interface FormDataState {
  name: string;
  phone: string;
  contactMethod: "Call" | "WhatsApp";
  message: string;
  preferredTime: string;
  hp_field: string;
}

interface FormErrorsState {
  name?: string;
  phone?: string;
  message?: string;
  general?: string;
}

export function EnquiryForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    phone: "",
    contactMethod: "Call",
    message: "",
    preferredTime: "",
    hp_field: "",
  });

  const [errors, setErrors] = useState<FormErrorsState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleFirstInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      track("enquiry_started");
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrorsState = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/\s+/g, "").replace(/^(\+91|91)/, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile phone number is required.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g. 9113285572).";
    }

    // Message is optional per section 14
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        track("enquiry_submitted", { contactMethod: formData.contactMethod });
      } else {
        setErrors({ general: data.message || "Unable to submit enquiry. Please call or WhatsApp directly." });
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setErrors({ general: "Network error occurred. Please use Call or WhatsApp to reach MoveWell Physiocare directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="enquiry-form" className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3DCC9] shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#16241F]" />

      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F2E9] text-[#16241F] font-semibold text-xs uppercase tracking-wider mb-2 border border-[#E3DCC9]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2F5245]" aria-hidden="true" />
          Direct Enquiry
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#12140F] tracking-tight">
          Request a Home Visit Enquiry
        </h3>
        <p className="text-sm text-[#4A5049] mt-2 leading-relaxed">
          Fill out this form to inquire about home physiotherapy. Chinmay will review your details and respond via your preferred contact method.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-[#F6F2E9] rounded-2xl p-6 sm:p-8 border border-[#2E9E6B]/30 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#12140F]">Enquiry Sent Successfully!</h4>
            <p className="text-sm text-[#4A5049] mt-2">
              Thank you, <strong className="text-[#12140F]">{formData.name}</strong>. {SITE_CONFIG.brandName} will review your enquiry and get back to you shortly via {formData.contactMethod}.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E3DCC9] space-y-3">
            <p className="text-xs text-[#4A5049] font-medium">Need an immediate answer?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.telUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#16241F] text-white font-semibold text-sm hover:bg-[#1E332C] transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {errors.general && (
            <div
              role="alert"
              aria-live="polite"
              className="p-4 rounded-xl bg-[#B3412E]/10 border border-[#B3412E]/30 text-[#B3412E] text-sm space-y-3"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Submission Failed</p>
                  <p className="mt-0.5">{errors.general}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#B3412E]/20">
                <a
                  href={SITE_CONFIG.telUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16241F] text-white text-xs font-semibold hover:bg-[#1E332C]"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          )}

          <div aria-hidden="true" className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none">
            <label htmlFor="hp_field">Do not fill this field</label>
            <input
              type="text"
              id="hp_field"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              value={formData.hp_field}
              onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#12140F] mb-1">
              Your Name <span className="text-[#B3412E]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={100}
              placeholder="e.g. Rahul Sharma"
              onFocus={handleFirstInteraction}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border bg-[#F6F2E9]/40 text-[#12140F] text-base focus:bg-white focus:outline-none transition-colors ${
                errors.name ? "border-[#B3412E] ring-1 ring-[#B3412E]" : "border-[#E3DCC9] focus:border-[#2F5245]"
              }`}
            />
            {errors.name && (
              <p id="name-error" aria-live="polite" className="text-xs text-[#B3412E] mt-1 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#12140F] mb-1">
              Mobile Phone Number <span className="text-[#B3412E]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength={15}
              placeholder="e.g. 9113285572"
              onFocus={handleFirstInteraction}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border bg-[#F6F2E9]/40 text-[#12140F] text-base focus:bg-white focus:outline-none transition-colors ${
                errors.phone ? "border-[#B3412E] ring-1 ring-[#B3412E]" : "border-[#E3DCC9] focus:border-[#2F5245]"
              }`}
            />
            <p className="text-xs text-[#4A5049] mt-1">10-digit Indian mobile number</p>
            {errors.phone && (
              <p id="phone-error" aria-live="polite" className="text-xs text-[#B3412E] mt-1 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <fieldset>
              <legend className="block text-sm font-semibold text-[#12140F] mb-2">
                Preferred Contact Method
              </legend>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer font-medium text-sm transition-all ${
                    formData.contactMethod === "Call"
                      ? "bg-[#16241F] text-white border-[#16241F] shadow-sm"
                      : "bg-[#F6F2E9]/40 text-[#12140F] border-[#E3DCC9] hover:bg-[#F6F2E9]"
                  }`}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Call"
                    checked={formData.contactMethod === "Call"}
                    onChange={() => setFormData({ ...formData, contactMethod: "Call" })}
                    className="sr-only"
                  />
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Phone Call</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer font-medium text-sm transition-all ${
                    formData.contactMethod === "WhatsApp"
                      ? "bg-[#25D366] text-white border-[#25D366] shadow-sm"
                      : "bg-[#F6F2E9]/40 text-[#12140F] border-[#E3DCC9] hover:bg-[#F6F2E9]"
                  }`}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value="WhatsApp"
                    checked={formData.contactMethod === "WhatsApp"}
                    onChange={() => setFormData({ ...formData, contactMethod: "WhatsApp" })}
                    className="sr-only"
                  />
                  <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span>WhatsApp</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-[#12140F] mb-1">
              Preferred Date / Time <span className="text-xs font-normal text-[#4A5049]">(Optional)</span>
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              placeholder="e.g. Tomorrow morning or Weekdays after 4 PM"
              onFocus={handleFirstInteraction}
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E3DCC9] bg-[#F6F2E9]/40 text-[#12140F] text-base focus:bg-white focus:border-[#2F5245] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#12140F] mb-1">
              Enquiry Message <span className="text-xs font-normal text-[#4A5049]">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Describe your enquiry (e.g. seeking home physiotherapy session around Hegganahalli Cross)..."
              onFocus={handleFirstInteraction}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E3DCC9] bg-[#F6F2E9]/40 text-[#12140F] text-base focus:bg-white focus:border-[#2F5245] focus:outline-none transition-colors"
            />
            <p className="text-xs text-[#4A5049] mt-1">
              Briefly tell us what you&apos;d like to enquire about. Please don&apos;t include sensitive medical information.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[52px] px-6 py-3.5 rounded-2xl bg-[#16241F] text-white font-bold text-base hover:bg-[#1E332C] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#16241F]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>Send Enquiry to {SITE_CONFIG.brandName}</span>
              </>
            )}
          </button>

          <p className="text-xs text-center text-[#4A5049] pt-1">
            MoveWell Physiocare provides home visits around Hegganahalli Cross, Bengaluru. Contact Chinmay to check availability.
          </p>
        </form>
      )}
    </div>
  );
}
