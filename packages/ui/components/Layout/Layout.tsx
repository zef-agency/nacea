import Head from "next/head";
import React, { PropsWithChildren } from "react";

interface LayoutProps {
  title: string;
}

export function Layout({
  title,
  children,
}: LayoutProps & PropsWithChildren<any>) {
  // const { isOpen, handleModal } = useModal();
  // const { handleAlert, ...AlertProps } = useAlert();

  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      {children}

      {/* 	<Alert setAlert={handleAlert} alert={AlertProps} /> */}
      {/* 	<Exemple2Modal visible={isOpen === ModalNames.EXEMPLE2_MODAL} />
			<ExempleModal visible={isOpen === ModalNames.EXEMPLE_MODAL} /> */}
    </>
  );
}
