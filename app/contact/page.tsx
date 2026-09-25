import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aditya Petrochem for industrial oil and lubricant pricing, availability and technical queries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}, ${siteConfig.address.country}`
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Talk to Our Team"
        description="For pricing, technical queries or bulk order requirements, reach out directly or submit an enquiry below."
      />

      <section className="py-20">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            <div>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
                {siteConfig.name}
              </h2>
              <ul className="mt-6 space-y-6">
                <ContactRow
                  label="Phone"
                  value={siteConfig.phone}
                  href={`tel:${siteConfig.phoneHref}`}
                  icon={<PhoneIcon />}
                />
                <ContactRow
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                  icon={<MailIcon />}
                />
                <ContactRow
                  label="Address"
                  value={`${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}, ${siteConfig.address.country}`}
                  icon={<PinIcon />}
                />
              </ul>
            </div>

            <div className="border-t border-steel-200 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">
                Business Hours
              </p>
              <ul className="mt-4 space-y-2">
                {siteConfig.businessHours.map((h) => (
                  <li key={h.days} className="flex items-center justify-between text-sm text-navy-800">
                    <span className="text-steel-600">{h.days}</span>
                    <span className="font-medium">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-steel-200 pt-8">
              <div className="aspect-[4/3] w-full overflow-hidden border border-steel-200 grayscale transition-all hover:grayscale-0">
                <iframe
                  title={`${siteConfig.name} location map`}
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="border border-steel-200 bg-white p-7 sm:p-10">
            <p className="eyebrow">Send an Enquiry</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
              Request Pricing or Information
            </h2>
            <p className="mt-2 text-sm text-steel-600">
              Fill in your details and requirement — our team typically responds within
              one business day.
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-steel-300 text-navy-700">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">{label}</p>
        <p className="mt-1 text-sm text-navy-900">{value}</p>
      </div>
    </div>
  );

  return <li>{href ? <a href={href} className="block transition-opacity hover:opacity-70">{content}</a> : content}</li>;
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 2h2.5l1.2 3.2-1.5 1.3a9 9 0 004.3 4.3l1.3-1.5L14 10.5V13a1 1 0 01-1.1 1C7 13.6 2.4 9 2 3.1A1 1 0 013 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14.5S13 9.8 13 6.3A5 5 0 003 6.3C3 9.8 8 14.5 8 14.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.3" r="1.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
