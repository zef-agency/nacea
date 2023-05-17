/**
 * page-home service
 */

import { factories } from "@strapi/strapi";

import { getAllSections, getPage } from "../../../utils/functions";
import { HeroConceptConfig } from "../../../utils/populate";

export default factories.createCoreService(
  "api::page-concept.page-concept",
  () => ({
    async findContent() {
      const entries = await getPage(
        "api::page-concept.page-concept",
        HeroConceptConfig
      );
      const sections = await getAllSections(entries);

      return { entries, sections };
    },
  })
);
