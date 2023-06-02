import Image from "next/image";
import { BannerSectionType, getUrl, useModal } from "utils";

import { Button, CustomImage, Title, Wrapper } from "../components";
import { ModalNames } from "../components/Modals/ModalNames";
import { Arrow, Truck } from "../svg";

interface BannerSectionProps {
  data: BannerSectionType;
}

export function BannerSection({ data }: BannerSectionProps) {
  const { title, subtitle, imageLeft, image, backgroundColor, button } = data;
  const { handleModal, modalData } = useModal();

  return (
    <div
      style={{ backgroundColor }}
      className={`flex flex-col max-w overflow-hidden  relative ${
        imageLeft ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <Wrapper
        classes={`relative py-6 flex flex-col justify-center gap-6 md:gap-8 md:w-[50%] py-12  ${
          imageLeft ? "sm:mr-12" : "sm:ml-12"
        }`}
      >
        <div
          className={`absolute ${
            imageLeft ? "transform -scale-x-100 -right-36" : "-left-44"
          }  -bottom-10 hidden sm:block  z-20`}
        >
          <Image
            priority={true}
            width={200}
            height={200}
            alt="flowers"
            src="/flowers_pnh.png"
          />{" "}
        </div>
        <div className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex flex-row justify-between gap-4">
            <Title size="medium" weight="bold" HTMLtag="h2">
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
        {button &&
          (button.link === "devis" ? (
            <Button
              icon={<Arrow />}
              onclick={() =>
                handleModal({
                  isOpen: ModalNames.CONTACT_MODAL,
                  modalData,
                })
              }
              color={button.color}
            >
              {button.label}
            </Button>
          ) : (
            <Button icon={<Arrow />} href={button.link} color={button.color}>
              {button.label}
            </Button>
          ))}
      </Wrapper>
      <div className="h-[300px]  sm:w-full sm:max-w-[50%] sm:min-h-[450px]">
        <CustomImage priority={true} alt={image.alt} src={getUrl(image.url)} />
      </div>
    </div>
  );
}
