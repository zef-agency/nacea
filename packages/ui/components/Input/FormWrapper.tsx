import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { Form, Formik } from "formik";
import { attributesType, FormType, getInitialValues, yupify } from "utils";
import * as Yup from "yup";

import { Arrow } from "../../svg";
import { Button } from "../Buttons/Button";
import { Input } from "./Input";

const globalClasses: string[] = [];

const formClass = cva(globalClasses, {
  variants: {
    variations: {
      row: ["flex flex-row gap-4 items-center"],
      column: ["flex flex-col gap-4 items-start"],
      devis: [
        "flex flex-col sm:grid-cols-2 md:grid-cols-3 sm:grid sm:items-stretch sm:justify-items-start gap-4 items-start w-full",
      ],
    },
  },
  defaultVariants: {
    variations: "devis",
  },
});

export function CustomForm(props: FormProps) {
  const { form, callback, className, variations } = props;

  return (
    <Formik
      initialValues={getInitialValues(form.attributes)}
      validationSchema={Yup.object().shape(yupify(JSON.stringify(form.errors)))}
      onSubmit={(values) => {
        callback(values);
      }}
    >
      {() => (
        <Form className={formClass({ variations, className })}>
          {form.attributes?.map((attribute: attributesType, k: number) => (
            <Input key={k} attribute={attribute} />
          ))}
          <Button icon={<Arrow />} submit color={form.button?.color}>
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
  callback: Function;
  className?: ClassValue;
  variations?: "devis" | "row" | "column";
}
