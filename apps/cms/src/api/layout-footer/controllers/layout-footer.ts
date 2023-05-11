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
  "api::layout-footer.layout-footer",
  () => ({
    async find() {
      const res = await strapi.entityService.findMany(
        "api::layout-footer.layout-footer",
        {
          populate: {
            logo: ImageConfig.populate,
            socials: ButtonConfig.populate,
            links: ButtonConfig.populate,
          },
          fields: ["id", "signature", "title", "subtitle"],
        }
      );

      reorderComponentKeys(res, {
        socials: ButtonConfig,
        links: ButtonConfig,
        logo: ImageConfig,
      });

      return res;
    },
  })
);
