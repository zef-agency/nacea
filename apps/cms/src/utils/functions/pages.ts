export async function getPage(api) {
  return await strapi.entityService.findMany(api, {
    populate: {
      seo: true,
      sections: {
        populate: {
          sectionType: { fields: ["name"] },
        },
      },
    },
    fields: ["id", "header", "footer"],
  });
}
