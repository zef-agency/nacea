import { fetcher, getUrl } from "utils";
export async function postMessage(type: string, res: any) {
  const url = type === "devis" ? "/api/devis" : "/api/messages";
  const body =
    type === "devis"
      ? {
          data: {
            user: {
              name: res.nom,
              surname: res.prenom,
              email: res.email,
              message: res.message,
            },

            devis: {
              invite: res.invite,
              event: res.event,
              boissons: res.boissons,
            },
            read: false,
          },
        }
      : {
          data: {
            user: {
              name: res.nom,
              surname: res.prenom,
              email: res.email,
              message: res.message,
            },
            read: false,
          },
        };

  await fetcher(getUrl(url), {
    method: "POST",
    body: JSON.stringify(body),
  });
}
