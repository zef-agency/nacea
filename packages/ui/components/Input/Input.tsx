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
  props: InputProps & InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>
) {
  const { attribute, className, variations, size, icon } = props;

  return (
    <div className="relative">
      <Title> {attribute.label} </Title>
      {/* Input TEXT, EMAIL, PASSWORD */}
      {["text", "email", "password"].includes(attribute.type) && (
        <Field
          autoComplete="true"
          placeholder={(attribute as InputType).placeholder}
          name={attribute.name}
          type={attribute.type}
          className={inputClass({ variations, size, className })}
        />
      )}

      {/* Input SELECT */}
      {attribute.type === "select" && (
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
      )}

      {attribute.type === "checkbox" && (
        <label>
          <Field
            type="checkbox"
            name={attribute.name}
            //defaultChecked={(attribute as CheckedType).defaultChecked}
          />
        </label>
      )}
      <ErrorMessage name={attribute.name} component="div" />
      <span className="absolute flex items-center justify-center text-base text-gray-500 h-full peer-focus:text-gray-800 top-0 left-3">
        {icon}
      </span>
    </div>
  );
}

export interface InputProps {
  attribute: attributesType;
  className?: ClassValue;
  variations?: "input" | "textarea";
  size?: "small" | "medium" | "iconOnly";
  icon?: any;
}
