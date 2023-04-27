// @ts-nocheck

import { PropsWithChildren } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#__next");

interface ModalTemplateProps {
  IsOpen: boolean;
  onRequestClose: Function;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  theme?: boolean;
}

export function Modal({
  theme,
  children,
  IsOpen,
  onRequestClose,
  maxHeight = "90%",
  minWidth = "40%",
  maxWidth = "600px",
  width = "85%",
}: ModalTemplateProps & PropsWithChildren) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme ? "#131925" : "#ffffff",
      borderColor: "#2D343F",
      maxHeight: maxHeight,
      width: width,
      height: "fit-content",
      minWidth: minWidth,
      maxWidth: maxWidth,
      padding: "14px",
      borderRadius: "14px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.30)",
      zIndex: "9999999999999999",
    },
  };

  return (
    <ReactModal
      isOpen={IsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
}
