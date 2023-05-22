import Link from "next/link";
import { useRouter } from "next/router";
import { getUrl, HeaderType } from "utils";

import { Burger, Telephone } from "../../svg";
import { Button } from "../Buttons/Button";
import { Links } from "../Buttons/Link";
import { Wrapper } from "../Container/Wrapper";
import { Dropdown } from "../Dropdown/Dropdown";
import { CustomImage } from "../Image/Image";

interface HeaderProps {
  data: HeaderType;
}

export function Header({ data }: HeaderProps) {
  const { links, button, logo, telephone } = data;
  const router = useRouter();

  return (
    <div className="border-b border-gray">
      <Wrapper classes="flex items-center justify-between w-full">
        <div className="w-full max-w-[100px] md:max-w-[120px]">
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
                current={router.pathname === link.link}
                href={getUrl(link.link, true)}
                color={link.color}
                key={k}
              >
                {link.label}
              </Links>
            ))}
        </div>
        <div className="hidden sm:flex flex-row items-center gap-4">
          {telephone && (
            <Links
              icon={<Telephone />}
              weight="medium"
              href={getUrl(telephone.link, true)}
              color={telephone.color}
            >
              {telephone.label}
            </Links>
          )}
          {button && (
            <Button href={getUrl(button.link, true)} color={button.color}>
              {button.label}
            </Button>
          )}
        </div>
        <div className="md:hidden flex items-center justify-center ">
          <Dropdown trigger={<Burger />}>
            <div className="flex flex-col justify-between gap-4">
              {links &&
                links.map((link, k) => (
                  <Links
                    size="base"
                    href={getUrl(link.link, true)}
                    color={link.color}
                    key={k}
                  >
                    {link.label}
                  </Links>
                ))}
            </div>
            {telephone && (
              <Links
                icon={<Telephone />}
                className="sm:hidden"
                size="base"
                weight="medium"
                href={getUrl(telephone.link, true)}
                color={telephone.color}
              >
                {telephone.label}
              </Links>
            )}

            {button && (
              <Button
                className="sm:hidden"
                href={getUrl(button.link, true)}
                color={button.color}
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
