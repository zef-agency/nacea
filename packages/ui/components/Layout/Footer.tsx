import React from "react";
import { FooterType, getUrl } from "utils";

import { Links } from "../Buttons/Link";
import { CustomImage } from "../Image/Image";

export function Footer(props: FooterType) {
  const { links, socials, logo } = props;

  return (
    <div className="flex items-center justify-between w-full py-2 px-10">
      <div className="w-full max-w-[200px]">
        <CustomImage priority={true} alt={logo.alt} src={logo.url} />
      </div>
      <div className="flex items-center justify-between gap-4">
        {links?.map((link, k) => (
          <Links href={getUrl(link.link, true)} color={link.color} key={k}>
            {link.label}
          </Links>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4">
        {socials?.map((link, k) => (
          <Links href={getUrl(link.link, true)} color={link.color} key={k}>
            {link.label}
          </Links>
        ))}
      </div>
    </div>
  );
}
