import CookieConsent from "react-cookie-consent";
import { useAlert } from "utils";

import { Text } from "../Typo/Text";
import { Title } from "../Typo/Title";

export const CookieAccept = () => {
  const { handleAlert } = useAlert();

  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      disableStyles={true}
      location="bottom"
      buttonText="J'accepte"
      declineButtonText="Je refuse"
      cookieName="cookie-consent-nacea"
      declineButtonClasses="decline-button"
      buttonClasses="accept-button"
      containerClasses="cookie-wrapper drop-shadow-md"
      onAccept={() => {
        handleAlert({
          active: true,
          success: true,
          message: "Préférences enregistrées",
        });
      }}
      onDecline={() => {
        handleAlert({
          active: true,
          success: true,
          message: "Préférences enregistrées",
        });
      }}
      expires={450}
    >
      <Title size="card" weight="sb">
        Ce site utilise des cookies !
      </Title>
      <Text size="small">
        Nous utilisons des cookies pour améliorer votre navigation sur notre
        site. En continuant, vous acceptez notre politique de confidentialité et
        l&apos;utilisation de cookies.
      </Text>
    </CookieConsent>
  );
};
