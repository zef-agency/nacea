import { create } from "zustand";
import { persist } from "zustand/middleware";

interface tabState {
  item: string;
  // eslint-disable-next-line no-unused-vars
  addTab: (newTab: string) => void;
}

export const useTabs = create<tabState>()(
  persist<tabState>(
    (set) => ({
      item: "tabs1",
      addTab: (newTab) => set({ item: newTab }),
    }),
    {
      name: "tab-state",
    }
  )
);
