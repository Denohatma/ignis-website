interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "muted";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary: "bg-[var(--color-primary)] text-white",
    accent: "bg-[var(--color-accent)] text-white",
    muted: "bg-[var(--color-text-muted)] text-white",
  };

  return (
    <span
      className={`inline-block rounded-[var(--radius-btn)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] font-[family-name:var(--font-body)] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
