import React from "react";
import { BannerSectionType } from "utils";

interface BannerSectionProps {
  data: BannerSectionType;
}

export function BannerSection({ data }: BannerSectionProps) {
  const { title, subtitle, imageLeft, image, backgroundColor, button } = data;

  console.log(data);

  return <div>BannerSection</div>;
}
