import { create } from 'zustand';

export const useStore = create((set) => ({
  login: '',
  password: '',
  isAuth: false,
  setLogin: (login) => set({ login }),
  setPassword: (password) => set({ password }),
  setIsAuth: (isAuth) => set({ isAuth }),
}));
