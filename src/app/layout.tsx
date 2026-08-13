import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/data/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://movewellphysiocare.com"),
  title: {
    default: `${SITE_CONFIG.brandName} — Home Visit Physiotherapy in ${SITE_CONFIG.city}`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: `Mobile home-visit physiotherapy services by ${SITE_CONFIG.brandName} led by ${SITE_CONFIG.practitionerName} (${SITE_CONFIG.qualification}) within a 5 km radius in ${SITE_CONFIG.city}. No physical clinic visits needed.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} — Home Visit Physiotherapy in ${SITE_CONFIG.city}`,
    description: `Mobile home-visit physiotherapy services by ${SITE_CONFIG.brandName} led by ${SITE_CONFIG.practitionerName} (${SITE_CONFIG.qualification}) within a 5 km radius in ${SITE_CONFIG.city}.`,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} — Home Visit Physiotherapy in ${SITE_CONFIG.city}`,
    description: `Mobile home-visit physiotherapy services by ${SITE_CONFIG.brandName} led by ${SITE_CONFIG.practitionerName} (${SITE_CONFIG.qualification}) within a 5 km radius in ${SITE_CONFIG.city}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F2E9] text-[#12140F]">
        <Header />
        <main className="flex-1 pb-mobile-action-bar">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
