/**
 * page-contact controller
 */

import { factories } from "@strapi/strapi";

import { getAllSections, getPage } from "../../../utils/functions";

export default factories.createCoreController(
  "api::page-contact.page-contact",
  () => ({
    async find() {
      const entries = await getPage("api::page-contact.page-contact");
      const sections = await getAllSections(entries);

      return {
        seo: entries.seo,
        header: entries.header,
        footer: entries.footer,
        hero: entries.hero,
        sections,
      };
    },
  })
);
