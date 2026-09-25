import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D16",
          900: "#0A1826",
          800: "#0F2438",
          700: "#173A56",
          600: "#245073",
        },
        steel: {
          100: "#EEF1F4",
          200: "#DCE2E7",
          300: "#BFC9D1",
          400: "#94A2AE",
          500: "#6C7A87",
          600: "#4E5C68",
          700: "#38434D",
        },
        paper: "#F6F4EF",
        amber: {
          400: "#E0A343",
          500: "#C6791F",
          600: "#A8630F",
          700: "#84500F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1400px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(6,13,22,0.45)",
        card: "0 1px 2px rgba(15,36,56,0.06), 0 10px 24px -12px rgba(15,36,56,0.12)",
        "card-hover": "0 4px 8px rgba(15,36,56,0.08), 0 20px 40px -16px rgba(15,36,56,0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.8s ease both",
        "drift": "drift 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
