import React from "react";
import { CarousselSectionType } from "utils";

interface CarousselSectionProps {
  data: CarousselSectionType;
}

export function CarousselSection({ data }: CarousselSectionProps) {
  const { title, subtitle, button, attributes } = data;

  return <div>CarousselSection</div>;
}
