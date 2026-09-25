"use client";

import { useEnquiryModal } from "@/components/enquiry/EnquiryModalProvider";
import { cn } from "@/lib/utils";

export function KnowPriceButton({
  productName,
  className,
  variant = "primary",
}: {
  productName: string;
  className?: string;
  variant?: "primary" | "outline-light";
}) {
  const { openEnquiry } = useEnquiryModal();

  return (
    <button
      type="button"
      onClick={() => openEnquiry(productName)}
      className={cn(variant === "primary" ? "btn-primary" : "btn-outline-light", className)}
    >
      Know Your Price
    </button>
  );
}
