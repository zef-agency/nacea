import React from "react";
import { RelanceSectionType, useModal } from "utils";

import { Button, Title } from "../components";
import { ModalNames } from "../components/Modals/ModalNames";
import { Arrow } from "../svg";

interface RelanceSectionProps {
  data: RelanceSectionType;
}

export function RelanceSection({ data }: RelanceSectionProps) {
  const { title, subtitle, backgroundColor, button } = data;
  const { handleModal, modalData } = useModal();

  return (
    <div
      style={{ backgroundColor }}
      className="w-full px-5 py-10 flex flex-col items-center"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[700px]">
        <Title className="text-center" size="medium" HTMLtag="h2">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
        <Title className="text-center" size="small" HTMLtag="h3">
          <span dangerouslySetInnerHTML={{ __html: subtitle }} />
        </Title>
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
      </div>
    </div>
  );
}
