import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.5rem]",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-steel-300" : "text-steel-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
