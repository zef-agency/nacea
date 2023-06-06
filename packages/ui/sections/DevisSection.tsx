import React from "react";
import { darkenColor, DevisSectionType, getUrl, useModal } from "utils";

import { CustomForm, CustomImage, Title, Wrapper } from "../components";
import { ModalNames } from "../components/Modals/ModalNames";

interface DevisSectionProps {
  data: DevisSectionType;
}

export function DevisSection({ data }: DevisSectionProps) {
  const { title, subtitle, form, image, backgroundColor, imageLeft } = data;
  const darkenedColor = darkenColor(backgroundColor, 20);
  const { handleModal, modalData } = useModal();

  return (
    <div className=" py-8" style={{ backgroundColor }}>
      <Wrapper
        classes={`flex flex-col gap-6 items-center sm:justify-center sm:items-center sm:gap-24 ${
          imageLeft ? "sm:flex-row-reverse" : "sm:flex-row"
        } `}
      >
        <div className="w-[250px] z-10 relative sm:w-[275px] sm:max-w-[302px]">
          <div
            style={{ backgroundColor: darkenedColor }}
            className="absolute -z-10 top-[-15px] left-[-15px] w-full h-full rounded-xl"
          ></div>
          <CustomImage
            classes="rounded-xl"
            priority={true}
            alt={image.alt}
            src={getUrl(image.url)}
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[700px]">
          <div className="flex flex-col gap-2 ">
            <Title
              size="medium"
              className="max-w-[600px]"
              weight="bold"
              HTMLtag="h2"
            >
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
