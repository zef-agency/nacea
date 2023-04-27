import React from "react";
import { getUrl, HeroSectionType } from "utils";

import { Button, Image, Text, Title } from "../components";

interface HeroSectionProps {
  data: HeroSectionType;
}

export function HeroSection({ data }: HeroSectionProps) {
  const { button, title, description, image } = data;

  return (
    <div className="my-6">
      <Title> {title} </Title>
      <Text> {description} </Text>
      <div className="w-full max-w-[120px]">
        <Image alt="image" src={getUrl(image.url)} />
      </div>
      {button && (
        <Button color={button?.color} href={button?.link}>
          {button?.label}
        </Button>
      )}
    </div>
  );
}
