import React from "react";
import { DevisSectionType, getUrl, useModal } from "utils";

import { CustomForm, CustomImage, Title, Wrapper } from "../components";
import { ModalNames } from "../components/Modals/ModalNames";

interface DevisSectionProps {
  data: DevisSectionType;
}

export function DevisSection({ data }: DevisSectionProps) {
  const { title, subtitle, form, image, backgroundColor, imageLeft } = data;
  const { handleModal, modalData } = useModal();

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
              callback={(result: any) =>
                handleModal({
                  isOpen: ModalNames.CONTACT_MODAL,
                  modalData: {
                    ...modalData,
                    event: result.event,
                    invite: result.invite,
                  },
                })
              }
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
