import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="border-b border-steel-200 bg-paper py-24">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Featured Products"
            title="Ready to Specify for Your Line"
            description="A selection of our core products across cutting, punching, hydraulic and general lubrication applications."
          />
          <Link href="/products" className="btn-outline shrink-0">
            View All Products
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
