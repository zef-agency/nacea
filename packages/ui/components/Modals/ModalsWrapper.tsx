import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { useModal } from "utils";

import { Modal } from "./Modal";

interface ModalProps {
  visible: boolean;
}

export function ModalWrapper({
  visible,
  children,
}: ModalProps & PropsWithChildren<any>) {
  const router = useRouter();
  const handleModal = useModal((state) => state.handleModal);

  const closeModal = () => {
    handleModal(null);
    router.push(router.pathname);
  };

  return (
    <Modal IsOpen={visible} onRequestClose={closeModal}>
      <div> {children} </div>
    </Modal>
  );
}
