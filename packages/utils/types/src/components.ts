export interface ImageType {
  url: string;
  format: {
    small: string;
    medium: string;
    thumbnail: string;
  };
}

export interface ButtonType {
  link: string;
  color: string;
  label: string;
  newWindow: boolean;
}

export interface TagType {
  label: string;
  color: string;
}

export interface AlertType {
  text: string;
  color: string;
}

export type OptionType = string;

export type attributesType = SelectType | InputType | CheckedType;

export interface InputType {
  label: string;
  placeholder: string;
  name: string;
  type: string;
}
export interface SelectType {
  label: string;
  name: string;
  type: string;
  options: OptionType[];
}

export interface CheckedType {
  label: string;
  defaultChecked: boolean;
  type: string;
  name: string;
}

export interface FormType {
  errors: {};
  attributes: attributesType[];
  button: ButtonType;
}

export interface ErrorType {
  text: string;
  color: string;
  regexs?: {
    label: string;
    regex: string;
  }[];
}
