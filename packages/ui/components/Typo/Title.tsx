import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const globalClasses: string[] = [""];

const form = cva(globalClasses, {
  variants: {
    size: {
      small: ["text-16 md:text-18"],
      medium: ["text-xl"],
      big: ["text-35 sm:text-40 md:text-50 lg:text-60"],
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
