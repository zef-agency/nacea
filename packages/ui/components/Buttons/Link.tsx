import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ButtonType } from "utils";

const globalClasses: string[] = [
  "text-black",
  "flex",
  "flex-row",
  "items-center",
  "hover:underline",
];

const link = cva(globalClasses, {
  variants: {
    size: {
      medium: ["text-14"],
      base: ["text-16"],
    },
    weight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      bold: ["font-bold"],
    },
    family: {
      montserrat: ["Montserrat"],
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "normal",
    family: "montserrat",
  },
});

export function Links({
  className,
  color,
  href,
  icon,
  size,
  weight,
  children,
  ...props
}: ButtonProps) {
  return (
    <p
      {...props}
      style={{ color: color }}
      className={link({ size, weight, className })}
    >
      {icon && <span className="z-10 text-24 p-1 font-bold"> {icon} </span>}
      <Link href={href}>{children}</Link>
    </p>
  );
}

interface ButtonProps extends PropsWithChildren<any> {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ClassValue;
  size?: "medium" | "base";
  family?: "monserrat";
  color: ButtonType["color"];
  href: string;
}

Links.defaultProps = {
  icon: false,
  className: "",
};
