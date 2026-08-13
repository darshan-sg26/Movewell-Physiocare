"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";

interface SmartPhotoProps {
  src: string;
  alt: string;
  label: string;
  sublabel?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  variant?: "dark" | "light";
}

export function SmartPhoto({
  src,
  alt,
  label,
  sublabel = "Photo placeholder — drop image file into /public/images/",
  aspectRatio = "portrait",
  className = "",
  variant = "dark",
}: SmartPhotoProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    // If .jpg failed, try .png
    if (currentSrc.endsWith(".jpg")) {
      setCurrentSrc(currentSrc.replace(/\.jpg$/, ".png"));
    }
    // If .png failed, try .jpeg
    else if (currentSrc.endsWith(".png")) {
      setCurrentSrc(currentSrc.replace(/\.png$/, ".jpeg"));
    }
    // If .jpeg failed, try .webp
    else if (currentSrc.endsWith(".jpeg")) {
      setCurrentSrc(currentSrc.replace(/\.jpeg$/, ".webp"));
    }
    // Final fallback to placeholder
    else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
    return (
      <PlaceholderImage
        label={label}
        sublabel={sublabel}
        aspectRatio={aspectRatio}
        className={className}
        variant={variant}
        alt={alt}
      />
    );
  }

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  return (
    <div className={`relative overflow-hidden rounded-3xl border ${variant === "dark" ? "border-[#2F5245]" : "border-[#E3DCC9]"} ${aspectClasses} ${className} group shadow-lg`}>
      <Image
        src={currentSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={handleError}
      />
    </div>
  );
}
