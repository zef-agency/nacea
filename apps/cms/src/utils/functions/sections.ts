import {
  AlertConfig,
  ButtonConfig,
  ColorConfig,
  deleteProps,
  EventConfig,
  EventNameConfig,
  FormConfig,
  ImageConfig,
  ItemConfig,
  reorderComponentKeys,
  SectionConfig,
} from "../populate";

export function getAllSections(entries: { sections: any[] }) {
  return Promise.all(
    entries.sections.map(
      async (section: {
        section: { slug: string; section: { name: string } };
      }) => {
        if (!section.section) return null;

        switch (section.section.section.name) {
          case section.section.section.name:
            const [res] = await strapi.entityService.findMany(
              `api::${section.section.section.name}.${section.section.section.name}`,
              {
                filters: {
                  slug: section.section.slug,
                },
                populate: {
                  event: EventConfig.populate,
                  events: EventNameConfig.populate,
                  backgroundColor: ColorConfig.populate,
                  section: SectionConfig.populate,
                  button: ButtonConfig.populate,
                  alert: AlertConfig.populate,
                  form: FormConfig.populate,
                  image: ImageConfig.populate,
                  attributes: {
                    on: {
                      "assets.card-event": ItemConfig.populate,
                      "assets.card-product": ItemConfig.populate,
                    },
                  },
                },
              }
            );

            if (!res) {
              return null;
            }

            reorderComponentKeys(res, {
              event: EventConfig,
              events: EventNameConfig,
              button: ButtonConfig,
              alert: AlertConfig,
              section: SectionConfig,
              image: ImageConfig,
              form: FormConfig,
              backgroundColor: ColorConfig,
              attributes: [ItemConfig],
            });

            deleteProps(res, ["slug", "publishedAt", "createdAt", "updatedAt"]);

            return res;
          default:
            break;
        }
      }
    )
  );
}
