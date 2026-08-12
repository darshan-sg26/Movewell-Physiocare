"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { track } from "@/lib/track";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  const navLinks = [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "services", label: "Services", href: "/#services" },
    { id: "home-physiotherapy", label: "Home Visit Model", href: "/#home-physiotherapy" },
    { id: "faq", label: "FAQ", href: "/#faq" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    // Active section detection via IntersectionObserver
    const sectionIds = ["home", "about", "services", "home-physiotherapy", "faq", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        setActiveSection(id);
        setMobileMenuOpen(false);
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  const handlePhoneClick = () => {
    track("phone_click", { location: "header" });
  };

  const handleWhatsappClick = () => {
    track("whatsapp_click", { location: "header" });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#16241F] text-[#F6F2E9] border-b border-[#2F5245] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#F6F2E9] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-[#EFE9DA] text-[#16241F] flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#FFFFFF]">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-[#EFE9DA]/80 tracking-wide font-medium">
                {SITE_CONFIG.role} • Home Visits
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Scroll Indicator */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative ${
                    isActive
                      ? "bg-[#1E332C] text-[#FFFFFF] font-semibold border border-[#2F5245] shadow-inner"
                      : "text-[#EFE9DA] hover:bg-[#1E332C]/60 hover:text-[#FFFFFF]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Call & WhatsApp Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.telUrl}
              onClick={handlePhoneClick}
              aria-label={`Call Chinmay at ${SITE_CONFIG.phoneDisplay}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFFFFF] text-[#16241F] font-semibold text-sm hover:bg-[#EFE9DA] transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#FFFFFF]"
            >
              <span className="w-7 h-7 rounded-full bg-[#16241F] text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <span>Call</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              aria-label="Message Chinmay on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="w-11 h-11 rounded-full bg-[#1E332C] text-[#F6F2E9] flex items-center justify-center hover:bg-[#2F5245] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16241F] border-b border-[#2F5245] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-[#1E332C] text-white font-semibold border border-[#2F5245]"
                      : "text-[#EFE9DA] hover:bg-[#1E332C]/60"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#2F5245] flex flex-col gap-3">
            <a
              href={SITE_CONFIG.telUrl}
              onClick={() => {
                handlePhoneClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#FFFFFF] text-[#16241F] font-bold text-base shadow-sm"
            >
              <Phone className="w-5 h-5 text-[#16241F]" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleWhatsappClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-base shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
