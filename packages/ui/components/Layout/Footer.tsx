import React from "react";
import { FooterType, getUrl } from "utils";

import { Facebook, Instagram } from "../../svg";
import { Links } from "../Buttons/Link";
import { CustomImage } from "../Image/Image";
import { Text } from "../Typo/Text";
import { Title } from "../Typo/Title";

interface FooterProps {
  data: FooterType;
}

export function Footer({ data }: FooterProps) {
  const { links, socials, logo, signature, subtitle, title } = data;

  return (
    <div className="flex flex-col md:flex-row items-start  justify-between w-full py-5 md:gap-8 gap-7 sm:px-7 md:px-12 px-5 max-w">
      <div className="w-full max-w-[200px]">
        <CustomImage priority={true} alt={logo.alt} src={getUrl(logo.url)} />
      </div>
      <div className="flex flex-col gap-2 w-full md:max-w-[400px]">
        {" "}
        <Title weight="sb"> {title}</Title>
        <Text size="smallest"> {subtitle}</Text>{" "}
      </div>

      <div className="flex flex-col items-start w-full md:w-fit justify-between gap-5">
        <div className="flex flex-row items-center justify-between gap-2">
          <Text> Suivez moi : </Text>
          {socials?.map((social, k) => (
            <a
              target="_blank"
              href={getUrl(social.link)}
              key={k}
              style={{ backgroundColor: social.color }}
              className="rounded-full p-2 flex justify-center items-center"
            >
              {social.label === "Instagram" ? <Instagram /> : <Facebook />}
            </a>
          ))}
        </div>

        <Text size="base"> {signature} </Text>

        <div className="flex flex-col md:flex-row items-start justify-between gap-1">
          <Text size="base"> Nacea 2023 </Text>
          {links?.map((link, k) => (
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
      </div>
    </div>
  );
}
