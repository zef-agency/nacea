import React from "react";
import { DevisSectionType } from "utils";

interface DevisSectionProps {
  data: DevisSectionType;
}

export function DevisSection({ data }: DevisSectionProps) {
  const { title, subtitle, form, image, backgroundColor, imageLeft } = data;

  return <div>DevisSection</div>;
}
