import Script from "next/script";
import { getCookieConsentValue } from "react-cookie-consent";

export function GoogleAnalytics() {
  const isAccepted = getCookieConsentValue("cookie-consent-nacea");

  if (!isAccepted || isAccepted == "false") return <></>;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="script-ga" strategy="lazyOnload">
        {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
       page_path: window.location.pathname,
       });
     `}
      </Script>
    </>
  );
}
