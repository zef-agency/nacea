import {
  AlertType,
  BannerSectionType,
  ButtonType,
  CarousselSectionType,
  CheckedType,
  ContactSectionType,
  DevisSectionType,
  EventSectionType,
  ImageType,
  InputType,
  InstagramSectionType,
  RelanceSectionType,
  SelectType,
  SlideSectionType,
  TagType,
} from "utils";

const reorderDynamicZone = (propValue, config) => {
  const res = propValue.map((item, i) => {
    const matchingConfig = config.find((c) => item.__component.match(c.name));

    if (matchingConfig) {
      return (propValue[i] = matchingConfig.reorder(item));
    } else {
      return null;
    }
  });

  return res;
};

export const reorderComponentKeys = (
  res: Record<string, any>,
  entries: Record<string, any>
) => {
  Object.entries(entries).forEach(([prop, config]) => {
    const propValue = res[prop];

    if (!propValue) {
      return;
    }

    if (Array.isArray(propValue)) {
      if (Array.isArray(config)) {
        // ------------- DYNAMICS ZONES -------------
        reorderDynamicZone(propValue, config);
      } else {
        // ------------- REPEATABLE COMPONENTS -------------
        res[prop] = res[prop].map((item: any) => {
          return config.reorder(item);
        });
      }
    } else {
      // ------------- SIMPLE COMPONENTS -------------
      res[prop] = config.reorder(res[prop]);
    }
  });

  return res;
};

export function deleteProps(obj: any, props: string[]) {
  for (const prop of props) {
    delete obj[prop];
  }
}

// -------------------------------------------
// --------------- COMPONENTS ----------------
// -------------------------------------------

// BUTTON
export const ButtonConfig = {
  name: "button",
  populate: {
    fields: ["label", "link", "newWindow"],
    populate: {
      color: { fields: ["code"] },
    },
  },
  reorder: (res: OriginalButtonType): ButtonType => ({
    label: res.label,
    link: res.link,
    newWindow: res.newWindow,
    color: res.color ? ColorConfig.reorder(res.color) : null,
  }),
};

// TAG
export const TagConfig = {
  name: "tag",
  populate: {
    fields: ["label"],
    populate: {
      color: { fields: ["code"] },
    },
  },
  reorder: (res: OriginalTagType): TagType => ({
    label: res.label,
    color: res.color ? ColorConfig.reorder(res.color) : null,
  }),
};

// IMAGE
export const ImageConfig = {
  name: "image",
  populate: true,
  reorder: (res: OriginalImageType): ImageType => ({
    url: res ? res.url : null,
    alt: res ? res.name : null,
    format: {
      small: res ? res.formats?.small?.url : null,
      medium: res ? res.formats?.medium?.url : null,
      thumbnail: res ? res.formats?.thumbnail?.url : null,
    },
  }),
};

// Color
export const ColorConfig = {
  name: "color",
  populate: {
    color: { fields: ["code"] },
  },
  reorder: (res: OriginalColorType): string => res.code,
};

// Definition
export const DefinitionConfig = {
  name: "tag",
  populate: {
    fields: ["label"],
    populate: {
      backgroundColor: ColorConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    label: res.label,
    backgroundColor: res.backgroundColor
      ? ColorConfig.reorder(res.backgroundColor)
      : null,
  }),
};

// Event
export const EventConfig = {
  name: "event",
  populate: {
    fields: ["label", "description", "intro"],
    populate: {
      image: ImageConfig.populate,
      button: ButtonConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    label: res.label,
    description: res.description,
    intro: res.intro,
    image: ImageConfig.reorder(res.image),
    button: ButtonConfig.reorder(res.button),
  }),
};

// EventName
export const EventNameConfig = {
  name: "event",
  populate: {
    fields: ["label"],
  },
  reorder: (res: any): any => ({
    label: res.label,
  }),
};

// Product
export const ProductConfig = {
  name: "product",
  populate: {
    fields: ["label", "intro"],
    populate: {
      image: true,
    },
  },
  reorder: (res: any): any => ({
    label: res.label,
    intro: res.intro,
    image: ImageConfig.reorder(res.image),
  }),
};

// Item
export const ItemConfig = {
  name: "card",
  populate: {
    populate: {
      events: EventConfig.populate,
      products: ProductConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    events: res.events
      ? res.events.map((event: any) => EventConfig.reorder(event))
      : null,
    products: res.products
      ? res.products.map((product: any) => ProductConfig.reorder(product))
      : null,
  }),
};
// Card
export const CardConfig = {
  name: "card",
  populate: {
    field: ["title", "description"],
    populate: {
      icon: ImageConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    title: res.title,
    description: res.description,
    icon: ImageConfig.reorder(res.icon),
  }),
};

// ALERT
export const AlertConfig = {
  name: "alert",
  populate: {
    fields: ["id"],
    populate: {
      message: {
        fields: ["text"],
        populate: {
          color: { fields: ["code"] },
        },
      },
    },
  },

  reorder: (res: OriginalAlertType): AlertType => ({
    text: res.message ? res.message.text : null,
    color: res.message ? ColorConfig.reorder(res.message.color) : null,
  }),
};

