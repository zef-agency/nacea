/**
 * page-home controller
 */

import { factories } from "@strapi/strapi";
import { getAllSections, getPage } from "../../../utils/functions";

export default factories.createCoreController(
  "api::page-home.page-home",
  () => ({
    async find() {
      const entries = await getPage("api::page-home.page-home");
      const sections = await getAllSections(entries);

      return {
        seo: entries.seo,
        header: entries.header,
        footer: entries.footer,
        sections,
      };
    },
  })
);
