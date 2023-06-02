import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const globalClasses: string[] = [""];

const form = cva(globalClasses, {
  variants: {
    size: {
      Xsmall: ["text-14 md:text-16 font-Montserrat"],
      small: ["text-16 font-Montserrat"],
      regular: ["text-18", "sm:text-20", "md:text-22", "font-BlackMango"],
      medium: ["text-22", "sm:text-24", "md:text-28", "font-BlackMango"],
      semiBig: ["text-24 sm:text-30 md:text-35 font-BlackMango"],
      big: ["text-35 sm:text-40 md:text-60 font-BlackMango"],
    },
    weight: {
      light: ["font-light"],
      normal: ["font-normal"],
      medium: ["font-medium"],
      sb: ["font-semibold"],
      bold: ["font-bold"],
      extrabold: ["font-extrabold"],
    },
    color: {
      white: ["text-white"],
      red: ["text-red"],
    },
  },
  defaultVariants: {
    size: "small",
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
    <Component
      className={` ${form({
        size,
        className,
        weight,
        color,
      })}`}
    >
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
