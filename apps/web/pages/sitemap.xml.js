import { root } from "utils";

function generateSiteMap(staticsPages) {
  const url = root.FRONT_URL;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticsPages
        .map((page) => {
          return `
        <url>
            <loc>${url}${page}</loc>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const staticsPages = [
    "/",
    "/concept-galettes-bretonnes",
    "/privatisation-creperie",
    "/contact",
    "/mentions-legales",
    "/404",
  ];
  const sitemap = generateSiteMap(staticsPages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
