import { InputType } from "../../types";

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

export function getInitialValues(inputs: InputType[]) {
  return inputs.reduce((acc: any, { name }) => {
    acc[name] = "";
    return acc;
  }, {});
}
