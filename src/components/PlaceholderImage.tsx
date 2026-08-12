import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  sublabel?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  variant?: "dark" | "light";
  alt: string; // Mandatory alt text for accessibility & spec compliance
}

export function PlaceholderImage({
  label,
  sublabel = "Photo placeholder — to be updated",
  aspectRatio = "square",
  className = "",
  variant = "dark",
  alt,
}: PlaceholderImageProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  const variantClasses =
    variant === "dark"
      ? "bg-[#1E332C] text-[#F6F2E9] border-[#2F5245]"
      : "bg-[#EFE9DA] text-[#12140F] border-[#E3DCC9]";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed ${aspectClasses} ${variantClasses} ${className} overflow-hidden text-center transition-all`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#16241F]/20 mb-3">
        <ImageIcon className="w-6 h-6 opacity-80" aria-hidden="true" />
      </div>
      <p className="font-semibold text-sm tracking-wide">{label}</p>
      <p className="text-xs opacity-75 mt-1 max-w-[200px]">{sublabel}</p>
    </div>
  );
}
