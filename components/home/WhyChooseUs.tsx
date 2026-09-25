import { whyChooseUs } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function WhyChooseUs() {
  return (
    <section className="border-b border-steel-200 bg-paper py-24">
      <div className="container-content">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built Around What a Production Floor Actually Needs"
          description="Business-focused advantages that matter when oil is a recurring, mission-critical input to your process."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <FeatureCard key={item.title} index={i + 1} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
