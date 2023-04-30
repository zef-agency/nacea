import {
  AlertConfig,
  ButtonConfig,
  ColorConfig,
  InputConfig,
  SectionConfig,
  deleteProps,
  ImageConfig,
  TagConfig,
  FormConfig,
  reorderComponentKeys,
} from "../populate";

export function getAllSections(entries: { sections: any[] }) {
  return Promise.all(
    entries.sections.map(
      async (section: { sectionType: { name: string }; slug: string }) => {
        const { sectionType, slug } = section;

        if (!sectionType) return null;

        switch (sectionType.name) {
          case sectionType.name:
            let [res] = await strapi.entityService.findMany(
              `api::${sectionType.name}.${sectionType.name}`,
              {
                filters: {
                  slug,
                },
                populate: {
                  section: SectionConfig.populate,
                  button: ButtonConfig.populate,
                  alert: AlertConfig.populate,
                  form: FormConfig.populate,
                  image: ImageConfig.populate,
                  attributes: {
                    on: {
                      "assets.tag": TagConfig.populate,
                      "assets.button": ButtonConfig.populate,
                    },
                  },
                },
              }
            );

            if (!res) {
              return null;
            }

            reorderComponentKeys(res, {
              button: ButtonConfig,
              alert: AlertConfig,
              section: SectionConfig,
              image: ImageConfig,
              form: FormConfig,
              attributes: [TagConfig, ButtonConfig],
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
