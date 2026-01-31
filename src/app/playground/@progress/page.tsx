"use client"
import { useMenuStore } from "@/store/playground";
import clsx from "clsx";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const Progress = () => {
    const { activeSectionId, setActiveSection, menuData } = useMenuStore()

    return (
        <section>
            <ul className="menu bg-base-100 rounded-box min-w-65 w-full gap-3">
                {menuData?.map(item => (
                    <li
                        key={item.id}
                        className={activeSectionId == item.id ? "menu-active" : "transition-all transform duration-1000"}
                        onClick={() => setActiveSection(item.id)}
                    >
                        <div>
                            {item.completed ? (
                                <button className={clsx("btn btn-success w-12 border-3!", { "border-transparent": item.id !== activeSectionId })}>
                                    <FaCheck />
                                </button>
                            ) : (
                                <button className={clsx("btn btn-accent w-12 border-3!", { "border-base-100": item.id === activeSectionId, "border-transparent": item.id !== activeSectionId })}>{item.id}</button>
                            )}
                            <span className="text-lg">{item.title}</span>
                        </div>
                    </li>
                ))}
                <li>
                    <div>
                        <div className="dropdown dropdown-right dropdown-center">
                            <button tabIndex={0} role="button" className="btn btn-square btn-accent">
                                <IoMdAdd />
                            </button>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box w-48 z-1 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <span className="text-lg">Add Sections</span>
                    </div>
                </li>
            </ul>
        </section >
    )
}

export default Progress