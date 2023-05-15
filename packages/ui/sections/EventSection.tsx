import React from "react";
import { EventSectionType } from "utils";

interface EventSectionProps {
  data: EventSectionType;
}

export function EventSection({ data }: EventSectionProps) {
  const { imageLeft, event, button } = data;

  return <div>EventSection</div>;
}
