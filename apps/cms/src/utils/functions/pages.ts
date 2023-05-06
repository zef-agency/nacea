import { reorderComponentKeys } from "../populate";

export async function getPage(api, heroConfig) {
  const res = await strapi.entityService.findMany(api, {
    populate: {
      seo: true,
      hero: heroConfig.populate,
      sections: {
        populate: {
          sectionType: { fields: ["name"] },
        },
      },
    },
    fields: ["id", "header", "footer"],
  });

  reorderComponentKeys(res, {
    hero: heroConfig,
  });

  return res;
}
