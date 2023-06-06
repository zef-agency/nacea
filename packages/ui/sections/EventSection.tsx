import React from "react";
import { EventSectionType, getUrl, useModal } from "utils";

import { Button, CustomImage, Title } from "../components";
import { ModalNames } from "../components/Modals/ModalNames";
import { Arrow } from "../svg";

interface EventSectionProps {
  data: EventSectionType;
}

export function EventSection({ data }: EventSectionProps) {
  const { imageLeft, event, button } = data;
  const { handleModal, modalData } = useModal();

  return (
    <div
      id={event.label}
      style={{ backgroundColor: imageLeft ? "transparent" : "#EDEDED" }}
      className={`flex flex-col max-w gap-6 md:gap-28   relative ${
        imageLeft
          ? "md:flex-row-reverse justify-end"
          : "md:flex-row justify-end"
      }`}
    >
      <div className="p-4 sm:py-5 md:py-10 max-w-[600px] flex flex-col justify-center gap-8">
        <div
          className={`absolute h-auto ${
            imageLeft ? "transform -scale-x-100 -right-28" : "-left-36"
          }  -bottom-10 hidden sm:block  z-20`}
        >
          <CustomImage priority={true} alt="flowers" src="/flowers_pnh.png" />
        </div>
        <div className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex flex-row justify-between gap-4">
            <Title size="semiBig" HTMLtag="h2">
              {event.label}
            </Title>
            <div className="w-24"></div>
          </div>
          <Title size="small" HTMLtag="h3">
            <span dangerouslySetInnerHTML={{ __html: event.description }} />
          </Title>
        </div>
        {button && (
          <Button
            icon={<Arrow />}
            onclick={() =>
              handleModal({
                isOpen: ModalNames.CONTACT_MODAL,
                modalData: {
                  ...modalData,
                  event: event.label,
                },
              })
            }
            color={button.color}
          >
            {button.label}
          </Button>
        )}
      </div>
      <div className="relative h-full md:max-w-[45%] sm:h-[500px]">
        <CustomImage
          classes="brightness-40"
          priority={true}
          alt={event.image.alt}
          src={getUrl(event.image.url)}
        />
        <div
          className={`absolute h-auto w-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ${
            imageLeft
              ? " md:translate-x-[-20%] md2:translate-x-[0%] lg:translate-x-[10%]"
              : " md:translate-x-[-80%] md2:translate-x-[-105%] lg:translate-x-[-115%]"
          } md:w-[350px]  sm:w-[300px]`}
        >
          <CustomImage
            priority={true}
            alt={event.image.alt}
            src={getUrl(event.image.url)}
            classes="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
