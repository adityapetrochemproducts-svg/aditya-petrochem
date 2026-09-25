export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-36 sm:pb-20 sm:pt-40">
      <div className="absolute inset-0 bg-blueprint-dark opacity-60" />
      <div
        className="absolute -left-32 top-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #E0A343 0%, transparent 70%)" }}
      />
      <div className="container-content relative">
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
