import React from "react";
import { Layout, Page } from "ui";
import { fetcher, getUrl } from "utils";

export default function Page404(props: any) {
  const { ...rest } = props;

  return (
    <Layout url="/404" title="Page 404" description="Vous êtes sur la page 404">
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
            type: "404",
          },
        },
      ],
    },
  };
}
