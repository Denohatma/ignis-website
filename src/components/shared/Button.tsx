import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "primary-dark"
  | "secondary"
  | "accent"
  | "ghost";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/25 hover:brightness-110 active:scale-[0.97]",
  "primary-dark":
    "bg-[var(--color-primary-dark)] text-white shadow-md shadow-[var(--color-primary-dark)]/15 hover:shadow-xl hover:shadow-[var(--color-primary-dark)]/25 hover:brightness-110 active:scale-[0.97]",
  secondary:
    "border border-white/25 text-white backdrop-blur-sm bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/40 active:scale-[0.97]",
  accent:
    "bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent)]/15 hover:shadow-xl hover:shadow-[var(--color-accent)]/25 hover:brightness-110 active:scale-[0.97]",
  ghost:
    "border border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/30 active:scale-[0.97]",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  arrow = false,
  href,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2.5 rounded-[var(--radius-btn)] px-7 py-3.5 text-[15px] font-[family-name:var(--font-body)] font-semibold transition-all duration-300 min-h-[48px] cursor-pointer";

  const combinedClassName = `group ${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...rest}>
      {content}
    </button>
  );
}
