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
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
  "primary-dark":
    "bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary-deep)]",
  secondary:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  accent:
    "bg-[var(--color-accent)] text-white hover:opacity-90",
  ghost:
    "border border-[var(--color-primary-hover)] text-[var(--color-primary-hover)] hover:bg-[var(--color-bg-tint)]",
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
    "inline-flex items-center gap-2 rounded-[var(--radius-btn)] px-6 py-3 text-base font-[family-name:var(--font-body)] font-medium transition-colors duration-200 min-h-[44px]";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">&rarr;</span>}
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
