/**
 * page-home service
 */

import { factories } from "@strapi/strapi";

import { getPage } from "../../../utils/functions";
import { HeroMainConfig } from "../../../utils/populate";

export default factories.createCoreService("api::page-home.page-home", () => ({
  async findContent() {
    const entries = await getPage("api::page-home.page-home", HeroMainConfig);

    return entries;
  },
}));
