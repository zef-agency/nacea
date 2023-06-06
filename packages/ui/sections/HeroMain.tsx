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
    <div className="flex flex-col sm:flex-row max-w ">
      <Wrapper classes="relative entrance_animation flex flex-col justify-center gap-6 md:gap-8 py-5 max-w-[900px] md:py-8 lg:py-16 ">
        <div className="flex flex-col gap-2.5 md:gap-4">
          <Title size="big" weight="normal">
            {title}
          </Title>

          <Title size="small" weight="normal" HTMLtag="h2">
            {subtitle}
          </Title>
        </div>
        <Button
          icon={<Arrow />}
          color={button.color}
          onclick={() =>
            handleModal({
              isOpen: ModalNames.CONTACT_MODAL,
              modalData,
            })
          }
        >
          {button.label}
        </Button>
        <span className="absolute hidden sm:block top-4 right-4 md:top-10 md:right-24">
          <Truck />
        </span>
        <div className="absolute h-auto -bottom-10 hidden sm:block sm:-left-28 md:-left-32 lg:-left-44 -z-20 max-w-4">
          <CustomImage alt="flowers" src="/flowers_pnh.png" />
        </div>
      </Wrapper>
      <div className="sm:min-w-[400px] relative md:max-w-[50%] entrance_opacity_3 md:min-w-[600px] h-[300px] sm:h-[450px] md:h-[600px]">
        <CustomImage priority={true} alt={image.alt} src={getUrl(image.url)} />
      </div>
    </div>
  );
}
