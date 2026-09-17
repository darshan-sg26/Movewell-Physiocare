import React from "react";
import Image from "next/image";
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
  showImage?: boolean;
}

export function ServiceCard({ service, variant = "light", showImage = true }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || HelpCircle;

  const isDark = variant === "dark";

  const cardClasses = isDark
    ? "bg-[#16241F] text-[#F6F2E9] border-[#2F5245]"
    : "bg-[#FFFFFF] text-[#12140F] border-[#E3DCC9] shadow-sm hover:shadow-md";

  const iconCircleClasses = isDark
    ? "bg-[#FFFFFF] text-[#16241F]"
    : "bg-[#16241F] text-[#FFFFFF]";

  const hasImage = showImage && Boolean(service.image);

  return (
    <div className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl border transition-all duration-200 ${cardClasses}`}>
      <div>
        {/* 1. Optional Service Photo at Top */}
        {hasImage && service.image && (
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#16241F]/5 border border-black/5 shadow-inner">
            <Image
              src={service.image}
              alt={service.imageAlt || `${service.title} physiotherapy session`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: service.objectPosition || "center" }}
              loading="lazy"
            />
          </div>
        )}

        {/* 2. Circular Service Icon */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold shadow-sm shrink-0 ${iconCircleClasses}`}>
            <IconComponent className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>

        {/* 3. Service Title */}
        <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-2 ${isDark ? "text-white" : "text-[#12140F]"}`}>
          {service.title}
        </h3>

        {/* 4. Short Description */}
        <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? "text-[#EFE9DA]/90" : "text-[#4A5049]"}`}>
          {service.shortDescription}
        </p>

        {/* 5. Key Benefits List */}
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
