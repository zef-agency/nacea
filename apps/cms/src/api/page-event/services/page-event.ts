/**
 * page-event service
 */

import { factories } from "@strapi/strapi";

import { getAllSections, getPage } from "../../../utils/functions";
import { HeroEventConfig } from "../../../utils/populate";

export default factories.createCoreService(
  "api::page-event.page-event",
  () => ({
    async findContent() {
      const entries = await getPage(
        "api::page-event.page-event",
        HeroEventConfig
      );
      const sections = await getAllSections(entries);

      return { entries, sections };
    },
  })
);
