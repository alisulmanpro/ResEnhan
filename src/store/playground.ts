import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { menudata } from '@/data/playground';

const cookieStorage: StateStorage = {
    getItem: (name) => Cookies.get(name) || null,
    setItem: (name, value) => {
        Cookies.set(name, value, { expires: 7, secure: true, sameSite: 'strict' });
    },
    removeItem: (name) => Cookies.remove(name),
};

interface MenuState {
    activeSectionId: number;
    menuData: MenuData[];
    setActiveSection: (id: number) => void;
    setCompleteStatus: (id: number | undefined) => void;
    toggleMiddleField: (sectionId: number, isChecked: boolean) => void; 
}

export const useMenuStore = create<MenuState>()(
    persist(
        (set) => ({
            activeSectionId: 1,
            menuData: menudata,
            
            setActiveSection: (id) => set({ activeSectionId: id }),

            setCompleteStatus: (id) => {
                if (!id) return;
                set((state) => ({
                    menuData: state.menuData.map((item) =>
                        item.id === id ? { ...item, completed: true } : item
                    ),
                }));
            },

            toggleMiddleField: (sectionId, isChecked) => {
                set((state) => ({
                    menuData: state.menuData.map((section) => {
                        if (section.id !== sectionId) return section;

                        let updatedFields = [...section.fields];

                        if (isChecked) {
                            const exists = updatedFields.find((f) => f.id === "middle-name-field");
                            if (!exists) {
                                // Dynamic insertion at index 1
                                updatedFields.splice(1, 0, {
                                    id: "middle-name-field",
                                    title: "Middle Name",
                                    slug: "middle_name",
                                    type: "text",
                                    mandatory: false,
                                    placeholder: "Optional",
                                });
                            }
                        } else {
                            updatedFields = updatedFields.filter((f) => f.id !== "middle-name-field");
                        }

                        return { ...section, fields: updatedFields };
                    }),
                }));
            },
        }),
        {
            name: 'ResEnhan-menu-secure',
            storage: createJSONStorage(() => cookieStorage),
        }
    )
);