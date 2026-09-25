import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { whyChooseUs, industries, productCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aditya Petrochem supplies industrial oils and lubricants for manufacturing, engineering and OEM applications.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Aditya Petrochem"
        title="An Industrial Supply Partner, Not Just a Vendor"
        description="We supply cutting oils, punching oils, hydraulic oils, gear oils and greases to manufacturing and engineering businesses that depend on consistent, reliable inputs."
      />

      <section className="py-20">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-900">
              About the Company
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-steel-600">
              <p>
                Aditya Petrochem supplies industrial oils and lubricants used in metal
                cutting, punching, hydraulic systems and general machinery maintenance.
                We work with manufacturing units, tool rooms and OEM production lines
                that need dependable products delivered on schedule.
              </p>
              <p>
                Our focus stays narrow and practical: a core range of industrial oils,
                supplied consistently, backed by people who understand how these products
                are actually used on a shop floor.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-900">
              Our Mission
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-steel-600">
              <p>
                To be a dependable supply partner for industrial oils — giving
                manufacturing businesses one less variable to worry about in their
                production process.
              </p>
              <p>
                We aim to keep quality consistent, communication direct, and supply
                reliable, so customers can plan their operations around us with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white py-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="What We Supply"
            title="Our Products"
            description="A focused range of industrial oils covering common metalworking and lubrication needs."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 text-sm leading-relaxed text-steel-600 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((cat) => (
              <ProductPill key={cat.name} name={cat.name} description={cat.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="Where We're Used"
            title="Our Industries"
            description="Our products support a range of industrial and engineering environments."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind.name}
                className="border border-steel-300 px-4 py-2 text-sm font-medium text-navy-800"
              >
                {ind.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel-200 bg-paper py-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="Why Customers Choose Us"
            title="What Working With Us Looks Like"
          />
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <FeatureCard key={item.title} index={i + 1} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel-200 py-20">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Quality</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
              Our Quality Commitment
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-steel-600">
              We aim to keep every batch consistent with the one before it, so the oil
              performing well on your line today performs the same way next month.
              Product formulations and documentation are kept current as our range
              develops.
            </p>
          </div>
          <div>
            <p className="eyebrow">Capability</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
              Supply Capability
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-steel-600">
              We supply in standard can and drum quantities, with bulk order quantities
              available on request. Reach out with your expected volume and delivery
              schedule and our team will confirm lead times.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ProductPill({ name, description }: { name: string; description: string }) {
  return (
    <div className="border border-steel-200 p-5">
      <p className="font-display text-base font-semibold text-navy-900">{name}</p>
      <p className="mt-1.5 text-sm text-steel-600">{description}</p>
    </div>
  );
}
