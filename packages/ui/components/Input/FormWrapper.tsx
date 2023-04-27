import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { PropsWithChildren } from "react";

const globalClasses: string[] = [
  "flex",
  "flex-col",
  "gap-5",
  "mt-4",
  "rounded-lg",
  "text-left",
];

const form = cva(globalClasses, {
  variants: {
    variations: {
      small: ["w-[300px]"],
      medium: ["w-[400px]"],
      large: ["w-[500px]"],
      full: ["w-full"],
    },
  },
  defaultVariants: {
    variations: "full",
  },
});

export function FormWrapper({
  className,
  children,
  variations,
}: FormProps & PropsWithChildren<any>) {
  return <div className={form({ variations, className })}>{children}</div>;
}

FormWrapper.defaultProps = {
  variations: "",
  className: "",
};

export interface FormProps {
  className?: ClassValue;
  variations?: "small" | "large" | "medium";
}
