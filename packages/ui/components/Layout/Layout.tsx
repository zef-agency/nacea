import Head from "next/head";
import { PropsWithChildren } from "react";
import {
  ContactModalType,
  root,
  useAlert,
  useHasHydrated,
  useModal,
} from "utils";

import { Alert } from "../Alert/Alert";
import { ContactModal } from "../Modals/ContactModal";
import { ModalNames } from "../Modals/ModalNames";
import { CookieAccept } from "./CookieConsent";
import { GoogleAnalytics } from "./GoogleAnalytics";

interface LayoutProps extends PropsWithChildren<any> {
  title: string;
  description: string;
  LCPUrl?: string;
  url?: string;
  modal?: any;
}
export function Layout(props: LayoutProps) {
  const { title, children, description, modal, url = "/", LCPUrl = "" } = props;
  const { isOpen } = useModal();
  const hasHydrated = useHasHydrated();
  const visible: any = hasHydrated ? isOpen : [];
  const { handleAlert, ...AlertProps } = useAlert();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${root.FRONT_URL}${url}`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image" content={LCPUrl !== "" ? LCPUrl : ""} />
        <meta property="og:description" content={description} />
        <meta
          name="google-site-verification"
          content="7uIHFurHR4xH-Jjch0elUd6bTvTXEQ_kTxymOvmVDLE"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        {LCPUrl !== "" && <link rel="preload" href={LCPUrl} as="image" />}
      </Head>
      <GoogleAnalytics />
      {children}

      <Alert setAlert={handleAlert} alert={AlertProps} />
      {visible === ModalNames.CONTACT_MODAL && (
        <ContactModal
          visible={visible === ModalNames.CONTACT_MODAL}
          data={modal as ContactModalType}
        />
      )}
      <CookieAccept />
    </>
  );
}
