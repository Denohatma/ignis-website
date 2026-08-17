interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Card({ children, className = "", dark = false }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] p-8 transition-all duration-500 lg:p-10 ${
        dark
          ? "bg-white/[0.06] text-white backdrop-blur-xl border border-white/10"
          : "glass-card glossy-shine"
      } ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
