interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  eyebrow?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className={`mb-4 text-sm font-bold uppercase tracking-[0.2em] ${
          light ? "text-[var(--color-accent-light)]" : "text-[var(--color-text-muted)]"
        }`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-[var(--color-text-body)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[var(--color-text-muted)]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
