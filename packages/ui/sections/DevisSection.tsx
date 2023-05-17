import React from "react";
import { DevisSectionType, getUrl } from "utils";

import { CustomForm, CustomImage, Title, Wrapper } from "../components";

interface DevisSectionProps {
  data: DevisSectionType;
}

export function DevisSection({ data }: DevisSectionProps) {
  const { title, subtitle, form, image, backgroundColor, imageLeft } = data;

  return (
    <div className=" py-8" style={{ backgroundColor }}>
      <Wrapper
        classes={`flex flex-col gap-6 items-center sm:justify-center sm:items-center sm:gap-24 ${
          imageLeft ? "sm:flex-row-reverse" : "sm:flex-row"
        } `}
      >
        <div className="w-[250px] sm:w-[240px] sm:max-w-[300px]">
          <CustomImage
            priority={true}
            alt={image.alt}
            src={getUrl(image.url)}
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[800px]">
          <div className="flex flex-col gap-2">
            <Title size="medium" HTMLtag="h2">
              {title}
            </Title>
            <Title size="small" HTMLtag="h3">
              {subtitle}
            </Title>
          </div>
          {form && (
            <CustomForm
              form={form}
              callback={(result: any) => console.log("result", result)}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