// INPUT
export const InputConfig = {
  name: "input",
  populate: {
    fields: ["label", "placeholder", "type", "name"],
    populate: {
      options: {
        fields: ["label"],
      },
    },
  },

  reorder: (res: OriginalInputType): InputType => ({
    label: res.label,
    placeholder: res.placeholder,
    name: res.name,
    type: res.type,
  }),
};

// SELECT
export const SelectConfig = {
  name: "select",
  populate: {
    fields: ["label", "name"],
    populate: {
      options: {
        fields: ["label"],
      },
    },
  },

  reorder: (res: OriginalSelectType): SelectType => ({
    label: res.label,
    name: res.name,
    type: "select",
    options: res.options.map((option: OriginalOptionType) => option.label),
  }),
};

// SELECT
export const CheckboxConfig = {
  name: "checkbox",
  populate: {
    fields: ["label", "defaultChecked", "name"],
  },

  reorder: (res: OriginalCheckedType): CheckedType => ({
    label: res.label,
    type: "checkbox",
    name: res.name,
    defaultChecked: res.defaultChecked,
  }),
};
// FORM
export const FormConfig = {
  name: "form",
  populate: {
    fields: ["errors", "title"],

    populate: {
      attributes: {
        on: {
          "assets.input": InputConfig.populate,
          "assets.select": SelectConfig.populate,
          "assets.checkbox": CheckboxConfig.populate,
        },
      },

      button: ButtonConfig.populate,
    },
  },

  reorder: (res: OriginalFormType) => ({
    attributes: res.attributes
      ? reorderDynamicZone(res.attributes, [
          InputConfig,
          SelectConfig,
          CheckboxConfig,
        ])
      : null,
    errors: res.errors,
    title: res.title,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
  }),
};

// -----------------------------------------
// --------------- SECTIONS ----------------
// -----------------------------------------

// HERO
export const HeroMainConfig = {
  name: "hero",
  populate: {
    fields: ["title", "subtitle"],
    populate: {
      image: ImageConfig.populate,
      button: ButtonConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    title: res.title,
    subtitle: res.subtitle,
    image: ImageConfig.reorder(res.image),
    button: ButtonConfig.reorder(res.button),
    section: { type: "hero-main" },
  }),
};
// HERO
export const HeroEventConfig = {
  name: "hero",
  populate: {
    fields: ["title", "subtitle"],
    populate: {
      image: ImageConfig.populate,
      form: FormConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    title: res.title,
    subtitle: res.subtitle,
    image: ImageConfig.reorder(res.image),
    form: FormConfig.reorder(res.form),
    section: { type: "hero-event" },
  }),
};

// HERO
export const HeroConceptConfig = {
  name: "hero",
  populate: {
    fields: ["title", "subtitle"],
    populate: {
      images: ImageConfig.populate,
      cards: CardConfig.populate,
      definition: DefinitionConfig.populate,
    },
  },
  reorder: (res: any): any => ({
    title: res.title,
    subtitle: res.subtitle,
    images: res.images.map((image) => ImageConfig.reorder(image)),
    cards: res.cards.map((card) => CardConfig.reorder(card)),
    section: { type: "hero-concept" },
    definition: DefinitionConfig.reorder(res.definition),
  }),
};

// SECTION
export const SectionConfig = {
  name: "section",
  populate: { fields: ["name"] },
  reorder: (res: { name: string }): any => ({
    type: res.name,
  }),
};

// SECTION RELANCE
export const SectionRelanceConfig = {
  name: "section-relance",
  api: "api::section-relance.section-relance",
  populate: {
    fields: ["title", "subtitle"],
    populate: {
      backgroundColor: ColorConfig.populate,
      button: ButtonConfig.populate,
      section: SectionConfig.populate,
    },
  },
  reorder: (res: any): RelanceSectionType => ({
    id: res.id,
    title: res.title,
    subtitle: res.subtitle,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
    section: res.section ? SectionConfig.reorder(res.section) : null,
    backgroundColor: res.backgroundColor
      ? ColorConfig.reorder(res.backgroundColor)
      : null,
  }),
};

// SECTION CARROUSSEL
export const SectionCarouselConfig = {
  name: "section-caroussel",
  api: "api::section-caroussel.section-caroussel",
  populate: {
    fields: ["title", "subtitle", "id"],
    populate: {
      button: ButtonConfig.populate,
      section: SectionConfig.populate,
      attributes: {
        on: {
          "assets.card-event": ItemConfig.populate,
          "assets.card-product": ItemConfig.populate,
        },
      },
    },
  },
  reorder: (res: any): CarousselSectionType => ({
    id: res.id,
    title: res.title,
    subtitle: res.subtitle,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
    section: res.section ? SectionConfig.reorder(res.section) : null,
    attributes: res.attributes
      ? reorderDynamicZone(res.attributes, [ItemConfig])
      : null,
  }),
};
// SECTION DEVIS
export const SectionDevisConfig = {
  name: "section-devis",
  api: "api::section-devis.section-devis",
  populate: {
    fields: ["title", "subtitle", "id", "imageLeft"],
    populate: {
      section: SectionConfig.populate,
      backgroundColor: ColorConfig.populate,
      image: ImageConfig.populate,
      form: FormConfig.populate,
    },
  },
  reorder: (res: any): DevisSectionType => ({
    id: res.id,
    title: res.title,
    subtitle: res.subtitle,
    imageLeft: res.imageLeft,
    form: FormConfig.reorder(res.form),
    image: ImageConfig.reorder(res.image),
    section: res.section ? SectionConfig.reorder(res.section) : null,
    backgroundColor: res.backgroundColor
      ? ColorConfig.reorder(res.backgroundColor)
      : null,
  }),
};

