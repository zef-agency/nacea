import React from "react";
import { ContactSectionType, getUrl } from "utils";

import { CustomForm, CustomImage, Title } from "../components";

interface ContactSectionProps {
  data: ContactSectionType;
}

export function ContactSection({ data }: ContactSectionProps) {
  const { title, subtitle, form, image, backgroundColor } = data;

  return (
    <div
      className={`flex flex-col md:flex-row max-w gap-6 md:gap-28 relative md:h-full`}
    >
      <div
        style={{ backgroundColor }}
        className="relative w-full h-[400px] md:h-[600px] md:w-[50%]"
      >
        <div
          className={`absolute top-0 left-[50%] translate-x-[-50%] md:translate-x-[-10%] md:top-[50%] md:translate-y-[-50%] h-full w-[300px] mt-6 md:mt-0 sm:w-[300px] md:w-[400px] sm:h-[400px] md:h-[450px] `}
        >
          <CustomImage
            priority={true}
            alt={image.alt}
            src={getUrl(image.url)}
          />
        </div>
      </div>
      <div className="p-4 sm:py-5 md:py-10  flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex flex-row justify-between gap-4">
            <Title className="text-center" size="big">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </Title>
          </div>
          <Title size="small" HTMLtag="h3">
            <span dangerouslySetInnerHTML={{ __html: subtitle }} />
          </Title>
        </div>
        {form && (
          <CustomForm
            form={form}
            callback={(result: any) => console.log("result", result)}
          />
        )}
      </div>
    </div>
  );
}
