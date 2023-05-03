import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { Form, Formik } from "formik";
import { attributesType, FormType, getInitialValues } from "utils";
import * as Yup from "yup";

import { Button } from "../Buttons/Button";
import { Input } from "./Input";

const globalClasses: string[] = [];

const formClass = cva(globalClasses, {
  variants: {
    variations: {
      full: ["w-full"],
      row: ["flex flex-row gap-4 items-center"],
      column: ["flex flex-col gap-4 items-start"],
    },
  },
  defaultVariants: {
    variations: "row",
  },
});

export function CustomForm(props: FormProps) {
  const { form, callback, className, variations, errors } = props;

  return (
    <Formik
      initialValues={getInitialValues(form.attributes)}
      validationSchema={Yup.object().shape(errors(form.attributes))}
      onSubmit={(values) => {
        callback(values);
      }}
    >
      {() => (
        <Form className={formClass({ variations, className })}>
          {form.attributes?.map((attribute: attributesType, k: number) => (
            <Input key={k} attribute={attribute} />
          ))}
          <Button submit color={form.button?.color}>
            {form.button?.label}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

CustomForm.defaultProps = {
  variations: "",
  className: "",
};

interface FormProps {
  form: FormType;
  errors: any;
  callback: Function;
  className?: ClassValue;
  variations?: "full" | "row" | "column";
}
