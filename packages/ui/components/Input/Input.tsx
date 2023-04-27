import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { ErrorMessage, Field } from "formik";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { InputType } from "utils";

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
  const { input, className, variations, size, icon } = props;

  return (
    <div className="relative">
      <Title> {input.label} </Title>
      <Field
        placeholder={input.placeholder}
        name={input.name}
        type={input.type}
        className={inputClass({ variations, size, className })}
      />
      <ErrorMessage name={input.name} component="div" />
      <span className="absolute flex items-center justify-center text-base text-gray-500 h-full peer-focus:text-gray-800 top-0 left-3">
        {icon}
      </span>
    </div>
  );
}

export interface InputProps {
  input: InputType;
  className?: ClassValue;
  variations?: "input" | "textarea";
  size?: "small" | "medium" | "iconOnly";
  icon?: any;
}
