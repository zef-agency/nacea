import { Strapi } from "@strapi/strapi";

export async function CreateType(id, typeId, api) {
  await strapi.entityService.update(api, id, {
    data: {
      type: typeId,
    },
  });
}
