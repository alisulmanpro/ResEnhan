'use client'
import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';

const cookieStorage: StateStorage = {
    getItem: (name) => Cookies.get(name) || null,
    setItem: (name, value) => {
        Cookies.set(name, value, { expires: 7, secure: true, sameSite: 'strict' });
    },
    removeItem: (name) => Cookies.remove(name),
};

type JSONValue =
    | string
    | number
    | boolean
    | null
    | { [key: string]: JSONValue }
    | JSONValue[];


interface ResumeState {
    filename: (name: string) => void;
    resumeData: Record<string, JSONValue>[];
    setSection: (section: string | undefined, data: JSONValue) => void;
}

export const useResumeStore = create<ResumeState>()(
    persist(
        (set) => ({
            resumeData: [],
            filename: (filename) => set((state) => ({
                resumeData: [...state.resumeData, { filename }],
            })),
            setSection: (section, data) =>
                set((state) => ({
                    resumeData: {
                        ...state.resumeData,
                        [section || '']: data,
                    },
                })),
        }),
        {
            name: 'ResEnhan-resume-secure',
            storage: createJSONStorage(() => cookieStorage),
        }
    )
);