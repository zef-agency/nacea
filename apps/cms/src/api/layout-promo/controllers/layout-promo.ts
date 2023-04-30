/**
 * layout-header controller
 */

import { factories } from "@strapi/strapi";
import { ColorConfig, reorderComponentKeys } from "../../../utils/populate";

export default factories.createCoreController(
  "api::layout-promo.layout-promo",
  () => ({
    async find() {
      const res = await strapi.entityService.findMany(
        "api::layout-promo.layout-promo",
        {
          populate: {
            color: ColorConfig.populate,
          },
          fields: ["text"],
        }
      );

      reorderComponentKeys(res, {
        color: ColorConfig,
      });

      return res;
    },
  })
);
