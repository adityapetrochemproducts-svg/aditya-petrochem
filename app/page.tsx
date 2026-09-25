import { Hero } from "@/components/home/Hero";
import { ProductCategories } from "@/components/home/ProductCategories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Industries } from "@/components/home/Industries";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CTASection } from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <Industries />
      <FeaturedProducts />
      <CTASection />
    </>
  );
}
