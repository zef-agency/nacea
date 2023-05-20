import React from "react";
import { BannerSectionType, getUrl } from "utils";

import { Button, CustomImage, Title, Wrapper } from "../components";
import { Arrow, Truck } from "../svg";

interface BannerSectionProps {
  data: BannerSectionType;
}

export function BannerSection({ data }: BannerSectionProps) {
  const { title, subtitle, imageLeft, image, backgroundColor, button } = data;

  return (
    <div
      style={{ backgroundColor }}
      className={`flex flex-col max-w  relative ${
        imageLeft ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <Wrapper
        classes={`flex flex-col justify-center gap-6 md:gap-8 py-12 max-w-[850px] ${
          imageLeft ? "sm:mr-12" : "sm:ml-12"
        }`}
      >
        <div className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex flex-row justify-between gap-4">
            <Title size="medium" HTMLtag="h2">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </Title>
            <div className="w-24">
              <Truck />
            </div>
          </div>
          <Title size="small" HTMLtag="h3">
            <span dangerouslySetInnerHTML={{ __html: subtitle }} />
          </Title>
        </div>
        {button && (
          <Button icon={<Arrow />} href={button.link} color={button.color}>
            {button.label}
          </Button>
        )}
      </Wrapper>
      <div className="h-[300px]  sm:w-full sm:max-w-[50%] sm:min-h-[450px]">
        <CustomImage priority={true} alt={image.alt} src={getUrl(image.url)} />
      </div>
    </div>
  );
}
