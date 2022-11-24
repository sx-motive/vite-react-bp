import create from 'zustand';

const useMenuStore = create((set) => ({
  init: false,
  toggleMenu: () => set((state) => ({ init: !state.init })),
  closeMenu: () => set({ init: false }),
}));

export { useMenuStore };
