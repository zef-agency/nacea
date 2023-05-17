import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const globalClasses: string[] = [""];

const form = cva(globalClasses, {
  variants: {
    size: {
      Xsmall: ["text-14 md:text-16"],
      small: ["text-16"],
      regular: ["text-18", "sm:text-20", "md:text-22"],
      medium: ["text-22", "sm:text-24", "md:text-28"],
      semiBig: ["text-24", "sm:text-30", "md:text-35"],
      big: ["text-35 sm:text-40 md:text-60"],
    },
    weight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      sb: ["font-semibold"],
      bold: ["font-bold"],
    },
    color: {
      white: ["text-white"],
      black: ["text-black"],
      red: ["text-red"],
    },
  },
  defaultVariants: {
    size: "small",
    color: "black",
  },
});

export function Title({
  HTMLtag = "h1",
  className,
  size,
  color,
  weight,
  children,
}: TitleProps & PropsWithChildren<any>) {
  const Component = HTMLtag as any;

  return (
    <Component className={form({ size, className, weight, color })}>
      {children}
    </Component>
  );
}

interface TitleProps {
  className?: string;
  children?: any;
  HTMLtag?: any;
  size?: string;
  weight?: string;
  color?: string;
  family?: string;
}