// SECTION DEVIS
export const SectionContactConfig = {
  name: "section-contact",
  api: "api::section-contact.section-contact",
  populate: {
    fields: ["title", "subtitle", "id"],
    populate: {
      section: SectionConfig.populate,
      backgroundColor: ColorConfig.populate,
      image: ImageConfig.populate,
      form: FormConfig.populate,
    },
  },
  reorder: (res: any): ContactSectionType => ({
    id: res.id,
    title: res.title,
    subtitle: res.subtitle,
    form: FormConfig.reorder(res.form),
    image: ImageConfig.reorder(res.image),
    section: res.section ? SectionConfig.reorder(res.section) : null,
    backgroundColor: res.backgroundColor
      ? ColorConfig.reorder(res.backgroundColor)
      : null,
  }),
};

// SECTION BANNER
export const SectionBannerConfig = {
  name: "section-banner",
  api: "api::section-banner.section-banner",
  populate: {
    fields: ["title", "subtitle", "id", "imageLeft"],
    populate: {
      button: ButtonConfig.populate,
      section: SectionConfig.populate,
      backgroundColor: ColorConfig.populate,
      image: ImageConfig.populate,
    },
  },
  reorder: (res: any): BannerSectionType => ({
    id: res.id,
    title: res.title,
    subtitle: res.subtitle,
    imageLeft: res.imageLeft,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
    image: ImageConfig.reorder(res.image),
    section: res.section ? SectionConfig.reorder(res.section) : null,
    backgroundColor: res.backgroundColor
      ? ColorConfig.reorder(res.backgroundColor)
      : null,
  }),
};
// SECTION EVENT
export const SectionEventConfig = {
  name: "section-event",
  api: "api::section-event.section-event",
  populate: {
    fields: ["id", "imageLeft"],
    populate: {
      button: ButtonConfig.populate,
      section: SectionConfig.populate,
      event: EventConfig.populate,
    },
  },
  reorder: (res: any): EventSectionType => ({
    id: res.id,
    imageLeft: res.imageLeft,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
    section: res.section ? SectionConfig.reorder(res.section) : null,
    event: res.event ? EventConfig.reorder(res.event) : null,
  }),
};
// SECTION SLIDE
export const SectionSlideConfig = {
  name: "section-slide",
  api: "api::section-slide.section-slide",
  populate: {
    fields: ["id"],
    populate: {
      backgroundColor: ColorConfig.populate,
      section: SectionConfig.populate,
      events: EventNameConfig.populate,
    },
  },
  reorder: (res: any): SlideSectionType => ({
    id: res.id,
    section: res.section ? SectionConfig.reorder(res.section) : null,
    events: res.events
      ? res.events.map((event: any) => EventNameConfig.reorder(event))
      : null,
    backgroundColor: res.backgroundColor
      ? ColorConfig.reorder(res.backgroundColor)
      : null,
  }),
};
// SECTION INSTAGRAM
export const SectionInstagramConfig = {
  name: "section-instagram",
  api: "api::section-instagram.section-instagram",
  populate: {
    fields: ["id", "title", "subtitle"],
    populate: {
      section: SectionConfig.populate,
      button: ButtonConfig.populate,
    },
  },
  reorder: (res: any): InstagramSectionType => ({
    id: res.id,
    section: res.section ? SectionConfig.reorder(res.section) : null,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
    title: res.title,
    subtitle: res.subtitle,
  }),
};

// ---------------------------------------------
// --------------- OriginalType ----------------
// ---------------------------------------------

interface OriginalInputType {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  options?: any;
}

interface OriginalSelectType {
  label: string;
  name: string;
  options?: OriginalOptionType[];
}

interface OriginalOptionType {
  label: string;
}
interface OriginalCheckedType {
  label: string;
  name: string;
  defaultChecked: boolean;
}

interface OriginalFormType {
  button: OriginalButtonType;
  attributes: any;
  errors: any;
  title: string;
}

interface OriginalButtonType {
  link: string;
  color: OriginalColorType;
  label: string;
  newWindow: boolean;
}

interface OriginalTagType {
  label: string;
  color: OriginalColorType;
}

interface OriginalColorType {
  code: string;
}

interface OriginalAlertType {
  message: {
    text: string;
    color: OriginalColorType;
  };
}

interface OriginalImageType {
  url: string;
  name: string;
  formats: {
    small: { url: string };
    medium: { url: string };
    thumbnail: { url: string };
  };
}

export interface SectionType {
  section: { slug: string; id: number; section: { name: string } };
}
