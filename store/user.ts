import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {
    user_id: "",
    team: [],
    skills: {},
    world_tree: "",
    current_day: 0,
    runes: {},
    bio: "",
    facebook: "",
  },
  statsSearch: { status: false },
  updateUser: (user: any) => set({ user }),
  updateStatsSearch: (stats: any) => set({ statsSearch: stats }),
}));
