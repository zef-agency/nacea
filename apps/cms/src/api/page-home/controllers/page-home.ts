/**
 * page-home controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page-home.page-home",
  () => ({
    async find() {
      const { sections, entries } = await strapi
        .service("api::page-home.page-home")
        .findContent();

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
