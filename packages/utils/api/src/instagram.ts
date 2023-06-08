import useSWR from "swr";
import { fetcher } from "utils";

// ----- GET INSTAGRAM POSTS -----
export function GetInstagramPosts() {
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=6&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`;

  const { data, error } = useSWR(url, fetcher);

  return {
    posts: data?.success?.data,
    isPostsLoading: !error && !data,
    isPostsError: data?.error,
  };
}
