import {
  BannerSectionType,
  CarousselSectionType,
  ContactSectionType,
  DevisSectionType,
  EventSectionType,
  getRandom,
  HeroConceptSectionType,
  HeroEventSectionType,
  HeroMainSectionType,
  RelanceSectionType,
  SectionsType,
  SlideSectionType,
} from "utils";

import { BannerSection } from "./BannerSection";
import { CarousselSection } from "./CarousselSection";
import { ContactSection } from "./ContactSection";
import { DevisSection } from "./DevisSection";
import { EventSection } from "./EventSection";
import { HeroConceptSection } from "./HeroConceptSection";
import { HeroEventSection } from "./HeroEventSection";
import { HeroMain } from "./HeroMain";
import { MentionsLegalesSection } from "./MentionsLegalesSection";
import { RelanceSection } from "./RelanceSection";
import { Section404 } from "./Section404";
import { SlideSection } from "./SlideSection";

export function renderSection(section: SectionsType) {
  if (!section || !section.section) {
    return <div key={getRandom(9999)}></div>;
  }
  switch (section.section.type) {
    case "section-relance":
      return (
        <RelanceSection
          key={getRandom(9999)}
          data={section as RelanceSectionType}
        />
      );
    case "section-caroussel":
      return (
        <CarousselSection
          key={getRandom(9999)}
          data={section as CarousselSectionType}
        />
      );
    case "section-devis":
      return (
        <DevisSection
          key={getRandom(9999)}
          data={section as DevisSectionType}
        />
      );
    case "section-banner":
      return (
        <BannerSection
          key={getRandom(9999)}
          data={section as BannerSectionType}
        />
      );
    case "section-event":
      return (
        <EventSection
          key={getRandom(9999)}
          data={section as EventSectionType}
        />
      );
    case "section-contact":
      return (
        <ContactSection
          key={getRandom(9999)}
          data={section as ContactSectionType}
        />
      );
    case "section-slide":
      return (
        <SlideSection
          key={getRandom(9999)}
          data={section as SlideSectionType}
        />
      );
    case "hero-main":
      return (
        <HeroMain key={getRandom(9999)} data={section as HeroMainSectionType} />
      );
    case "hero-concept":
      return (
        <HeroConceptSection
          key={getRandom(9999)}
          data={section as HeroConceptSectionType}
        />
      );
    case "hero-event":
      return (
        <HeroEventSection
          key={getRandom(9999)}
          data={section as HeroEventSectionType}
        />
      );
    // STATICS SECTIONS
    case "404":
      return <Section404 key={getRandom(9999)} />;
    case "mentions-legales":
      return <MentionsLegalesSection key={getRandom(9999)} />;
    default:
      break;
  }
  return <div key={getRandom(9999)}></div>;
}
