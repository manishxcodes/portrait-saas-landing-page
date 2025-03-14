export const Hero = () => {
  return (
    <div className="relative pt-24 w-full min-h-[100dvh] bg-white dark:bg-black">
        <div className="flex flex-col items-center mx-auto min-h-[50vh] max-w-5xl ">
          <div className="flex flex-col items-center">
            <div className="flex text-center px-4 py-2 rounded-md text-[14px] text-black dark:text-white bg-linear-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 shadow-sm hover:shadow-md border-black/5 dark:border-white/5 transition-all duration-100 backdrop:blur-xs w-fit mb-8">
              PICTURE STUDIOS
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-black dark:text-white mb-3 md:mb-6">
              Become your own 
            </h1>
            <h1 className="italic text-4xl sm:text-5xl md:text-6xl text-black dark:text-white px-4 mb-4 md:mb-8">
              photographer
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto  md:text-xl text-black/70 dark:text-white/70 font-light leading-relaxed mt-4 px-4 mb-8">
              Experience the future of professional photography. Our AI-powered studio creates stunning portraits that captures your authentic self. 
            </p>
            <button className="flex text-center px-6 py-3 rounded-md font-semibold text-[16px] text-white dark:text-black bg-linear-to-r dark:from-zinc-50 dark:to-zinc-100 from-zinc-900 to-zinc-800 shadow-sm hover:shadow-md dark:hover:shadow-white/15 hover:scale-[1.02] dark:border-black/5 border-white/5 transition-all duration-200 backdrop:blur-xs w-fit ease-in-out">
              Create Your Portrait 
            </button>
            <p className="text-[15px] text-center max-w-2xl mx-auto md:text-lg  text-black dark:text-white/70 font-light leading-relaxed mt-1 px-4 mb-8">No credit card required</p>
          </div>
        </div>
    </div>
  )
}
