export function FeatureCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative border-t border-steel-300 pt-6 transition-colors hover:border-amber-500">
      <span className="font-mono text-xs text-steel-400 transition-colors group-hover:text-amber-600">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-600">{description}</p>
    </div>
  );
}
