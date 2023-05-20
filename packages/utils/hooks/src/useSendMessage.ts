import emailjs from "@emailjs/browser";
import { useState } from "react";

import { useModal } from "../../stores";
import { useAlert } from "./../../stores/src/useAlert";

export function useSendMessage() {
  const handleAlert = useAlert((state) => state.handleAlert);
  const { closeModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);

  const sendInformationModal = (res: any) => {
    setLoading(true);
    const serviceID: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
    const templateID: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
    const key: any = process.env.NEXT_PUBLIC_EMAILJS_TOKEN_PUBLIC;

    emailjs.send(serviceID, templateID, res, key).then(
      () => {
        handleAlert({
          active: true,
          message: "L'email a bien été envoyé",
          success: true,
        });
        setLoading(false);

        setTimeout(() => {
          closeModal();
        }, 1000);
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
