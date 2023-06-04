export const root = {
  API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : "https://oyster-app-5m6fg.ondigitalocean.app",
  FRONT_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nacea-web.vercel.app",
};

const token: string | undefined = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export async function fetcher(
  url: string,
  options: object = { method: "GET" }
): Promise<any> {
  try {
    const response = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": root.API_URL,
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      ...options,
    });

    if (!response.ok) {
      const error = await response.text();

      throw new Error(error);
    }
    const success = await response.json();

    return { success, error: undefined } as any;
  } catch (error: any) {
    return { success: undefined, error: error.message } as any;
  }
}
