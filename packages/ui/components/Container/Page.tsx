import React from "react";
import { FooterType, HeaderType, SectionsType } from "utils";

import { renderSection } from "../../sections/sections";
import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";

interface PageType {
  header?: HeaderType;
  footer?: FooterType;
  sections?: SectionsType[];
}

export function Page(props: PageType) {
  const { header, footer, sections } = props;

  return (
    <div>
      {header ? (
        <Header
          links={header.links}
          button={header.button}
          logo={header.logo}
        />
      ) : (
        <></>
      )}
      <div className="">
        {sections ? sections.map((section) => renderSection(section)) : <></>}
      </div>
      {footer ? (
        <Footer
          links={footer.links}
          socials={footer.socials}
          logo={footer.logo}
        />
      ) : (
        <> </>
      )}
    </div>
  );
}
