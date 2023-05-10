import {
  AlertConfig,
  ButtonConfig,
  CardConfig,
  ColorConfig,
  deleteProps,
  EventConfig,
  FormConfig,
  ImageConfig,
  reorderComponentKeys,
  SectionConfig,
} from "../populate";

export function getAllSections(entries: { sections: any[] }) {
  return Promise.all(
    entries.sections.map(
      async (section: {
        section: { slug: string; section: { name: string } };
      }) => {
        if (!section.section.section.name) return null;

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
                  backgroundColor: ColorConfig.populate,
                  section: SectionConfig.populate,
                  button: ButtonConfig.populate,
                  alert: AlertConfig.populate,
                  form: FormConfig.populate,
                  image: ImageConfig.populate,
                  attributes: {
                    on: {
                      "assets.card-event": CardConfig.populate,
                      "assets.card-product": CardConfig.populate,
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
              button: ButtonConfig,
              alert: AlertConfig,
              section: SectionConfig,
              image: ImageConfig,
              form: FormConfig,
              backgroundColor: ColorConfig,
              attributes: [CardConfig],
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
