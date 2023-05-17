/**
 * page-concept controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page-concept.page-concept",
  () => ({
    async find() {
      const { sections, entries } = await strapi
        .service("api::page-concept.page-concept")
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
