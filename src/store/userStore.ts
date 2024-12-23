import { create } from 'zustand';

interface UserState {
  username: string | null;
  points: number;
  isPremium: boolean;
  completedTasks: string[];
  walletAddress: string | null;
  setUsername: (username: string) => void;
  addPoints: (points: number) => void;
  completeTask: (taskId: string) => void;
  setWalletAddress: (address: string) => void;
  setPremium: (isPremium: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  username: null,
  points: 500,
  isPremium: false,
  completedTasks: [],
  walletAddress: null,
  
  setUsername: (username) => set({ username }),
  addPoints: (points) => set((state) => ({ points: state.points + points })),
  completeTask: (taskId) => 
    set((state) => ({
      completedTasks: [...state.completedTasks, taskId],
      points: state.points + 100
    })),
  setWalletAddress: (address) => set({ walletAddress: address }),
  setPremium: (isPremium) => set({ isPremium }),
}));