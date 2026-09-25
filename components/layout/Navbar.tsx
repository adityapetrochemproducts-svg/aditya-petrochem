"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { useEnquiryModal } from "@/components/enquiry/EnquiryModalProvider";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiryModal();

  // Close the mobile menu when the route changes, without a setState-in-effect
  // cascade: adjust state directly during render when pathname has moved on.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-paper/95 shadow-[0_1px_0_rgba(15,36,56,0.08)] backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-content flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <Logo className={cn("h-8 w-8 transition-colors", solid ? "text-amber-600" : "text-amber-400")} />
          <span className={cn("font-display text-[17px] font-semibold leading-none transition-colors", solid ? "text-navy-900" : "text-white")}>
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline text-[14px] font-medium tracking-wide transition-colors",
                  solid ? "text-navy-800" : "text-white/90",
                  active && (solid ? "text-navy-900" : "text-white")
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className={cn(
              "hidden font-mono text-[13px] transition-colors md:block",
              solid ? "text-steel-600" : "text-white/80"
            )}
          >
            {siteConfig.phone}
          </a>
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex"
          >
            Know Your Price
          </button>

          <button
            type="button"
            className={cn("flex h-10 w-10 items-center justify-center lg:hidden", solid ? "text-navy-900" : "text-white")}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M2 2L20 20M20 2L2 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M2 5.5H20M2 11H20M2 16.5H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-steel-200 bg-paper lg:hidden">
          <nav className="container-content flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-steel-200 py-4 text-[15px] font-medium text-navy-900 last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="btn-primary mt-5 w-full"
            >
              Know Your Price
            </button>
            <a href={`tel:${siteConfig.phoneHref}`} className="mt-4 text-center font-mono text-sm text-steel-600">
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
