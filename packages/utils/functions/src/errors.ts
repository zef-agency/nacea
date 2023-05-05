import * as Yup from "yup";

import { getItemsInArray } from "./array";

const errors = {
  any: Yup.string(),
  email: Yup.string().min(2, "L'email est trop court").required("required"),
  password: Yup.string().min(2, "Le MDP est trop court").required("required"),
  select: (attributes: any, item: string) =>
    Yup.string()
      ?.required(`Sélectionnez un ${item} dans la liste ci-dessous`)
      ?.oneOf(
        getItemsInArray(attributes),
        `Sélectionnez un ${item} dans la liste ci-dessous`
      ),
};

export const CardErrors = (attributes: any) => {
  console.log(attributes);

  return {
    // email: errors.email,
    dsd: errors.email,
    //password: errors.password,
    /*  evenements:
      attributes.length === 0 ? errors.any : errors.select(attributes, "event"), */
  };
};
