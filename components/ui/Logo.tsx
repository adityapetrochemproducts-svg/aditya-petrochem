export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 1.5 L29.5 9 V23 L16 30.5 L2.5 23 V9 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M16 9 C19.5 14, 22 17.2, 22 20.2 C22 23.9, 19.3 26.5, 16 26.5 C12.7 26.5, 10 23.9, 10 20.2 C10 17.2, 12.5 14, 16 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}
