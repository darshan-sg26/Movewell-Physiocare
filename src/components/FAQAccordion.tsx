"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="bg-[#FFFFFF] rounded-2xl border border-[#E3DCC9] overflow-hidden transition-all duration-200"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#2F5245] transition-colors hover:bg-[#F6F2E9]/50"
            >
              <span className="font-bold text-base sm:text-lg text-[#12140F] tracking-tight">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-[#F6F2E9] text-[#16241F] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#16241F] text-white" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A5049] leading-relaxed border-t border-[#E3DCC9]/40 bg-[#F6F2E9]/20"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
