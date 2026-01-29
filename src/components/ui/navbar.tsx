import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { IoCloudDoneOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { MdLabelOutline } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 shadow-sm justify-between lg:p-7">
            <button className="btn btn-sm">
                <FaArrowLeft />
                <span className="hidden md:block">MyResume</span>
            </button>
            <p className="flex items-center gap-5">
                <span>Untitled</span>
                <IoCloudDoneOutline className="text-2xl" />
                <TfiReload className="text-xl hidden" />
            </p>
            <div className="flex items-center gap-2 lg:gap-5">
                <div>
                    <button className="btn btn-sm rounded-r-none">
                        <LuUndo2 />
                    </button>
                    <button className="btn btn-sm rounded-l-none">
                        <LuRedo2 />
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <button tabIndex={0} role="button" className="btn btn-sm">
                        <SlOptionsVertical />
                    </button>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <a>
                                <MdLabelOutline />
                                <span>Rename</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <IoShareSocialOutline />
                                <span>Share</span>
                            </a>
                        </li>
                        <li>
                            <button className="btn btn-sm btn-success items-center text-white w-full sm:hidden">
                                <MdOutlineFileDownload className="text-xl" />
                                <span className="mt-1">Download</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <button className="hidden btn btn-sm btn-success items-center text-white sm:flex">
                    <MdOutlineFileDownload className="text-xl" />
                    <span className="mt-1 hidden md:block">Download</span>
                </button>
            </div>
        </nav >
    )
}

export default Navbar;