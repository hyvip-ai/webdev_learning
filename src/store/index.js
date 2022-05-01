import create from "zustand";

export const useStore = create((set) => ({
  showPlayGround: false,
  togglePlayGround: () =>
    set((prev) => ({ showPlayGround: !prev.showPlayGround })),
}));
