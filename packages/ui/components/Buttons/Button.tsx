import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { ButtonType } from "types";

const globalClasses: string[] = [
  "rounded-md",
  "flex",
  "items-center",
  "justify-center",
  "text-white",
  "w-fit",
];

const button = cva(globalClasses, {
  variants: {
    size: {
      small: ["text-xs", "py-1", "px-2"],
      medium: ["text-sm", "py-1.5", "px-3"],
      iconOnly: ["p-1.5"],
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export function Button({
  className,
  color,
  icon,
  href,
  size,
  children,
  ...props
}: ButtonProps) {
  const router = useRouter();

  return (
    <button
      {...props}
      onClick={() => router.push(href ? href : router.asPath)}
      style={{ backgroundColor: color }}
      className={button({ size, className })}
    >
      {children}
      {<span className="z-10 text-24 font-bold"> {icon} </span>}
    </button>
  );
}

Button.defaultProps = {
  icon: false,
  className: "",
};

interface ButtonProps extends PropsWithChildren<any> {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ClassValue;
  size?: "small";
  color: ButtonType["color"];
  href?: ButtonType["link"];
}
