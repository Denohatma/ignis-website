interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-[var(--color-text-body)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-[var(--color-text-muted)]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
