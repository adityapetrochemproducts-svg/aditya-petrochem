import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1826",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
