interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20 ${className}`}
    >
      {children}
    </Component>
  );
}
