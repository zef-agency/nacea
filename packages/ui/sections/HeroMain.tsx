import React from "react";
import { getUrl, HeroMainSectionType, useModal } from "utils";

import { Button, CustomImage, Title, Wrapper } from "../components";
import { ModalNames } from "../components/Modals/ModalNames";
import { Arrow, Truck } from "../svg";

interface HeroMainProps {
  data: HeroMainSectionType;
}

export function HeroMain({ data }: HeroMainProps) {
  const { title, subtitle, button, image } = data;

  const { handleModal, modalData } = useModal();

  return (
    <div className="flex flex-col sm:flex-row max-w">
      <Wrapper classes="flex flex-col justify-center gap-6 md:gap-8 py-5 max-w-[800px] md:py-8 lg:py-16 ">
        <div className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex flex-row justify-between">
            <Title className="max-w-[78%]" size="big">
              {title}
            </Title>
            <Truck />
          </div>
          <Title size="small" HTMLtag="h3">
            {subtitle}
          </Title>
        </div>
        <Button
          icon={<Arrow />}
          color={button.color}
          onClick={() =>
            handleModal({
              isOpen: ModalNames.CONTACT_MODAL,
              modalData,
            })
          }
        >
          {button.label}
        </Button>
      </Wrapper>
      <div className="sm:min-w-[400px] md:min-w-[550px] max-h-[600px]">
        <CustomImage priority={true} alt={image.alt} src={getUrl(image.url)} />
      </div>
    </div>
  );
}
