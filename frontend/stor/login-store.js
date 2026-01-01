import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set) => ({
  token: null,
  role: null,
  user: null,

  setAuth: async ({ token, user }) => {
    await AsyncStorage.setItem("token", token);
    set({
      token,
      role: user.role,
      user,
    });
  },

  logout: async () => {
    await AsyncStorage.removeItem("token"); // حذف token من التخزين
    set({
      token: null,
      role: null,
      user: null,
    });
  },
}));

export default useAuthStore;
