import Head from "next/head";
import { PropsWithChildren } from "react";
import { ContactModalType, useAlert, useHasHydrated, useModal } from "utils";

import { Alert } from "../Alert/Alert";
import { ContactModal } from "../Modals/ContactModal";
import { ModalNames } from "../Modals/ModalNames";

interface LayoutProps extends PropsWithChildren<any> {
  title: string;
  description: string;
  modal?: any;
}
export function Layout(props: LayoutProps) {
  const { title, children, description, modal } = props;
  const { isOpen } = useModal();
  const hasHydrated = useHasHydrated();
  const visible: any = hasHydrated ? isOpen : [];
  const { handleAlert, ...AlertProps } = useAlert();

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
      </Head>
      {children}

      <Alert setAlert={handleAlert} alert={AlertProps} />
      {visible === ModalNames.CONTACT_MODAL && (
        <ContactModal
          visible={visible === ModalNames.CONTACT_MODAL}
          data={modal as ContactModalType}
        />
      )}
    </>
  );
}
