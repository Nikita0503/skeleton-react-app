// ==============================================
// Example Zustand Store
// Zustand stores manage CLIENT state — UI toggles, filters, user session, etc.
// For SERVER state (API data) use TanStack Query hooks instead.
//
// Usage in any component:
//   import { useExampleStore } from '@/lib/store/exampleStore';
//   const { count, increment } = useExampleStore();
//
// Copy this file as a template when creating new stores.
// ==============================================

import { create } from 'zustand';

type ExampleStoreState = {
  count: number;
  isModalOpen: boolean;
};

type ExampleStoreActions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  openModal: () => void;
  closeModal: () => void;
};

export const useExampleStore = create<ExampleStoreState & ExampleStoreActions>((set) => ({
  // State
  count: 0,
  isModalOpen: false,

  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
