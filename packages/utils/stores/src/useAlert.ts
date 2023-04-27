import create from "zustand";

interface alertState {
  active: boolean;
  success?: boolean;
  message: string;
  // eslint-disable-next-line no-unused-vars
  handleAlert: (data: {
    active: boolean;
    message: string;
    success: boolean;
  }) => void;
}

export const useAlert = create<alertState>((set) => ({
  active: false,
  message: "",
  success: false,
  handleAlert: (data) =>
    set({ active: data.active, message: data.message, success: data.success }),
}));
