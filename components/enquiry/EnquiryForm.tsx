"use client";

import { useState, FormEvent } from "react";
import { getAllProducts } from "@/data/products";

type FieldErrors = Partial<Record<"name" | "phone" | "company" | "email" | "message", string>>;

type Status = "idle" | "submitting" | "success" | "error";

const phonePattern = /^[+]?[\d\s()-]{7,20}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm({
  initialProduct,
  onSuccess,
  compact = false,
}: {
  initialProduct?: string;
  onSuccess?: () => void;
  compact?: boolean;
}) {
  const products = getAllProducts();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  function validate(formData: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!phonePattern.test(phone) || phone.replace(/\D/g, "").length < 7) {
      next.phone = "Please enter a valid phone number.";
    }
    if (company.length < 2) next.company = "Please enter your company name.";
    if (!emailPattern.test(email)) next.email = "Please enter a valid email address.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    setServerMessage(null);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      product: String(formData.get("product") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      company_website: String(formData.get("company_website") || ""),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setServerMessage(
          data?.message || "We couldn't submit your enquiry. Please try again."
        );
        return;
      }

      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
      setServerMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 py-6" role="status">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10.5L8 14.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold text-navy-900">
          Thank you for your enquiry.
        </h3>
        <p className="text-sm leading-relaxed text-steel-600">
          Our team will contact you shortly with pricing and availability details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from sighted users, left open for bots */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass(!!errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Company Name" htmlFor="company" error={errors.company} required>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company"
            className={inputClass(!!errors.company)}
            aria-invalid={!!errors.company}
          />
        </Field>

        <Field label="Email Address" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field label="Interested Product" htmlFor="product">
        <select
          id="product"
          name="product"
          defaultValue={initialProduct || ""}
          className={inputClass(false)}
        >
          <option value="">General Enquiry</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Requirement / Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your quantity, grade or application requirement..."
          className={inputClass(false)}
        />
      </Field>

      {status === "error" && serverMessage && (
        <p role="alert" className="border-l-2 border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>

      <p className="text-xs leading-relaxed text-steel-500">
        By submitting, you agree to be contacted by our sales team regarding this enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
        {label}
        {required && <span className="ml-0.5 text-amber-600">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full border bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-steel-400",
    "transition-colors focus:outline-none focus:ring-1",
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500"
      : "border-steel-300 focus:border-navy-700 focus:ring-navy-700",
  ].join(" ");
}
