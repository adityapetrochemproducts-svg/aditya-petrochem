"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { ProductArt } from "@/components/ui/ProductArt";
import { useEnquiryModal } from "@/components/enquiry/EnquiryModalProvider";

export function ProductCard({ product }: { product: Product }) {
  const { openEnquiry } = useEnquiryModal();

  return (
    <article className="group flex flex-col border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-navy-800/20">
      <Link href={`/products/${product.slug}`} className="block aspect-[4/3] overflow-hidden" aria-label={product.name}>
        <ProductArt
          variant={product.artVariant}
          label={product.category}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-amber-600">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">
          <Link href={`/products/${product.slug}`} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
          {product.shortDescription}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="btn-outline w-full !whitespace-normal !px-3 !py-2.5 text-center text-[13px] leading-tight"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={() => openEnquiry(product.name)}
            className="btn-primary w-full !whitespace-normal !px-3 !py-2.5 text-center text-[13px] leading-tight"
          >
            Know Your Price
          </button>
        </div>
      </div>
    </article>
  );
}
