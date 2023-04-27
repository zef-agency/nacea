import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const globalClasses: string[] = [""];

const form = cva(globalClasses, {
  variants: {
    size: {
      small: ["text-lg"],
      medium: ["text-xl"],
      big: ["text-2xl"],
    },
    weight: {
      normal: ["font-normal"],
      sb: ["font-semibold"],
      bold: ["font-bold"],
    },
    color: {
      white: ["text-white"],
      black: ["text-black"],
      red: ["text-red"],
    },
    family: {
      julius: ["font-Julius"],
    },
  },
  defaultVariants: {
    size: "small",
    color: "black",
    family: "julius",
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
