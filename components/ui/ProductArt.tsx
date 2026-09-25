import { cn } from "@/lib/utils";
import type { ProductArtVariant } from "@/types/product";

type ArtVariant = ProductArtVariant;

const CODES: Record<ArtVariant, string> = {
  cutting: "CO",
  punching: "PO",
  hydraulic: "HO",
  gear: "GO",
  grease: "GR",
  transformer: "TO",
  bending: "CB",
  vacuum: "VO",
  rust: "RP",
};

function CuttingMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* tool shaft */}
      <line x1="40" y1="46" x2="102" y2="80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* flutes */}
      <line x1="46" y1="55" x2="70" y2="70" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="54" y1="49" x2="78" y2="64" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" />
      {/* cutting point + swarf spiral */}
      <circle cx="102" cy="80" r="3" fill="currentColor" />
      <path
        d="M102 80 C 118 84, 122 98, 112 108 C 104 116, 108 128, 120 128"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      {/* workpiece */}
      <rect x="98" y="88" width="70" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="98" y1="95" x2="168" y2="95" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      {/* coolant droplet */}
      <path
        d="M136 55 C 140 62, 144 67, 136 73 C 128 67, 132 62, 136 55 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

function PunchingMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* ram */}
      <rect x="88" y="24" width="24" height="34" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="58" x2="100" y2="82" stroke="currentColor" strokeWidth="2.5" />
      {/* impact arrows */}
      <line x1="100" y1="66" x2="100" y2="76" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" />
      {/* sheet + die */}
      <rect x="52" y="82" width="96" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M92 92 L92 102 L88 108 M108 92 L108 102 L112 108" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
      <rect x="70" y="108" width="60" height="16" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
      {/* punched disc, offset, amber */}
      <circle cx="100" cy="97" r="5" className="fill-amber-500" />
    </svg>
  );
}

function HydraulicMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* cylinder barrel */}
      <rect x="58" y="66" width="70" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="58" y1="80" x2="128" y2="80" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      {/* piston rod */}
      <line x1="128" y1="80" x2="158" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect x="118" y="70" width="8" height="20" fill="currentColor" fillOpacity="0.85" />
      {/* pressure chevrons */}
      <path d="M70 80 L78 74 M70 80 L78 86" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
      <path d="M84 80 L92 74 M84 80 L92 86" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
      {/* port + drop */}
      <line x1="70" y1="66" x2="70" y2="54" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M70 40 C 74 47, 78 52, 70 58 C 62 52, 66 47, 70 40 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

// Rounded to 2 decimals so the server- and client-rendered markup match
// exactly — raw Math.cos/Math.sin output can differ in the last float digit
// between JS engine builds, which otherwise trips a hydration mismatch.
function r2(n: number) {
  return Math.round(n * 100) / 100;
}

function GearMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* single large gear */}
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="100" cy="76" r="32" />
        <circle cx="100" cy="76" r="11" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1={r2(100 + 32 * Math.cos((deg * Math.PI) / 180))}
            y1={r2(76 + 32 * Math.sin((deg * Math.PI) / 180))}
            x2={r2(100 + 40 * Math.cos((deg * Math.PI) / 180))}
            y2={r2(76 + 40 * Math.sin((deg * Math.PI) / 180))}
          />
        ))}
      </g>
      {/* oil droplet feeding the gear */}
      <path
        d="M100 116 C104 123, 108 128, 100 134 C92 128, 96 123, 100 116 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

function GreaseMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* cartridge body */}
      <rect x="86" y="70" width="28" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="86" y1="86" x2="114" y2="86" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="86" y1="102" x2="114" y2="102" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      {/* nozzle */}
      <path
        d="M94 70 L94 58 L100 48 L106 58 L106 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* dispensed grease bead */}
      <circle cx="100" cy="40" r="6" className="fill-amber-500" />
      <circle cx="112" cy="36" r="3" className="fill-amber-500" opacity="0.55" />
    </svg>
  );
}

function TransformerMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* laminated core */}
      <rect x="94" y="46" width="12" height="60" fill="none" stroke="currentColor" strokeWidth="1.6" />
      {[52, 60, 68, 76, 84, 92, 100].map((y) => (
        <line key={y} x1="94" y1={y} x2="106" y2={y} stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      ))}
      {/* primary winding */}
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="78" cy="56" r="9" />
        <circle cx="78" cy="70" r="9" />
        <circle cx="78" cy="84" r="9" />
        <circle cx="78" cy="98" r="9" />
      </g>
      {/* secondary winding */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.6">
        <circle cx="122" cy="56" r="9" />
        <circle cx="122" cy="70" r="9" />
        <circle cx="122" cy="84" r="9" />
        <circle cx="122" cy="98" r="9" />
      </g>
      {/* insulating oil droplet */}
      <path
        d="M100 118 C104 125, 108 130, 100 136 C92 130, 96 125, 100 118 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

function BendingMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* bent tube outline */}
      <path
        d="M52 112 C52 72, 80 52, 120 52 L150 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M52 100 C52 70, 78 64, 120 64 L150 64"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* bend reference marks */}
      <path d="M60 110 L60 98 M150 46 L150 70" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
      {/* oil droplet at the bend */}
      <path
        d="M78 78 C82 85, 86 90, 78 96 C70 90, 74 85, 78 78 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

function VacuumMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* gauge dial */}
      <circle cx="100" cy="76" r="30" fill="none" stroke="currentColor" strokeWidth="1.8" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240].map((deg) => (
        <line
          key={deg}
          x1={r2(100 + 24 * Math.cos((deg * Math.PI) / 180))}
          y1={r2(76 + 24 * Math.sin((deg * Math.PI) / 180))}
          x2={r2(100 + 30 * Math.cos((deg * Math.PI) / 180))}
          y2={r2(76 + 30 * Math.sin((deg * Math.PI) / 180))}
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />
      ))}
      {/* needle */}
      <line x1="100" y1="76" x2="118" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="76" r="3.5" fill="currentColor" />
      {/* droplet */}
      <path
        d="M100 118 C104 125, 108 130, 100 136 C92 130, 96 125, 100 118 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

function RustMark() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="80" r="58" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      {/* shield */}
      <path
        d="M100 34 L134 46 V80 C134 104, 118 120, 100 128 C82 120, 66 104, 66 80 V46 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* protective film droplet */}
      <path
        d="M100 68 C107 78, 113 86, 100 98 C87 86, 93 78, 100 68 Z"
        className="fill-amber-500"
      />
    </svg>
  );
}

const MARKS: Record<ArtVariant, () => React.ReactNode> = {
  cutting: CuttingMark,
  punching: PunchingMark,
  hydraulic: HydraulicMark,
  gear: GearMark,
  grease: GreaseMark,
  transformer: TransformerMark,
  bending: BendingMark,
  vacuum: VacuumMark,
  rust: RustMark,
};

/** Bare line-art glyph only, in currentColor — for small inline use (category icons, etc). */
export function ProductMark({ variant, className }: { variant: ArtVariant; className?: string }) {
  const Mark = MARKS[variant];
  return (
    <div className={className}>
      <Mark />
    </div>
  );
}

export function ProductArt({
  variant,
  className,
  label,
}: {
  variant: ArtVariant;
  className?: string;
  label?: string;
}) {
  const Mark = MARKS[variant];
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-900 text-steel-300",
        className
      )}
    >
      <div className="absolute inset-0 bg-blueprint-dark opacity-70" />
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl"
        style={{ background: "radial-gradient(circle, #E0A343 0%, transparent 70%)" }}
      />
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="h-full w-full max-w-[220px] text-steel-200">
          <Mark />
        </div>
      </div>
      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span className="font-mono text-[10px] tracking-widest2 text-steel-400">
          {CODES[variant]}—{String(1).padStart(2, "0")}
        </span>
      </div>
      {label && (
        <div className="absolute bottom-3 right-3">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-amber-400/80">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
