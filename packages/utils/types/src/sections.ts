import {
  AlertType,
  ButtonType,
  ImageType,
  InputType,
  TagType,
} from "./components";

export type SectionsType = CardSectionType | HeroSectionType;

export interface FooterType {
  logo: ImageType;
  socials: ButtonType[];
  links: ButtonType[];
}

export interface HeaderType {
  logo: ImageType;
  button: ButtonType;
  links: ButtonType[];
}

export interface SectionType {
  type: string;
}

export interface CardSectionType {
  id: number;
  section: SectionType;
  title: string;
  input: InputType[];
  alert: AlertType;
  button: ButtonType;
}

export interface HeroSectionType {
  id: number;
  section: SectionType;
  title: string;
  description: string;
  image: ImageType;
  button: ButtonType;
  attributes: (TagType | ButtonType)[];
}
