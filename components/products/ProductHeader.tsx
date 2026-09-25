import Link from "next/link";
import type { Product } from "@/types/product";
import { ProductArt } from "@/components/ui/ProductArt";
import { KnowPriceButton } from "./KnowPriceButton";

export function ProductHeader({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="absolute inset-0 bg-blueprint-dark opacity-60" />
      <div
        className="absolute -right-32 top-0 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #E0A343 0%, transparent 70%)" }}
      />

      <div className="container-content relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-steel-400">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-400">Products</Link>
          <span>/</span>
          <span className="text-steel-300">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow-light">{product.category}</p>
            <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-steel-300 sm:text-lg">
              {product.shortDescription}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <KnowPriceButton productName={product.name} />
              <a href="#specifications" className="btn-outline-light">
                View Specifications
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] w-full">
            <ProductArt variant={product.artVariant} label={product.category} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
