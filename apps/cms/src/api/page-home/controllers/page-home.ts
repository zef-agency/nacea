/**
 * page-home controller
 */

import { factories } from "@strapi/strapi";

import { getAllSections, getPage } from "../../../utils/functions";
import { HeroMainConfig } from "../../../utils/populate";

export default factories.createCoreController(
  "api::page-home.page-home",
  () => ({
    async find() {
      const entries = await getPage("api::page-home.page-home", HeroMainConfig);
      const sections = await getAllSections(entries);

      const service = await strapi
        .service("api::page-home.page-home")
        .findContent();

      return {
        service,
        seo: entries.seo,
        header: entries.header,
        footer: entries.footer,
        hero: entries.hero,
        sections,
      };
    },
  })
);
