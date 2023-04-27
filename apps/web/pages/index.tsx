import { Layout, Page } from "ui";
import { fetcher, FooterType, getUrl, HeaderType, SectionsType } from "utils";

interface PageHomeProps {
  seo: {
    title: string;
    description: string;
  };
  header?: HeaderType;
  footer?: FooterType;
  sections?: SectionsType[];
}

export default function Web(props: PageHomeProps) {
  const { seo, sections, footer, header } = props;

  return (
    <div>
      <Layout title={seo?.title} description={seo?.description}>
        <Page sections={sections} footer={footer} header={header} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const { success, error } = await fetcher(getUrl("/api/page-home"));
  const header = await fetcher(getUrl("/api/layout-header"));
  const footer = await fetcher(getUrl("/api/layout-footer"));

  if (error || !success || footer.error || header.error) {
    return { props: {} };
  }

  return {
    props: {
      seo: success.seo,
      sections: success.sections,
      header: success.header ? header.success : null,
      footer: success.footer ? footer.success : null,
    },
  };
}
