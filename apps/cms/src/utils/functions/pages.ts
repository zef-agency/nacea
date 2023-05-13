import { reorderComponentKeys } from "../populate";

export async function getPage(api, heroConfig?: any) {
  const res = await strapi.entityService.findMany(api, {
    populate: {
      seo: true,
      hero: heroConfig?.populate,
      sections: {
        populate: {
          section: {
            fields: ["slug"],
            populate: {
              section: { fields: ["name"] },
            },
          },
        },
      },
    },
    fields: ["id", "header", "footer"],
  });

  console.log("res", res);

  reorderComponentKeys(res, {
    hero: heroConfig,
  });

  return res;
}
