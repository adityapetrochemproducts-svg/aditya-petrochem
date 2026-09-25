import type { Product } from "@/types/product";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductGrid } from "./ProductGrid";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-steel-200 bg-paper py-20">
      <div className="container-content">
        <SectionHeader eyebrow="Related Products" title="You May Also Need" />
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
