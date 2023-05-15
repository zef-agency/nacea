import {
  deleteProps,
  SectionBannerConfig,
  SectionCarouselConfig,
  SectionContactConfig,
  SectionDevisConfig,
  SectionEventConfig,
  SectionRelanceConfig,
  SectionSlideConfig,
  SectionType,
} from "../populate";

async function getSection(
  config: { populate: {}; api: string; reorder: Function },
  id: number
) {
  let res = await strapi.entityService.findOne(config.api, id, config.populate);

  if (!res) {
    return null;
  }

  res = config.reorder(res);
  deleteProps(res, ["slug", "publishedAt", "createdAt", "updatedAt"]);

  return res;
}

export function getAllSections(entries: { sections: any[] }) {
  return Promise.all(
    entries.sections.map(async (section: SectionType) => {
      if (!section.section) return null;

      const sectionName = section.section.section.name;
      const sectionId = section.section.id;

      switch (sectionName) {
        // SECTION RELANCE
        case SectionRelanceConfig.name:
          return getSection(SectionRelanceConfig, sectionId);
        // SECTION CAROUSSEL
        case SectionCarouselConfig.name:
          return getSection(SectionCarouselConfig, sectionId);
        // SECTION DEVIS
        case SectionDevisConfig.name:
          return getSection(SectionDevisConfig, sectionId);
        // SECTION BANNER
        case SectionBannerConfig.name:
          return getSection(SectionBannerConfig, sectionId);
        // SECTION EVENT
        case SectionEventConfig.name:
          return getSection(SectionEventConfig, sectionId);
        // SECTION CONTACT
        case SectionContactConfig.name:
          return getSection(SectionContactConfig, sectionId);
        // SECTION SLIDE
        case SectionSlideConfig.name:
          return getSection(SectionSlideConfig, sectionId);
        default:
          break;
      }
    })
  );
}
