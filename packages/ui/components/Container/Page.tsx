import React from "react";
import { PageType } from "utils";

import { renderSection } from "../../sections/sections";
import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";

interface PageProps {
  data: PageType;
}

export function Page({ data }: PageProps) {
  const { header, footer, sections, hero } = data;

  return (
    <div>
      {header ? <Header data={header} /> : <></>}
      {hero && renderSection(hero)}
      <div className="">
        {sections ? sections.map((section) => renderSection(section)) : <></>}
      </div>
      {footer ? <Footer data={footer} /> : <> </>}
    </div>
  );
}
