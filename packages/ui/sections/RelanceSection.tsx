import React from "react";
import { RelanceSectionType } from "utils";

interface RelanceSectionProps {
  data: RelanceSectionType;
}

export function RelanceSection({ data }: RelanceSectionProps) {
  const { title, subtitle, backgroundColor, button } = data;

  return <div>RelanceSection</div>;
}
