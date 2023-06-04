import * as Yup from "yup";

import { attributesType } from "../../types";

// a function to capitalize the first letter of any string
export function capitalizeFirstLetter(str: string) {
  if (str === null || str === "") {
    return "";
  }
  let firstLetter = str[0];

  if (firstLetter === firstLetter.toLowerCase()) {
    firstLetter = firstLetter.toUpperCase();
  }
  return firstLetter + str.slice(1);
}

// A function to transform any string into a usefull slug
export function stringToSlug(str: string) {
  const slug = str
    ?.replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return slug;
}

// A function to pluralize any string by array of items length
export function makePlural(string: string, length: number): string {
  if (length > 1) {
    return string + "s";
  } else {
    return string;
  }
}

export function Truncate(str: string, length: number, append = "..."): string {
  if (str.length > length) {
    return str.substring(0, length) + append;
  } else {
    return str;
  }
}

export function checkRegexs(
  regexs: any,
  str: string
): { bool: boolean; mess: string } {
  if (!regexs) return { bool: true, mess: "" };
  for (let i = 0; i < regexs.length; i++) {
    if (!str.match(regexs[i].regex)) {
      return { bool: false, mess: regexs[i].message };
    }
  }
  return { bool: true, mess: "" };
}

export function getInitialValues(inputs: attributesType[]) {
  return inputs.reduce((acc: any, { name, type, ...rest }: attributesType) => {
    if (type === "checkbox" && "defaultChecked" in rest) {
      acc[name] = rest.defaultChecked;
    } else {
      acc[name] = "";
    }
    return acc;
  }, {});
}

export const yupify = (jsonString: string) => {
  const obj: string[] = JSON.parse(jsonString);
  const transformedObj = {};

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const funcString = obj[prop].replace(/Yup\./g, "Yup.");
      const func = new Function("Yup", `return ${funcString};`);

      transformedObj[prop] = func(Yup);
    }
  }
  return transformedObj;
};

export function darkenColor(hex: string, percentage: number) {
  // Convertir la valeur hexadécimale en une valeur décimale
  const rgb = parseInt(hex.slice(1), 16);

  // Extraire les composantes de couleur (rouge, vert, bleu)
  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const blue = rgb & 0xff;

  // Calculer les nouvelles valeurs de composantes assombries
  const darkenedRed = Math.round(red * (1 - percentage / 100));
  const darkenedGreen = Math.round(green * (1 - percentage / 100));
  const darkenedBlue = Math.round(blue * (1 - percentage / 100));

  // Convertir les valeurs de composantes en une valeur hexadécimale
  const darkenedHex =
    "#" +
    ((darkenedRed << 16) | (darkenedGreen << 8) | darkenedBlue)
      .toString(16)
      .padStart(6, "0");

  return darkenedHex;
}
