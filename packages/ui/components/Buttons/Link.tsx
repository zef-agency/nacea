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
  "font-Montserrat",
];

const link = cva(globalClasses, {
  variants: {
    size: {
      medium: ["text-14 hover:underline"],
      base: ["text-16"],
    },
    weight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semiBold: ["font-semibold"],
      bold: ["font-bold"],
    },
    current: {
      true: ["underline"],
      false: [""],
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "normal",
    current: false,
  },
});

export function Links({
  className,
  color,
  label = "Link",
  href,
  icon,
  leftIcon = false,
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
      className={`${link({
        size,
        weight,
        current,
        className,
      })} group flex items-center ${
        leftIcon ? "flex-row-reverse items-end justify-end" : ""
      }`}
    >
      {icon && (
        <span
          className={`z-10 text-24 p-1 transition-all font-bold ${
            leftIcon ? "group-hover:px-2" : ""
          } `}
        >
          {icon}
        </span>
      )}
      <Link aria-label={label} href={href}>
        {children}
      </Link>
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
  label?: string;
}

Links.defaultProps = {
  icon: false,
  className: "",
};
