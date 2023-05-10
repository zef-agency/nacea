/**
 * layout-header controller
 */

import { factories } from "@strapi/strapi";

import { ButtonConfig, reorderComponentKeys } from "../../../utils/populate";

export default factories.createCoreController(
  "api::layout-footer.layout-footer",
  () => ({
    async find() {
      const res = await strapi.entityService.findMany(
        "api::layout-footer.layout-footer",
        {
          populate: {
            logo: true,
            links: ButtonConfig.populate,
            socials: ButtonConfig.populate,
          },
          fields: ["id", "signature"],
        }
      );

      reorderComponentKeys(res, {
        socials: ButtonConfig,
        links: ButtonConfig,
      });

      return res;
    },
  })
);
