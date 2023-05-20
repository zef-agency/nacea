import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { useModal } from "utils";

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

  if (!visible) {
    return <> </>;
  }

  return (
    <div>
      <p onClick={closeModal}> Close </p>
      {children}{" "}
    </div>
  );
}
