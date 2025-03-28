import { useEffect, useState } from "react"
import { Button } from "./ui/Button";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-normal h-20 px-1">
          <div className="w-[200px] flex items-center gap-2">
          <span className="text-3xl flex items-center font-bold text-gray-900 dark:text-white leading-0">❃</span>
            <span className="text-[22px] flex items-center font-bold text-gray-900 dark:text-white leading-0">SaaS Acme </span>
          </div>
          
          <div className="hidden md:flex justify-center gap-4 flex-1">
            <a href="features" className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-sm  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 transition-opacity"
            onClick={(e) => {handleLinkClick(e, "features")}}
            >Features</a>
            <a href="pricing" className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-sm  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900  transition-opacity"
            onClick={(e) => {handleLinkClick(e, "pricing")}}>Pricing</a>
            <a href="faq" className="flex items-center justify-center px-4 py-2 h-9 dark:text-white text-sm  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 transition-opacity"
            onClick={(e) => {handleLinkClick(e, "faq")}}>FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button title="theme-toggle" className="inline-flex items-center justify-center py-1 px-1 opacity-75 hover:opacity-100  cursor-pointer" onClick={toggleDarkMode}>
            <span className="flex items-center justify-center h-[30px] w-[40px] rounded-sm hover:bg-gray-100  dark:hover:bg-white/15 transition-opacity text-gray-600 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-3 -3 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="-2 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
              </span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 h-9 leading-none dark:text-white text-sm  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 text-nowrap cursor-pointer transition-opacity">Sign In
            </button>
            <Button label={"Get Started"}></Button>
          </div>

          <div className="flex md:hidden gap-2 items-center px-2">
            <button title="theme-toggle" className="inline-flex items-center justify-center py-1 px-1 md:px-3 opacity-75 hover:opacity-100 cursor-pointer" onClick={toggleDarkMode}>
              <span className="flex items-center justify-center h-[30px] w-[40px] rounded-sm hover:bg-gray-100  dark:hover:bg-white/15 transition-opacity text-gray-600 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-3 -3 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="-2 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
              </span>
            </button>
            <button title="hamburger-menu" className="inline-flex items-center justify-items-center py-1 px-1 md:px-3 opacity-70 hover:opacity-100 cursor-pointer "
            onClick={handleClick}>
              <span className="flex items-center justify-center h-[30px] w-[40px] rounded-sm hover:bg-gray-100  dark:hover:bg-white/15 transition-opacity text-gray-600 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 -4 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* menu option */}
      {isVisible && 
       (
        <div className="fixed top-12 left-0 right-0 mt-4 px-10 py-6 bg-white dark:bg-black">
      <div className="flex flex-col md:hidden justify-center items-center  flex-1 gap-1">
            <a href="features" className="flex items-center justify-center w-full px-4 py-2 h-9 dark:text-white text-md  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 transition-opacity"
            onClick={(e) => {handleLinkClick(e, "features");
              handleClick();
            }}>Features</a>
            <a href="pricing" className="flex items-center justify-center w-full px-4 py-2 h-9 dark:text-white text-md  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900  transition-opacity"
            onClick={(e) => {handleLinkClick(e, "pricing");
              handleClick();
            }}>Pricing</a>
            <a href="faq" className="flex items-center justify-center w-full px-4 py-2 h-9 dark:text-white text-md  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 transition-opacity"
            onClick={(e) => {handleLinkClick(e, "faq");
              handleClick();
            }}>FAQ</a>
            <button className="flex w-full items-center justify-center px-4 py-2 h-9 leading-none dark:text-white text-md  rounded-md dark:bg-black dark:hover:bg-white/15 opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white text-gray-900 text-nowrap cursor-pointer transition-opacity mb-2"
            onClick={handleClick}>Sign In
            </button>
          <Button onClick={handleClick} label={"Get Started"}></Button>
          </div>
          
      </div>
       )}
    </nav>
  )
}
