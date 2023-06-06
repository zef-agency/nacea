import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getUrl, HeaderType, useModal } from "utils";

import { Burger, Telephone } from "../../svg";
import { Button } from "../Buttons/Button";
import { Links } from "../Buttons/Link";
import { Wrapper } from "../Container/Wrapper";
import { Dropdown } from "../Dropdown/Dropdown";
import { CustomImage } from "../Image/Image";
import { ModalNames } from "../Modals/ModalNames";

interface HeaderProps {
  data: HeaderType;
}

export function Header({ data }: HeaderProps) {
  const { links, button, logo, telephone } = data;
  const { handleModal, modalData } = useModal();

  const router = useRouter();

  return (
    <div className="border-b border-gray">
      <Wrapper classes="flex items-center justify-between w-full">
        <div className="w-full max-w-[100px] md:max-w-[140px]">
          <Link href={getUrl("/", true)}>
            <CustomImage
              priority={true}
              alt={logo.alt}
              src={getUrl(logo.url)}
            />
          </Link>
        </div>
        <div className="md:flex hidden items-center justify-between gap-12">
          {links &&
            links.map((link, k) => (
              <Links
                label={link.label}
                key={k}
                current={router.pathname === link.link}
                href={getUrl(link.link, true)}
                color={link.color}
              >
                {link.label}
              </Links>
            ))}
        </div>
        <div className="hidden sm:flex flex-row items-center gap-4">
          {telephone && (
            <Links
              label={telephone.label}
              icon={<Telephone />}
              weight="medium"
              href={`tel:${telephone.link}`}
              color={telephone.color}
            >
              {telephone.label}
            </Links>
          )}
          {button && (
            <Button
              label={button.label}
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
          )}
        </div>
        <div className="md:hidden flex items-center justify-center ">
          <Dropdown trigger={<Burger />}>
            <div className="flex flex-col justify-between gap-4">
              {links &&
                links.map((link, k) => (
                  <Menu.Item key={k}>
                    <Links
                      label={link.label}
                      size="base"
                      href={getUrl(link.link, true)}
                      color={link.color}
                      key={k}
                    >
                      {link.label}
                    </Links>
                  </Menu.Item>
                ))}
            </div>
            {telephone && (
              <Links
                label={telephone.label}
                icon={<Telephone />}
                className="sm:hidden"
                size="base"
                weight="medium"
                href={`tel:${telephone.link}`}
                color={telephone.color}
              >
                {telephone.label}
              </Links>
            )}

            {button && (
              <Button
                label={button.label}
                className="sm:hidden"
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
            )}
          </Dropdown>
        </div>
      </Wrapper>
    </div>
  );
}
