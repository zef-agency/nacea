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
    <main>
      {header ? <Header data={header} /> : <></>}
      {hero && renderSection(hero)}
      {sections?.map((section) => renderSection(section))}
      {footer ? <Footer data={footer} /> : <> </>}
    </main>
  );
}
