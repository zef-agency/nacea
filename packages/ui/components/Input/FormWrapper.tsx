import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { Form, Formik } from "formik";
import { FormType, getInitialValues, InputType } from "utils";
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
  const { form, callback, className, variations } = props;

  return (
    <Formik
      initialValues={getInitialValues(form.inputs)}
      validationSchema={Yup.object().shape({
        email: Yup.string().min(2, "L'email est trop court"),
        password: Yup.string().min(2, "Le MDP est trop court"),
      })}
      onSubmit={(values) => {
        callback(values);
      }}
    >
      {() => (
        <Form className={formClass({ variations, className })}>
          {form.inputs?.map((input: InputType, k: number) => (
            <Input key={k} input={input} />
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
  callback: Function;
  className?: ClassValue;
  variations?: "full" | "row" | "column";
}
