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

export interface InputType {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  options: string[];
}

export interface FormType {
  errors: {};
  inputs: InputType[];
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
