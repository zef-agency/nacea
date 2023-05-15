import React from "react";
import { HeroMainSectionType } from "utils";

interface HeroMainProps {
  data: HeroMainSectionType;
}

export function HeroMain({ data }: HeroMainProps) {
  const { title, subtitle, button, image } = data;

  console.log(data);

  return <div>HeroMain</div>;
}
