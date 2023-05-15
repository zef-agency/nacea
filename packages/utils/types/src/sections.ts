import {
  AlertType,
  ButtonType,
  FormType,
  ImageType,
  TagType,
} from "./components";

export type SectionsType =
  | RelanceSectionType
  | DevisSectionType
  | CarousselSectionType
  | BannerSectionType
  | EventSectionType
  | SlideSectionType
  | ContactSectionType
  | HeroMainSectionType;

export interface PageType {
  header?: HeaderType;
  footer?: FooterType;
  sections?: SectionsType[];
  hero?: any;
}

export interface SeoType {
  title: string;
  description: string;
}

export interface FooterType {
  logo: ImageType;
  socials: ButtonType[];
  links: ButtonType[];
  signature: string;
  title: string;
  subtitle: string;
}

export interface HeaderType {
  logo: ImageType;
  telephone: ButtonType;
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
  alert: AlertType;
  button: ButtonType;
  form: FormType;
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

export interface RelanceSectionType {
  id: number;
  section: SectionType;
  title: string;
  subtitle: string;
  backgroundColor: string;
  button: ButtonType;
}
export interface CarousselSectionType {
  id: number;
  section: SectionType;
  title: string;
  subtitle: string;
  button: ButtonType;
  attributes?: any;
}
export interface DevisSectionType {
  id: number;
  section: SectionType;
  title: string;
  subtitle: string;
  form: FormType;
  imageLeft: boolean;
  image: ImageType;
  backgroundColor: string;
}
export interface ContactSectionType {
  id: number;
  section: SectionType;
  title: string;
  subtitle: string;
  form: FormType;
  image: ImageType;
  backgroundColor: string;
}
export interface SlideSectionType {
  id: number;
  section: SectionType;
  events: any;
  backgroundColor: string;
}
export interface BannerSectionType {
  id: number;
  section: SectionType;
  title: string;
  subtitle: string;
  imageLeft: boolean;
  image: ImageType;
  backgroundColor: string;
  button: ButtonType;
}
export interface EventSectionType {
  id: number;
  section: SectionType;
  imageLeft: boolean;
  button: ButtonType;
  event: any;
}
export interface HeroMainSectionType {
  id: number;
  section: SectionType;
  title: string;
  subtitle: string;
  button: ButtonType;
  image: ImageType;
}
