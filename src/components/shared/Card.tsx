interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Card({ children, className = "", dark = false }: CardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${
        dark
          ? "bg-[var(--color-primary-dark)] text-white"
          : "bg-white border border-[var(--color-bg-tint)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
