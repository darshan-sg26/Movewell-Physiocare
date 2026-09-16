import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft, Activity } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Page Not Found | MoveWell Physiocare",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bg-[#16241F] text-white rounded-[28px] p-8 sm:p-12 border border-[#2F5245] shadow-2xl max-w-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E332C] text-[#C9A227] font-black text-2xl border border-[#2F5245]">
          404
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#25D366] font-semibold">
            {SITE_CONFIG.brandName}
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#EFE9DA]/90 leading-relaxed">
            The page you are looking for does not exist or has been moved. You can return to our homepage, view our physiotherapy services, or contact Chinmay directly.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#16241F] font-bold text-sm hover:bg-[#EFE9DA] transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1E332C] text-white font-semibold text-sm border border-[#2F5245] hover:bg-[#2F5245] transition-colors"
          >
            <Activity className="w-4 h-4" aria-hidden="true" />
            <span>Services</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

