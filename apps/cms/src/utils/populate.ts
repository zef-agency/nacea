import {
  AlertType,
  ButtonType,
  ImageType,
  InputType,
  SectionType,
  TagType,
} from "utils";

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
        propValue.forEach((item, i) => {
          const matchingConfig = config.find((c) =>
            item.__component.match(c.name)
          );

          if (matchingConfig) {
            propValue[i] = matchingConfig.reorder(item);
          } else {
            return null;
          }
        });
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

// SECTION
export const SectionConfig = {
  name: "section",
  populate: { fields: ["name"] },
  reorder: (res: { name: string }): SectionType => ({
    type: res.name,
  }),
};

// IMAGE
export const ImageConfig = {
  name: "image",
  populate: true,
  reorder: (res: OriginalImageType): ImageType => ({
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
    options:
      res.type === "select"
        ? res.options.map((option: any) => option.label)
        : null,
  }),
};
// FORM
export const FormConfig = {
  name: "form",
  populate: {
    fields: ["errors"],
    populate: {
      inputs: InputConfig.populate,
      button: ButtonConfig.populate,
    },
  },

  reorder: (res: OriginalFormType) => ({
    errors: res.errors,
    inputs: res.inputs
      ? res.inputs.map((input: InputType) => InputConfig.reorder(input))
      : null,
    button: res.button ? ButtonConfig.reorder(res.button) : null,
  }),
};

// ORIGNALS TYPES
interface OriginalInputType {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  options?: any;
}

interface OriginalFormType {
  errors: object;
  inputs: OriginalInputType[];
  button: OriginalButtonType;
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
