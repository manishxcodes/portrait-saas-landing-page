import { useEffect, useState } from "react"
import {  hamburgerMenu, lightModeIcon } from "../assets/index"
import { Button } from "./Button"

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode.toString());
  }

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-normal h-20 px-1">
          <div className="w-[200px] flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">#</span>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Potrait SaaS</span>
          </div>

          <div className="hidden md:flex justify-center gap-4 flex-1">
            <a href="features" className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-[15px]   rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900  transition-opacity">Features</a>
            <a href="pricing" className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-[15px]  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900  transition-opacity">Pricing</a>
            <a href="faq" className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-[15px]  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 transition-opacity">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center justify-center py-1 px-1 opacity-75 hover:opacity-100 cursor-pointer" onClick={toggleDarkMode}>
              <span className="flex items-center justify-center h-[30px] w-[40px] rounded-sm hover:bg-gray-100  transition-opacity">
                {lightModeIcon}
              </span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-sm  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 text-nowrap cursor-pointer transition-opacity">Sign In
            </button>
            <Button label={"Get Started"}></Button>
          </div>

          <div className="flex md:hidden gap-2 items-center px-2">
            <button className="inline-flex items-center justify-center py-1 px-1 md:px-3 opacity-75 hover:opacity-100 cursor-pointer" onClick={toggleDarkMode}>
              <span className="flex items-center justify-center h-[30px] w-[40px] rounded-sm hover:bg-gray-100  transition-opacity">
                {lightModeIcon}
              </span>
            </button>
            <button className="inline-flex items-center justify-items-center py-1 px-1 md:px-3 opacity-70 hover:opacity-100 cursor-pointer">
              <span className="flex items-center justify-center h-[30px] w-[40px] rounded-sm hover:bg-gray-100  transition-opacity">
              {hamburgerMenu}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
