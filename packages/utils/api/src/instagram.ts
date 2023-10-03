import useSWR from "swr";
import { fetcher, getUrl } from "utils";

// ----- GET INSTAGRAM POSTS -----
export function GetInstagramPosts() {
  const { data, error } = useSWR([getUrl("/api/instagram-posts")], ([url]) =>
    fetcher(url)
  );

  return {
    posts: data?.success,
    isPostsLoading: !error && !data,
    isPostsError: data?.error,
  };
}
