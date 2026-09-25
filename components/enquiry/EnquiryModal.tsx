"use client";

import { useEffect, useRef } from "react";
import { EnquiryForm } from "./EnquiryForm";

export function EnquiryModal({
  isOpen,
  onClose,
  initialProduct,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const t = setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input, textarea")?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      clearTimeout(t);
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto bg-white shadow-panel animate-fade-up sm:rounded-sm"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-steel-200 bg-white px-6 py-5 sm:px-8">
          <div>
            <p className="eyebrow">Pricing Enquiry</p>
            <h2 id="enquiry-modal-title" className="mt-1 font-display text-xl font-semibold text-navy-900">
              Know Your Price
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="-mr-2 -mt-1 flex h-9 w-9 items-center justify-center text-steel-500 transition-colors hover:text-navy-900"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6 sm:px-8">
          <EnquiryForm initialProduct={initialProduct} onSuccess={() => undefined} />
        </div>
      </div>
    </div>
  );
}
