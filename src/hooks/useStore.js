import { create } from 'zustand';

// 如果需要持久化状态，可以引入 zustand/middleware
import { persist } from 'zustand/middleware';

// 使用 persist 中间件，保存 count 状态
const useStore = create(
  persist(
    (set) => ({
      // 状态部分
      count: 0,

      // 操作部分
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }) // 新增 reset 功能
    }),
    {
      name: 'counter-storage', // 本地存储的键名
      getStorage: () => localStorage // 使用 localStorage 持久化状态
    }
  )
);

export default useStore;
