import create from "zustand";
import { persist } from "zustand/middleware";

interface modalState {
  isOpen: string | null;
  // eslint-disable-next-line no-unused-vars
  handleModal: (type: string | null) => void;
}

export const useModal = create<modalState>()(
  persist<modalState>(
    (set) => ({
      isOpen: null,
      handleModal: (type) => set({ isOpen: type }),
    }),
    {
      name: "modal-state",
    }
  )
);
