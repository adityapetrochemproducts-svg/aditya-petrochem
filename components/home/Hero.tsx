"use client";

import Link from "next/link";
import { useEnquiryModal } from "@/components/enquiry/EnquiryModalProvider";

export function Hero() {
  const { openEnquiry } = useEnquiryModal();

  return (
    <section className="relative overflow-hidden bg-navy-950 pb-24 pt-40 sm:pb-28 sm:pt-48">
      <div className="absolute inset-0 bg-blueprint-dark opacity-60" />
      <div
        className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #E0A343 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -left-24 bottom-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #245073 0%, transparent 70%)",
        }}
      />

      <div className="container-content relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow-light">Industrial Oils &amp; Lubricants</p>
          <h1 className="mt-5 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Reliable Industrial Oils for Demanding Applications
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-steel-300 sm:text-lg">
            Aditya Petrochem supplies cutting oil, punching oil, hydraulic oil
            and other type of industrial oil and greases engineered for
            consistent performance on manufacturing floors, tool rooms and OEM
            production lines.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="btn-primary"
            >
              Know Your Price
            </button>
            <Link href="/products" className="btn-outline-light">
              Explore Products
            </Link>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat value="8" label="Product Lines" />
            <Stat value="B2B" label="Bulk & OEM Supply" />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-steel-400">
        {label}
      </p>
    </div>
  );
}

function HeroDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-dashed border-white/10" />

      <svg
        viewBox="0 0 320 320"
        className="relative h-full w-full text-steel-300"
        aria-hidden="true"
      >
        {/* central drum */}
        <g transform="translate(110,150)">
          <rect
            x="0"
            y="0"
            width="100"
            height="120"
            rx="4"
            fill="#0F2438"
            stroke="#E0A343"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="20"
            x2="100"
            y2="20"
            stroke="#38434D"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="100"
            stroke="#38434D"
            strokeWidth="1.5"
          />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="11"
            fontFamily="monospace"
            fill="#E0A343"
            letterSpacing="2"
          >
            AP-OIL
          </text>
          <text
            x="50"
            y="80"
            textAnchor="middle"
            fontSize="8"
            fontFamily="monospace"
            fill="#94A2AE"
            letterSpacing="1"
          >
            INDUSTRIAL
          </text>
        </g>

        {/* orbiting droplet accents */}
        <circle cx="70" cy="70" r="3" fill="#E0A343" opacity="0.8" />
        <circle cx="250" cy="60" r="2.5" fill="#E0A343" opacity="0.5" />
        <circle cx="260" cy="230" r="3" fill="#E0A343" opacity="0.7" />
        <circle cx="55" cy="240" r="2" fill="#E0A343" opacity="0.4" />

        {/* connecting lines to labels */}
        <line
          x1="110"
          y1="180"
          x2="40"
          y2="180"
          stroke="#38434D"
          strokeWidth="1"
        />
        <line
          x1="210"
          y1="190"
          x2="234"
          y2="190"
          stroke="#38434D"
          strokeWidth="1"
        />
        <line
          x1="140"
          y1="150"
          x2="140"
          y2="90"
          stroke="#38434D"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="270"
          x2="180"
          y2="300"
          stroke="#38434D"
          strokeWidth="1"
        />

        <text x="8" y="184" fontSize="9" fontFamily="monospace" fill="#8B98A5">
          VISCOSITY
        </text>
        <text
          x="314"
          y="194"
          textAnchor="end"
          fontSize="9"
          fontFamily="monospace"
          fill="#8B98A5"
        >
          FILM STRENGTH
        </text>
        <text x="98" y="84" fontSize="9" fontFamily="monospace" fill="#8B98A5">
          PURITY
        </text>
        <text
          x="148"
          y="312"
          fontSize="9"
          fontFamily="monospace"
          fill="#8B98A5"
        >
          STABILITY
        </text>
      </svg>
    </div>
  );
}
