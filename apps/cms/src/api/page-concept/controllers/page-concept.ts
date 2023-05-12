/**
 * page-concept controller
 */

import { factories } from "@strapi/strapi";

import { getAllSections, getPage } from "../../../utils/functions";
import { HeroConceptConfig } from "../../../utils/populate";

export default factories.createCoreController(
  "api::page-concept.page-concept",
  () => ({
    async find() {
      const entries = await getPage(
        "api::page-concept.page-concept",
        HeroConceptConfig
      );
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
