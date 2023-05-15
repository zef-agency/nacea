/**
 * layout-header controller
 */

import { factories } from "@strapi/strapi";

import {
  ButtonConfig,
  ImageConfig,
  reorderComponentKeys,
} from "../../../utils/populate";

export default factories.createCoreController(
  "api::layout-header.layout-header",
  () => ({
    async find() {
      const res = await strapi.entityService.findMany(
        "api::layout-header.layout-header",
        {
          populate: {
            logo: ImageConfig.populate,
            links: ButtonConfig.populate,
            button: ButtonConfig.populate,
            telephone: ButtonConfig.populate,
          },
          fields: ["id"],
        }
      );

      reorderComponentKeys(res, {
        button: ButtonConfig,
        links: ButtonConfig,
        telephone: ButtonConfig,
        logo: ImageConfig,
      });

      return res;
    },
  })
);
