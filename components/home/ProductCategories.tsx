import Link from "next/link";
import { productCategories } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductMark } from "@/components/ui/ProductArt";
import type { ProductArtVariant } from "@/types/product";

const VARIANT_BY_CATEGORY: Record<string, ProductArtVariant> = {
  "Cutting Oil": "cutting",
  "Punching Oil": "punching",
  "Hydraulic Oil": "hydraulic",
  "Gear Oil": "gear",
  "Grease": "grease",
  "Transformer Oil": "transformer",
  "Specialty Oils": "bending",
};

export function ProductCategories() {
  return (
    <section className="border-b border-steel-200 bg-paper py-24">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What We Supply"
            title="Product Categories"
            description="Core product lines covering metalworking, gearbox, electrical and general lubrication needs across an industrial facility."
          />
          <Link href="/products" className="btn-outline shrink-0">
            View All Products
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${encodeURIComponent(cat.slugFilter)}`}
              className="group relative flex flex-col bg-white p-7 transition-colors hover:bg-navy-950"
            >
              <div className="h-16 w-16 text-navy-800 transition-colors group-hover:text-amber-400">
                <ProductMark variant={VARIANT_BY_CATEGORY[cat.name]} className="h-full w-full" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-white">
                {cat.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600 transition-colors group-hover:text-steel-300">
                {cat.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-600 transition-colors group-hover:text-amber-400">
                Explore
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
