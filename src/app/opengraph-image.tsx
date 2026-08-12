import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site";

export const alt = "Chinmay — Home Visit Physiotherapist in Bengaluru";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#16241F",
          color: "#F6F2E9",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#EFE9DA",
              color: "#16241F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            C
          </div>
          <span style={{ fontSize: "28px", fontWeight: "bold", color: "#FFFFFF" }}>
            {SITE_CONFIG.name} — {SITE_CONFIG.role}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#1E332C",
              padding: "8px 20px",
              borderRadius: "20px",
              border: "1px solid #2F5245",
              color: "#25D366",
              fontSize: "18px",
              fontWeight: "600",
              width: "auto",
            }}
          >
            100% Home Visit Practice • {SITE_CONFIG.city}
          </div>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: "900",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Personalized Home Physiotherapy Sessions
          </h1>

          <p style={{ fontSize: "24px", color: "#EFE9DA", margin: 0, opacity: 0.9 }}>
            {SITE_CONFIG.qualification} • {SITE_CONFIG.serviceRadiusKm} km Service Radius in Bengaluru
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "20px", color: "#FFFFFF" }}>
          <span>Phone: {SITE_CONFIG.phoneDisplay}</span>
          <span>•</span>
          <span>Direct Home Visits</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
