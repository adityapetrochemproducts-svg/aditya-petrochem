import { industries } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
      <div className="container-content relative">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Supporting Applications Across Manufacturing"
          description="Our products are used across a range of industrial and engineering environments."
          light
        />

        <div className="mt-14 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="flex items-start gap-4 border-b border-r-0 border-white/10 py-6 pr-6 sm:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="mt-1 font-mono text-xs text-amber-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-white">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-400">{ind.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
