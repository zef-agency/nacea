import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const globalClasses: string[] = [];

const form = cva(globalClasses, {
  variants: {
    size: {
      smallest: ["text-14"],
      small: ["text-15"],
      base: ["text-14 md:text-16"],
      medium: ["text-17"],
      large: ["text-18"],
      largest: ["text-20"],
      30: ["text-30"],
    },
    weight: {
      normal: ["font-normal"],
      sb: ["font-bold"],
      bold: ["font-ApercuBold"],
      lightItalic: ["font-ApercuLightItalic"],
      regular: ["font-ApercuRegular"],
      medium: ["font-ApercuMedium"],
      light: ["font-ApercuLight"],
    },
    variations: {
      normal: ["text-black"],
      link: ["text-black", "hover:underline", "cursor-pointer"],
      white: ["text-white"],
    },
  },
  defaultVariants: {
    size: "small",
    weight: "normal",
    variations: "normal",
  },
});

export function Text({
  className,
  variations,
  color,
  size,
  weight,
  children,
  ...props
}: TitleProps) {
  return (
    <p
      {...props}
      style={{ color: color }}
      className={form({ size, className, weight, variations })}
    >
      {children}
    </p>
  );
}

interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren<any> {
  className?: string;
  children?: any;
  color?: string;
  size?: "smallest" | "small" | "base" | "medium" | "large" | "largest" | 30;
  weight?:
    | "normal"
    | "sb"
    | "bold"
    | "lightItalic"
    | "regular"
    | "medium"
    | "light";
  variations?: "normal" | "link" | "white";
}
