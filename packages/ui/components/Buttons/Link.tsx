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
    current: {
      true: ["underline"],
      false: [""],
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "normal",
    family: "montserrat",
    current: false,
  },
});

export function Links({
  className,
  color,
  href,
  icon,
  size,
  current,
  weight,
  children,
  ...props
}: ButtonProps) {
  return (
    <p
      {...props}
      style={{ color: color }}
      className={link({ size, weight, current, className })}
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
  current?: boolean;
  family?: "monserrat";
  color: ButtonType["color"];
  href: string;
}

Links.defaultProps = {
  icon: false,
  className: "",
};
