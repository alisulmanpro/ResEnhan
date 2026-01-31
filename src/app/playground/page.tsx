"use client"
import { Fragment, useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { useMenuStore } from "@/store/playground";
import { useResumeStore } from "@/store/resume";
import clsx from "clsx";

export default function Playground() {

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [toggle, setToggle] = useState<boolean>(false);

  const {
    activeSectionId,
    setActiveSection,
    menuData,
    setCompleteStatus,
    toggleMiddleField,
    setAdditionalLinks
  } = useMenuStore();

  const { setSection } = useResumeStore()

  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const activeSection = menuData.find(s => s.id === activeSectionId);

  const isMiddleNameVisible = activeSection?.fields.some(f => f.id === "middle-name-field") ?? false;

  const handleToggleMiddleName = (isChecked: boolean) => {
    toggleMiddleField(activeSectionId, isChecked);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if(toggle){
      setAdditionalLinks(activeSectionId, toggle)
    } else {
      setAdditionalLinks(activeSectionId, toggle)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleNext = () => {
    setSection(activeSection?.title, formData)

    if (!activeSection) return;
    setCompleteStatus(activeSection.id);
    if (activeSectionId < menuData.length) {
      setActiveSection(activeSectionId + 1);
    }
  };

  if (!isHydrated || !activeSection) return <p className="p-10">Loading section...</p>;

  return (
    <Fragment>
      <div className="animate-in fade-in duration-500">
        <h1 className="text-2xl font-medium">{activeSection.title}</h1>
        <p className="text-sm text-gray-400">{activeSection.description}</p>

        <div className="divider"></div>

        <form className="w-full grid grid-cols-2 gap-x-8 gap-y-3" onSubmit={(e) => e.preventDefault()}>
          {activeSection.fields.map((data) => (
            <Fragment>
              <fieldset key={data.id} className={clsx("fieldset -space-y-1", { "hidden": data.divider })}>
                <div className="flex items-center justify-between">
                  <legend className="fieldset-legend font-medium">
                    {data.title}
                    {data.mandatory && <span className="text-red-500 ml-1">*</span>}
                  </legend>

                  {data.m_show && (
                    <label className="label cursor-pointer gap-2 opacity-80 hover:opacity-100 transition-opacity">
                      <span className="text-xs capitalize">middle name</span>
                      <input
                        type="checkbox"
                        checked={isMiddleNameVisible}
                        onChange={(e) => handleToggleMiddleName(e.target.checked)}
                        className="checkbox checkbox-xs checkbox-primary"
                      />
                    </label>
                  )}
                </div>

                <input
                  type={data.type}
                  id={data.slug}
                  name={data.slug}
                  onChange={e => handleInputChange(e)}
                  className="input input-sm w-full p-5!"
                  placeholder={data.placeholder || "Type here..."}
                />
              </fieldset>
              {data.divider && (
                <div className="divider text-sm uppercase col-span-2 cursor-pointer" onClick={handleToggle}>{data.title}</div>
              )}
            </Fragment>
          ))}
        </form>

        <div className="flex items-center justify-end w-full mt-10">
          <button className="btn btn-success px-10 gap-2" onClick={handleNext}>
            <span>Next Step</span>
            <GrFormNextLink className="text-xl" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}