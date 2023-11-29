/**
 * section-instagram controller
 */

import { factories } from "@strapi/strapi";
const axios = require("axios");

let BaseToken = process.env.STRAPI_BASE_TOKEN;

export default factories.createCoreController(
  "api::section-instagram.section-instagram",
  () => ({
    async findPosts(ctx) {
      try {
        const NewToken = await getNewToken(BaseToken);
        const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=6&access_token=${NewToken}`;
        const response = await axios.get(url);

        if (response) {
          BaseToken = NewToken;
          ctx.body = response.data.data;
        }
      } catch (error) {
        ctx.body = null;
      }
    },
  })
);

export async function getNewToken(token) {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
    );

    if (response) {
      return response.data.access_token;
    }
  } catch (error) {
    console.log(error);
  }
}
