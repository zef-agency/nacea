import create from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface modalState {
  modalData: {
    nom: string;
    prenom: string;
    email: string;
    message: string;
    event: any;
    invite: any;
    boissons: boolean;
  };
  handleModal: Function;
  closeModal: Function;
  isOpen: string;
}

export const useModal = create<modalState>()(
  persist<modalState>(
    (set) => ({
      modalData: {
        nom: "",
        prenom: "",
        email: "",
        message: "",
        event: "",
        invite: "",
        boissons: false,
      },
      isOpen: "",
      handleModal: (state: any) =>
        set({ modalData: state?.modalData, isOpen: state?.isOpen }),
      closeModal: () => set({ isOpen: "" }),
    }),
    {
      name: "modal-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
