import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { ErrorMessage, Field } from "formik";
import { InputHTMLAttributes } from "react";
import { attributesType, InputType, OptionType, SelectType } from "utils";

import { Title } from "../Typo/Title";

const globalClasses: string[] = [
  "block",
  "peer",
  "w-full",
  "rounded-md",
  "shadow-sm",
  "focus:outline-none",
  "text-14",
  "text-black",
  "placeholder:text-grey",
  "focus:ring-2",
  "focus:ring-border-[#B6B9B3]",
  "border-[#B6B9B3]",
  "border",
  "rounded-xs",
  "bg-[#E3E7E0]",
  "py-3.5",
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
  props: InputProps & InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>
) {
  const { attribute, className, variations, size, icon } = props;

  return (
    <>
      <div className="relative flex flex-col gap-1 w-full items-start">
        {/* Input TEXT, EMAIL, PASSWORD */}
        {["text", "email", "password"].includes(attribute.type) && (
          <div className="relative w-full">
            <Title HTMLtag="h3" size="Xsmall" className="mb-1.5">
              {attribute.label}
            </Title>
            <Field
              autoComplete="true"
              placeholder={(attribute as InputType).placeholder}
              name={attribute.name}
              type={attribute.type}
              className={inputClass({ variations, size, className })}
            />
          </div>
        )}

        {/* Input SELECT */}
        {attribute.type === "select" && (
          <div className="relative w-full">
            <Title HTMLtag="h3" size="Xsmall" className="mb-1.5">
              {attribute.label}
            </Title>
            <Field
              autoComplete="true"
              name={attribute.name}
              as="select"
              className={inputClass({ variations, size, className })}
            >
              {(attribute as SelectType).options?.map(
                (option: OptionType, k: number) => (
                  <option key={k} value={option}>
                    {option}
                  </option>
                )
              )}
            </Field>
          </div>
        )}

        {attribute.type === "checkbox" && (
          <div className="relative  flex flex-row-reverse gap-2 md:mt-8">
            <Title HTMLtag="h3" size="Xsmall" className="mb-2">
              {attribute.label}
            </Title>
            <label>
              <Field type="checkbox" name={attribute.name} />
            </label>
          </div>
        )}
        <ErrorMessage name={attribute.name}>
          {(msg) => <div className="text-14 text-red">{msg}</div>}
        </ErrorMessage>
        <span className="absolute flex items-center justify-center text-base text-gray-500 h-full peer-focus:text-gray-800 top-0 left-3">
          {icon}
        </span>
      </div>
    </>
  );
}

export interface InputProps {
  attribute: attributesType;
  className?: ClassValue;
  variations?: "input" | "textarea";
  size?: "small" | "medium" | "iconOnly";
  icon?: any;
}
