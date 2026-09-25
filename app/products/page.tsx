import type { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Industrial Oils & Lubricants Catalogue",
  description:
    "Browse our range of cutting oils, punching oils, hydraulic oils, gear oils, greases and other industrial oils for manufacturing and OEM applications.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const products = getAllProducts();
  const initialCategory = category || "All";

  return (
    <>
      <PageHeader
        eyebrow="Product Catalogue"
        title="Industrial Oils & Lubricants"
        description="Formulated for cutting, punching, hydraulic and general industrial lubrication needs. Filter by category to find the right product for your process."
      />
      <section className="py-20">
        <div className="container-content">
          <ProductCatalogue products={products} initialCategory={initialCategory} />
        </div>
      </section>
      <CTASection title="Can't find what you're looking for?" description="Tell us your application and we'll help you identify the right product." />
    </>
  );
}
