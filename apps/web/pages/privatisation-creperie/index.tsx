import React from "react";
import { Layout, Page } from "ui";
import { PageProps, PageType, SeoType, fetcher, getUrl } from "utils";

export default function index(props: PageProps) {
  const { seo, modal, ...rest } = props;

  return (
    <Layout
      url="/privatisation-creperie"
      title={seo?.title}
      description={seo?.description}
      modal={modal}
      LCPUrl={getUrl(rest.hero.image.url)}
    >
      <Page data={rest} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { success, error } = await fetcher(getUrl("/api/page-event"));
  const header = await fetcher(getUrl("/api/layout-header"));
  const footer = await fetcher(getUrl("/api/layout-footer"));
  const modal = await fetcher(getUrl("/api/layout-modal"));

  if (error || !success || footer.error || header.error) {
    return { props: {} };
  }

  return {
    props: {
      seo: success.seo,
      modal: modal.success,
      sections: success.sections,
      hero: success.hero ? success.hero : null,
      header: success.header ? header.success : null,
      footer: success.footer ? footer.success : null,
    },
  };
}
