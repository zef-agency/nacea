import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { ButtonType } from "utils";

const globalClasses: string[] = [
  "rounded-br-xs",
  "rounded-tl-xs",
  "flex",
  "items-center",
  "justify-center",
  "text-white",
  "leading-normal",
  "w-fit",
  "h-fit",
];

const button = cva(globalClasses, {
  variants: {
    size: {
      small: ["text-14", "py-2", "px-3", "w-full"],
      medium: ["text-14", "py-3", "px-6"],
      iconOnly: ["p-1.5"],
    },
    family: {
      montserrat: ["Montserrat"],
    },
  },
  defaultVariants: {
    size: "medium",
    family: "montserrat",
  },
});

export function Button({
  className,
  color,
  icon,
  submit,
  href,
  size,
  children,
  ...props
}: ButtonProps) {
  const router = useRouter();

  return (
    <button
      {...props}
      onClick={() => !submit && router.push(href ? href : router.asPath)}
      style={{ backgroundColor: color }}
      className={button({ size, className })}
      type={submit ? "submit" : "button"}
    >
      {children}
      {icon && <span className="z-10 text-24 font-bold"> {icon} </span>}
    </button>
  );
}

Button.defaultProps = {
  icon: false,
  className: "",
  submit: false,
};

interface ButtonProps extends PropsWithChildren<any> {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className?: ClassValue;
  size?: "small";
  color: ButtonType["color"];
  href?: ButtonType["link"];
  submit?: boolean;
}
