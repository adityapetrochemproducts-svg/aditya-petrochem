"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { productCategories } from "@/data/site";
import { ProductGrid } from "./ProductGrid";
import { cn } from "@/lib/utils";

export function ProductCatalogue({
  products,
  initialCategory = "All",
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    return result;
  }, [products, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-steel-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterButton active={activeCategory === "All"} onClick={() => setActiveCategory("All")}>
            All Products
          </FilterButton>
          {productCategories.map((cat) => (
            <FilterButton
              key={cat.name}
              active={activeCategory === cat.name}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name}
            </FilterButton>
          ))}
        </div>

        <div className="relative w-full shrink-0 lg:w-72">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-steel-400"
            aria-hidden="true"
          >
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full border border-steel-300 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 placeholder:text-steel-400 transition-colors focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
          />
        </div>
      </div>

      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-steel-500">
        {filtered.length} product{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border px-4 py-2 text-[13px] font-medium tracking-wide transition-colors",
        active
          ? "border-navy-900 bg-navy-900 text-white"
          : "border-steel-300 text-steel-600 hover:border-navy-700 hover:text-navy-900"
      )}
    >
      {children}
    </button>
  );
}
