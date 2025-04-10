import { easeOut, motion } from "motion/react"

export const Hero = () => {
    return (
      <div id="hero" className="relative pt-20 sm:pt-30 w-full bg-white dark:bg-black">
        <motion.div
            className="w-full"
            initial={{y:30, opacity:0}}
            animate={{y:0, opacity: 1}}
            transition={{
                duration: 0.5,
                ease: easeOut    
            }}>
          <div className="flex flex-col items-center mx-auto min-h-[40vh] max-w-5xl px-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center text-center px-4 py-2 rounded-md text-[12px] text-black dark:text-white bg-linear-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 shadow-sm hover:shadow-md border-black/5 dark:border-white/5 transition-all duration-100 backdrop:blur-xs w-fit mb-8 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command w-3 h-3 text-black dark:text-white opacity-75"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                </svg>
                <span className="ml-2 tracking-wider">PICTURE STUDIOS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl text-center text-black dark:text-white mb-3 md:mb-4">
                Become your own 
              </h1>
              <h1 className="italic text-3xl sm:text-4xl md:text-6xl text-center text-black font-semibold dark:text-white px-4 mb-4 md:mb-8">
                photographer
              </h1>
              <p className="text-[16px] text-center max-w-[650px] w-full md:text-[18px] text-black/70 dark:text-white/70 leading-relaxed mt-4 px-4 mb-12">
                Experience the future of professional photography. Our AI-powered studio creates stunning portraits that captures your authentic self. 
              </p>
              <button className="flex items-center text-center px-6 py-3 rounded-md font-semibold text-[16px] text-white dark:text-black bg-linear-to-r dark:from-zinc-50 dark:to-zinc-100 from-zinc-900 to-zinc-800 shadow-sm hover:shadow-md dark:hover:shadow-white/15 hover:scale-[1.02] dark:border-black/5 border-white/5 transition-all duration-200 backdrop:blur-xs w-fit ease-in-out cursor-pointer">
                <span>Create Your Portrait </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 opacity-80"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
              <p className="text-[14px] text-center max-w-2xl mx-auto text-zinc-900 dark:text-white/70 leading-relaxed mt-1 px-4 mb-12">No credit card required</p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }