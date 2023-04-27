import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { InputType } from "types";

import { Text } from "../Typo/Text";
import { Title } from "../Typo/Title";

const globalClasses: string[] = [
  "block",
  "peer",
  "w-full",
  "rounded-md",
  "border-gray-300",
  "shadow-sm",
  "focus:outline-none",
  "sm:text-sm",
  "text-black",
  "placeholder:text-grey",
  "focus:ring-2",
  "focus:ring-border-blue-200",
];

const inputClass = cva(globalClasses, {
  variants: {
    variations: {
      input: ["bg-gray-300 dark:bg-gray-800"],
      textarea: ["bg-red-300"],
    },
    size: {
      small: ["py-1", "px-2"],
      medium: ["py-3", "px-4"],
      iconOnly: ["p-1.5"],
    },
  },
  defaultVariants: {
    variations: "input",
    size: "medium",
  },
});

export function Input(
  props: InputProps &
    InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  const {
    input,
    HTMLtag = "input",
    className,
    variations,
    size,
    icon,
    ...rest
  } = props;
  const Component = HTMLtag as any;

  return (
    <div className="relative">
      <Title> {input.label} </Title>
      <Component
        {...rest}
        name={input.error.text}
        placeholder={input.placeholder}
        className={inputClass({ variations, size, className })}
      />

      <Text color={input.error?.color}> ee </Text>

      <span className="absolute flex items-center justify-center text-base text-gray-500 h-full peer-focus:text-gray-800 top-0 left-3">
        {icon}
      </span>
    </div>
  );
}

export interface InputProps {
  input: InputType;
  HTMLtag?: "input" | "textarea";
  className?: ClassValue;
  variations?: "input" | "textarea";
  size?: "small" | "medium" | "iconOnly";
  icon?: any;
}
