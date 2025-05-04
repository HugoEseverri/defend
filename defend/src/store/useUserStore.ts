// store/useUserStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
    name?: string;
    email?: string;
    password?: string;
}

interface UserStore {
    isRegistered: boolean;
    showOnboarding: boolean;
    showOnboard: boolean;
    userData: UserData | null;
    registerUser: (data: UserData) => void;
    setPartialUser: (data: Partial<UserData>) => void;
    setPassword: (password: string) => void;
    setShowOnboarding: (value: boolean) => void;
    setShowOnboard: (value: boolean) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            isRegistered: false,
            showOnboarding: true,
            showOnboard: false,
            userData: null,

            registerUser: (data) =>
                set({
                    isRegistered: true,
                    userData: data,
                    showOnboarding: false,
                    showOnboard: true,
                }),

            setPartialUser: (data) =>
                set((state) => ({
                    userData: {
                        ...state.userData,
                        ...data,
                    },
                })),

            setPassword: (password) =>
                set((state) => ({
                    userData: {
                        ...state.userData,
                        password,
                    },
                })),

            setShowOnboarding: (value) => set({ showOnboarding: value }),
            setShowOnboard: (value) => set({ showOnboard: value }),
        }),
        {
            name: 'user-store',
        }
    )
);
