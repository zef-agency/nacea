import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import { Form, Formik } from "formik";
import {
  attributesType,
  FormType,
  resizeGridChild,
  useModal,
  yupify,
} from "utils";
import * as Yup from "yup";

import { Arrow } from "../../svg";
import { Button } from "../Buttons/Button";
import { Input } from "./Input";

const globalClasses: string[] = ["max-w-[600px]"];

const formClass = cva(globalClasses, {
  variants: {
    variations: {
      devis: [
        "flex flex-col sm:grid-cols-2 sm:grid sm:items-stretch sm:justify-items-start gap-4 items-start w-full",
      ],
      contact: ["grid gap-3 grid-cols-1 sm:grid-cols-2x"],
    },
  },
  defaultVariants: {
    variations: "devis",
  },
});

export function CustomForm(props: FormProps) {
  const {
    loading = false,
    reset = false,
    form,
    callback,
    className,
    variations,
  } = props;
  const { modalData } = useModal();

  return (
    <Formik
      initialValues={modalData}
      validationSchema={Yup.object().shape(yupify(JSON.stringify(form.errors)))}
      onSubmit={(values, { resetForm }) => {
        callback(values);
        reset &&
          setTimeout(() => {
            resetForm();
          }, 1000);
      }}
    >
      {() => (
        <Form className={formClass({ variations, className })}>
          {form.attributes &&
            form.attributes.map((attribute: attributesType, k: number) => (
              <Input
                key={k}
                attribute={attribute}
                placement={resizeGridChild(
                  ["message", "email", "boissons"],
                  attribute
                )}
              />
            ))}
          {form.button && (
            <Button
              className="mt-4 entrance_animation_2"
              icon={!loading && <Arrow />}
              submit
              color={form.button?.color}
            >
              {loading ? "Envoi en cours ..." : form.button?.label}
            </Button>
          )}
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
  loading?: boolean;
  reset?: boolean;
  variations?: "devis" | "contact";
}
