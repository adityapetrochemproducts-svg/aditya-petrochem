import type { ProductPackagingOption } from "@/types/product";

export function PackagingSection({ packaging }: { packaging: ProductPackagingOption[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {packaging.map((pack) => (
        <div key={pack.size} className="border border-steel-200 bg-white p-5">
          <div className="flex h-9 w-9 items-center justify-center border border-steel-300 text-navy-700">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <path d="M2 6.5H14" stroke="currentColor" strokeWidth="1.3" />
              <path d="M6 3V1.5H10V3" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
          <p className="mt-3 font-display text-base font-semibold text-navy-900">{pack.size}</p>
          {pack.note && <p className="mt-1 text-xs text-steel-500">{pack.note}</p>}
        </div>
      ))}
    </div>
  );
}
