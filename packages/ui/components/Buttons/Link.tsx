import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ButtonType } from "types";

const globalClasses: string[] = ["text-black"];

const link = cva(globalClasses, {
  variants: {
    size: {
      small: ["text-xs"],
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export function Links({
  className,
  color,
  href,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <p
      {...props}
      style={{ color: color }}
      className={link({ size, className })}
    >
      <Link href={href}>{children}</Link>
    </p>
  );
}

interface ButtonProps extends PropsWithChildren<any> {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ClassValue;
  size?: "small";
  color: ButtonType["color"];
  href: string;
}
