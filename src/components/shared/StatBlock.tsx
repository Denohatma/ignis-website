interface StatBlockProps {
  value: string;
  label: string;
  light?: boolean;
}

export function StatBlock({ value, label, light = false }: StatBlockProps) {
  return (
    <div className="text-center">
      <div
        className={`font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl ${
          light ? "text-white" : "text-[var(--color-primary)]"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-2 text-sm ${
          light ? "text-white/70" : "text-[var(--color-text-muted)]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
