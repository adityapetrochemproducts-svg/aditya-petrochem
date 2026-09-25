"use client";

import { useEnquiryModal } from "@/components/enquiry/EnquiryModalProvider";

export function CTASection({
  title = "Need pricing for your requirement?",
  description = "Tell us your product, quantity and application — our team will get back to you with pricing and availability.",
  productName,
}: {
  title?: string;
  description?: string;
  productName?: string;
}) {
  const { openEnquiry } = useEnquiryModal();

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20">
      <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #E0A343 0%, transparent 70%)" }}
      />
      <div className="container-content relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-steel-300">{description}</p>
        <button type="button" onClick={() => openEnquiry(productName)} className="btn-primary mt-2">
          Know Your Price
        </button>
      </div>
    </section>
  );
}
