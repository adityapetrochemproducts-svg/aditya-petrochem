import Link from "next/link";
import { navLinks, siteConfig, productCategories } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-700/40 bg-navy-950 text-steel-300">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8 text-amber-400" />
              <span className="font-display text-lg font-semibold text-white">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
              {siteConfig.description}
            </p>
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-9 w-9 items-center justify-center border border-steel-700/60 text-steel-300 transition-colors hover:border-amber-500 hover:text-amber-400"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.24h4.5V23H.24V8.24zM8.24 8.24h4.31v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.94c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.67V23h-4.5V8.24z" />
                </svg>
              </a>
            )}
          </div>

          <div>
            <p className="eyebrow-light">Navigate</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-300 transition-colors hover:text-amber-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Products</p>
            <ul className="mt-4 space-y-3">
              {productCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat.slugFilter)}`}
                    className="text-sm text-steel-300 transition-colors hover:text-amber-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-steel-300">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-amber-400">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="font-mono transition-colors hover:text-amber-400">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="leading-relaxed text-steel-400">
                {siteConfig.address.line1}, {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                <br />
                {siteConfig.address.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy-700/40 pt-6 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Industrial oils &amp; lubricants for OEM and manufacturing applications.</p>
        </div>
      </div>
    </footer>
  );
}
