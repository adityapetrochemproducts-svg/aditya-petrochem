import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A1826",
          backgroundImage:
            "linear-gradient(#94A2AE22 1px, transparent 1px), linear-gradient(90deg, #94A2AE22 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 1.5 L29.5 9 V23 L16 30.5 L2.5 23 V9 Z"
              stroke="#E0A343"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M16 9 C19.5 14, 22 17.2, 22 20.2 C22 23.9, 19.3 26.5, 16 26.5 C12.7 26.5, 10 23.9, 10 20.2 C10 17.2, 12.5 14, 16 9 Z"
              fill="#E0A343"
            />
          </svg>
          <span style={{ color: "#ffffff", fontSize: 32, fontWeight: 700 }}>
            {siteConfig.shortName}
          </span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#E0A343",
          }}
        >
          Industrial Oils &amp; Lubricants
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          Reliable Industrial Oils for Demanding Applications
        </div>
      </div>
    ),
    { ...size }
  );
}
