import {
  CardSectionType,
  getRandom,
  HeroSectionType,
  SectionsType,
} from "utils";

import { CardSection } from "./CardSection";
import { HeroSection } from "./HeroSection";

export function renderSection(section: SectionsType) {
  if (!section || !section.section) {
    return <div key={getRandom(9999)}></div>;
  }
  switch (section.section.type) {
    case "section-card":
      return (
        <CardSection key={getRandom(9999)} data={section as CardSectionType} />
      );
    case "section-hero":
      return (
        <HeroSection key={getRandom(9999)} data={section as HeroSectionType} />
      );
    default:
      break;
  }
  return <div key={getRandom(9999)}></div>;
}
