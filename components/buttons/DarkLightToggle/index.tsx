"use client";
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkLightToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const ToggleMode = (value?: boolean) => {
    const newMode = typeof value === "boolean" ? value : !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  };
  return (
    <>
      <div className="fixed right-0 bottom-55/100 bg-white w-10 h-10 rounded-l-full flex items-center justify-center z-150 cursor-pointer md:hidden">
        <div
          className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
          onClick={() => ToggleMode()}
        >
          {darkMode ? (
            <MdOutlineDarkMode size={25} />
          ) : (
            <MdOutlineLightMode size={25} />
          )}
        </div>
      </div>

      <div className="fixed right-0 bottom-55/100 z-150 hidden md:block group">
        <div className="fixed right-0 bottom-55/100 bg-white w-10 h-10 rounded-l-full flex items-center justify-center z-20 group-hover:hidden ">
          <div
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
            onClick={() => ToggleMode()}
          >
            {darkMode ? (
              <MdOutlineDarkMode size={25} />
            ) : (
              <MdOutlineLightMode size={25} />
            )}
          </div>
        </div>
        <div className="bg-white z-50 w-50 h-10 rounded-l-full flex items-center transition-all duration-300 transform translate-x-50 group-hover:translate-x-0">
          <div className="absolute left-0 pl-3 pr-2 flex items-center justify-between w-50">
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
              <MdOutlineLightMode size={25} />
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => ToggleMode(e.target.checked)}
                className="sr-only peer"
              ></input>
              <div className="w-11 h-6 bg-indigo-600 rounded-full  transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
              <MdOutlineDarkMode size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
