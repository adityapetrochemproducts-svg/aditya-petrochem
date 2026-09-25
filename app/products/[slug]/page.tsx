import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductHeader } from "@/components/products/ProductHeader";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { SpecTable } from "@/components/products/SpecTable";
import { PackagingSection } from "@/components/products/PackagingSection";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { CheckList } from "@/components/ui/CheckList";
import { CTASection } from "@/components/ui/CTASection";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.category}`,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — ${product.category}`,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <ProductHeader product={product} />

      <section className="py-20">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="min-w-0 space-y-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Product Description
              </h2>
              <div className="mt-4 space-y-4">
                {product.description.map((para, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-steel-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Applications
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-steel-500">
                Where and how this product is typically used.
              </p>
              <div className="mt-6">
                <CheckList items={product.applications} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Features &amp; Benefits
              </h2>
              <div className="mt-6">
                <CheckList items={product.features} />
              </div>
            </div>

            <div id="specifications" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Technical Specifications
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-steel-500">
                Figures marked as placeholder will be updated with verified lab data.
              </p>
              <div className="mt-6">
                <SpecTable specifications={product.specifications} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Packaging &amp; Availability
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-steel-500">
                Available in the following standard pack sizes. Custom quantities can be
                discussed for bulk orders.
              </p>
              <div className="mt-6">
                <PackagingSection packaging={product.packaging} />
              </div>
            </div>
          </div>

          <ProductSidebar product={product} />
        </div>
      </section>

      <RelatedProducts products={related} />

      <CTASection
        title={`Need pricing for ${product.name}?`}
        description="Share your quantity and delivery location — our team will respond with a formal quotation."
        productName={product.name}
      />
    </>
  );
}
