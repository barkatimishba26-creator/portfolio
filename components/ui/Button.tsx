import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonOwnProps {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

type ButtonProps<T extends ElementType> = ButtonOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | "as">;

/**
 * Polymorphic button — renders as <a> for links/downloads or <button> for actions.
 * Usage: <Button as="a" href="/resume.pdf" download>Download Resume</Button>
 */
export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Component = as || "button";
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <Component className={cn(base, className)} {...rest}>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </Component>
  );
}
