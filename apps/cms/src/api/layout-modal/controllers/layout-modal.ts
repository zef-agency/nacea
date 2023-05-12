/**
 * layout-modal controller
 */

import { factories } from "@strapi/strapi";

import {
  ButtonConfig,
  FormConfig,
  reorderComponentKeys,
} from "../../../utils/populate";

export default factories.createCoreController(
  "api::layout-modal.layout-modal",
  () => ({
    async find() {
      const res = await strapi.entityService.findMany(
        "api::layout-modal.layout-modal",
        {
          populate: {
            forms: FormConfig.populate,
            button: ButtonConfig.populate,
          },
          fields: ["id", "title"],
        }
      );

      reorderComponentKeys(res, {
        forms: FormConfig,
        button: ButtonConfig,
      });

      return res;
    },
  })
);
