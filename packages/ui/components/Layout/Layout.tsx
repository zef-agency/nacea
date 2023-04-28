import Head from "next/head";
import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren<any> {
  title: string;
  description: string;
}
export function Layout(props: LayoutProps) {
  const { title, children, description } = props;
  // const { isOpen, handleModal } = useModal();
  // const { handleAlert, ...AlertProps } = useAlert();

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
      </Head>
      {children}

      {/* 	<Alert setAlert={handleAlert} alert={AlertProps} /> */}
      {/* 	<Exemple2Modal visible={isOpen === ModalNames.EXEMPLE2_MODAL} />
			<ExempleModal visible={isOpen === ModalNames.EXEMPLE_MODAL} /> */}
    </>
  );
}
