import { create } from "zustand";

export const useSettingStore = create((set) => ({
  headerFixed: "fixed",
  updateHeader: (choice: string) => set({ headerFixed: choice }),
}));
