import { IoMdAdd } from "react-icons/io";

const Progress = () => {
    const data = [
        {
            id: 1,
            title: "Personal Information"
        },
        {
            id: 2,
            title: "Contact Info"
        },
        {
            id: 3,
            title: "Work Experience"
        },
        {
            id: 4,
            title: "Education"
        },
        {
            id: 5,
            title: "Technical Skills"
        },
        {
            id: 6,
            title: "Techincal Projects"
        },
    ]
    return (
        <section>
            <ul className="menu bg-base-200 rounded-box min-w-65 w-full gap-5">
                {data?.map(item => (
                    <li key={item.id}>
                        <a href="">

                            <button className="btn btn-accent">
                                <div className="radial-progress" style={{ "--value": "0", "--size": "1.5rem" } as React.CSSProperties}
                                    aria-valuenow={0} role="progressbar">
                                    {item.id}
                                </div>
                            </button>

                            <span className="text-lg">{item.title}</span>
                        </a>
                    </li>
                ))}
                <li>
                    <div>
                        <div className="dropdown dropdown-right dropdown-center">
                            <button tabIndex={0} role="button" className="btn btn-square btn-accent w-15">
                                <IoMdAdd />
                            </button>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <span className="text-lg">Add Sections</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Progress