/**
 * page-event controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page-event.page-event",
  () => ({
    async find() {
      const { sections, entries } = await strapi
        .service("api::page-event.page-event")
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
