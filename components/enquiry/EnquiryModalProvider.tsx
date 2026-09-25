"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

interface EnquiryModalContextValue {
  openEnquiry: (productName?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>(undefined);

  const openEnquiry = useCallback((productName?: string) => {
    setProduct(productName);
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => ({ openEnquiry, closeEnquiry }), [openEnquiry, closeEnquiry]);

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} initialProduct={product} />
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return ctx;
}
