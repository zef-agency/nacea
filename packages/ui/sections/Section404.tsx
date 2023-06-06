import React from "react";

import { Button, Title } from "../components";
import { Arrow } from "../svg";

export function Section404() {
  return (
    <div className="w-full relative">
      <div className=" h-[70vh] md:h-[80vh] flex flex-col gap-10 justify-center items-center mx-[10%]">
        <Title className="text-center" size="big">
          Oups, la page que vous tentez d&apos;afficher n&apos;existe pas ou une
          erreur s&apos;est produite
        </Title>
        <Button icon={<Arrow />} href="/" color="#3F5931">
          Revenir à l&apos;accueil
        </Button>
        <div className="absolute bottom-0 -left-28 sm:-left-20 max-w-4"></div>
      </div>
    </div>
  );
}
