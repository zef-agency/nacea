import React from "react";
import { SlideSectionType } from "utils";

interface SlideSectionProps {
  data: SlideSectionType;
}

export function SlideSection({ data }: SlideSectionProps) {
  const { id, events, backgroundColor } = data;

  return <div>SlideSection</div>;
}
