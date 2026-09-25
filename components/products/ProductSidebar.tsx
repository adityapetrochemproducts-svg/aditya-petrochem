import type { Product } from "@/types/product";
import { siteConfig } from "@/data/site";
import { KnowPriceButton } from "./KnowPriceButton";

export function ProductSidebar({ product }: { product: Product }) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="border border-steel-200 bg-white p-7 shadow-card">
        <p className="eyebrow">Pricing &amp; Availability</p>
        <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel-600">
          Pricing depends on order quantity, packaging and delivery location. Submit an
          enquiry and our team will respond with a quotation.
        </p>

        <KnowPriceButton productName={product.name} className="mt-6 w-full" />

        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="mt-3 flex w-full items-center justify-center gap-2 border border-steel-300 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-700"
        >
          Call {siteConfig.phone}
        </a>

        <div className="mt-7 border-t border-steel-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">
            Quick Facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm text-navy-800">
            <li className="flex items-center justify-between">
              <span className="text-steel-500">Category</span>
              <span className="font-medium">{product.category}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-steel-500">Packaging From</span>
              <span className="font-medium">{product.packaging[0]?.size}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-steel-500">Applications</span>
              <span className="font-medium">{product.applications.length}+ listed</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
