import React from "react";
import { Layout, Page } from "ui";
import { fetcher, getUrl } from "utils";

export default function MentionsLegales(props: any) {
  const { ...rest } = props;

  return (
    <Layout
      title="Page mentions légales"
      description="Vous êtes sur la page mentions légales"
    >
      <Page data={rest} />
    </Layout>
  );
}

export async function getStaticProps() {
  const header = await fetcher(getUrl("/api/layout-header"));
  const footer = await fetcher(getUrl("/api/layout-footer"));

  if (footer.error || header.error) {
    return { props: {} };
  }

  return {
    props: {
      header: header.success,
      footer: footer.success,
      sections: [
        {
          section: {
            type: "mentions-legales",
          },
        },
      ],
    },
  };
}
