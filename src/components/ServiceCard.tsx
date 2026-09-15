import React from "react";
import { Hand, Activity, Trophy, HeartPulse, ShieldAlert, UserCheck, Sparkles, Zap, Check, HelpCircle } from "lucide-react";
import { ServiceItem } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Hand,
  Activity,
  Trophy,
  HeartPulse,
  ShieldAlert,
  UserCheck,
  Sparkles,
  Zap,
};

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "dark" | "light";
}

export function ServiceCard({ service, variant = "light" }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || HelpCircle;

  const isDark = variant === "dark";

  const cardClasses = isDark
    ? "bg-[#16241F] text-[#F6F2E9] border-[#2F5245]"
    : "bg-[#FFFFFF] text-[#12140F] border-[#E3DCC9] shadow-sm hover:shadow-md";

  const iconCircleClasses = isDark
    ? "bg-[#FFFFFF] text-[#16241F]"
    : "bg-[#16241F] text-[#FFFFFF]";

  return (
    <div className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-200 ${cardClasses}`}>
      <div>
        {/* Top bar with Circular Icon Button */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-sm shrink-0 ${iconCircleClasses}`}>
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold tracking-tight mb-2 ${isDark ? "text-white" : "text-[#12140F]"}`}>
          {service.title}
        </h3>

        {/* Short description */}
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-[#EFE9DA]/90" : "text-[#4A5049]"}`}>
          {service.shortDescription}
        </p>

        {/* Key Benefits List */}
        <ul className="space-y-2">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs">
              <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isDark ? "bg-[#25D366]/20 text-[#25D366]" : "bg-[#16241F]/10 text-[#16241F]"}`}>
                <Check className="w-3 h-3" aria-hidden="true" />
              </span>
              <span className={isDark ? "text-[#EFE9DA]/80" : "text-[#4A5049]"}>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
