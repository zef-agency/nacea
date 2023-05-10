/* import {
  AlertType,
  ButtonType,
  CheckedType,
  ImageType,
  InputType,
  SectionType,
  SelectType,
  TagType,
} from "utils"; */

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

// -----------------------------------------
// --------------- SECTIONS ----------------
// -----------------------------------------

// HERO
export const HeroMainConfig = {
  name: "hero",
  populate: {
    fields: ["title", "description"],
    populate: {
      images: true,
    },
  },
  reorder: (res: any): any => ({
    title: res.title,
    description: res.description,
    images: res.images.map((image: OriginalImageType) =>
      ImageConfig.reorder(image)
    ),
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
  reorder: (res: OriginalButtonType): any => ({
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
  reorder: (res: OriginalTagType): any => ({
    label: res.label,
    color: res.color ? ColorConfig.reorder(res.color) : null,
  }),
};

// IMAGE
export const ImageConfig = {
  name: "image",
  populate: true,
  reorder: (res: OriginalImageType): any => ({
    url: res.url,
    format: {
      small: res.formats.small?.url,
      medium: res.formats.medium?.url,
      thumbnail: res.formats.thumbnail?.url,
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

// Event
export const EventConfig = {
  name: "event",
  populate: {
    fields: ["label", "description", "intro"],
    populate: {
      image: true,
    },
  },
  reorder: (res: any): any => ({
    label: res.label,
    description: res.description,
    intro: res.intro,
    image: ImageConfig.reorder(res.image),
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

// Card
export const CardConfig = {
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

  reorder: (res: OriginalAlertType): any => ({
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

  reorder: (res: OriginalInputType): any => ({
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

  reorder: (res: OriginalSelectType): any => ({
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

  reorder: (res: OriginalCheckedType): any => ({
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
    fields: ["errors"],

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
    button: res.button ? ButtonConfig.reorder(res.button) : null,
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
  formats: {
    small: { url: string };
    medium: { url: string };
    thumbnail: { url: string };
  };
}
