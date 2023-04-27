import { getUrl } from "utils";
import { HeaderType } from "utils";

import { Button } from "../Buttons/Button";
import { Links } from "../Buttons/Link";
import { Image } from "../Image/Image";

export function Header(props: HeaderType) {
  const { links, button, logo } = props;

  return (
    <div className="flex items-center justify-between w-full py-2 px-10">
      <div className="w-full max-w-[120px]">
        <Image alt="image" src={getUrl(logo.url)} />
      </div>
      <div className="flex items-center justify-between gap-4">
        {links?.map((link, k) => (
          <Links href={getUrl(link.link, true)} color={link.color} key={k}>
            {link.label}
          </Links>
        ))}
      </div>
      <Button
        onClick={() => console.log("okkk")}
        href={getUrl(button.link, true)}
        color={button.color}
      >
        {button.label}
      </Button>
    </div>
  );
}
