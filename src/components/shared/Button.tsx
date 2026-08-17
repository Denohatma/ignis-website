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
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] hover:shadow-md active:scale-[0.98]",
  "primary-dark":
    "bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary-deep)] hover:shadow-md active:scale-[0.98]",
  secondary:
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.98]",
  accent:
    "bg-[var(--color-accent)] text-white hover:bg-[#c96f00] hover:shadow-md active:scale-[0.98]",
  ghost:
    "border border-[var(--color-primary-hover)] text-[var(--color-primary-hover)] hover:bg-[var(--color-bg-tint)] active:scale-[0.98]",
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
    "inline-flex items-center gap-2 rounded-[var(--radius-btn)] px-6 py-3 text-base font-[family-name:var(--font-body)] font-medium transition-all duration-200 min-h-[44px] cursor-pointer";

  const combinedClassName = `group ${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
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
