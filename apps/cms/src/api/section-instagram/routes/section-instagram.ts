/**
 * section-instagram router
 */

import { customRouter } from "../../../utils/functions";

const { createCoreRouter } = require("@strapi/strapi").factories;
const coreRoutes = createCoreRouter("api::section-instagram.section-instagram");
const customRoutes = [
  {
    method: "GET",
    path: "/instagram-posts",
    handler: "section-instagram.findPosts",
  },
];

module.exports = customRouter(coreRoutes, customRoutes);
