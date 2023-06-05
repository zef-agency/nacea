import emailjs from "@emailjs/browser";
import { useState } from "react";

import { postMessage } from "../../api";
import { getEmailTemplate } from "../../functions";
import { useModal } from "../../stores";
import { useAlert } from "./../../stores/src/useAlert";

export function useSendMessage(type = "devis") {
  const handleAlert = useAlert((state) => state.handleAlert);
  const { closeModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);

  const sendInformationModal = (res: any) => {
    setLoading(true);
    const serviceID: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
    const templateID: any = getEmailTemplate(type);
    const key: any = process.env.NEXT_PUBLIC_EMAILJS_TOKEN_PUBLIC;

    if (res) {
      res = { ...res, boissons: res.boissons ? "Oui" : "Non" };
    }

    emailjs.send(serviceID, templateID, res, key).then(
      async () => {
        handleAlert({
          active: true,
          message: "L'email a bien été envoyé",
          success: true,
        });
        setLoading(false);

        setTimeout(() => {
          closeModal();
        }, 1000);
        postMessage(type, res);
      },
      () => {
        setLoading(false);
        handleAlert({
          active: true,
          message: "Erreur",
          success: false,
        });
      }
    );
  };

  return { sendInformationModal, loading };
}
