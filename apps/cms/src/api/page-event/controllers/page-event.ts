/**
 * page-event controller
 */

import { factories } from "@strapi/strapi";

import { getAllSections, getPage } from "../../../utils/functions";
import { HeroEventConfig } from "../../../utils/populate";

export default factories.createCoreController(
  "api::page-event.page-event",
  () => ({
    async find() {
      const entries = await getPage(
        "api::page-event.page-event",
        HeroEventConfig
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
