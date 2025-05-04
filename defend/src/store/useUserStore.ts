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
    userData: UserData | null;
    registerUser: (data: UserData) => void;
    setPartialUser: (data: Partial<UserData>) => void;
    setPassword: (password: string) => void;
    closeOnboarding: () => void;
    setShowOnboarding: (value: boolean) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            isRegistered: false,
            showOnboarding: true,
            userData: null,

            registerUser: (data) =>
                set({
                    isRegistered: true,
                    userData: data,
                    showOnboarding: false,
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
            closeOnboarding: () => set({ showOnboarding: false }),

        }),
        {
            name: 'user-store',
        }
    )
);
