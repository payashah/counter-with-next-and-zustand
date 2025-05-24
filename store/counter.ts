import { create } from "zustand";

type CounterState = {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })), // ✅ این خط اضافه شد
    reset: () => set({ count: 0 })
}));
