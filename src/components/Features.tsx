import asset1 from '../assets/asset-1.png'
import asset2 from '../assets/asset-2.png'
import asset3 from '../assets/asset-3.png'
import asset4 from '../assets/asset-4.png'

export const Features = () => {
  return (
    <div className=" text-white dark:text-white bg-white dark:bg-black w-full max-w-7xl flex flex-col items-center mx-auto">
            <div className="max-w-4xl items-center flex flex-col  w-full py-10">
            <h1 className=" text-xl font-semibold md:text-5xl  text-center max-w-[650px] w-full  text-black dark:text-white leading-relaxed mt-4 px-4 mb-2 tracking-tight">Features made for you</h1>
            <p className="text-[18px] text-center max-w-[650px] w-full md:text-[18px] text-black/70 dark:text-white/70 leading-relaxed mt-2 px-4 ">
            Elevate your personal brand with AI-powered portraits that capture your true essence and more. 
                </p>
            </div>

        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6 mb-8 dark:bg-black">
            <div className="w-full md:w-[60%]">
            <div className="h-full p-6 rounded-2xl relative dark:bg-neutral-900 bg-neutral-100 dark:border-white/10 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)]">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Edit, retouch and enhance</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                All assets in one place. Everything you need to create your portrait.
                </p>
                <div className="relative h-52 w-full">
                <img className="object-cover rounded-xl absolute h-[100%] w-[100%] top-0 bottom-0 left-0 right-0" src={asset1} alt="feature-1" />
                </div>
            </div>
            </div>
            <div className="w-full md:w-[40%] ">
            <div className="h-full p-6 rounded-2xl relative dark:bg-neutral-900 bg-neutral-100 dark:border-white/10 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)]">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Create video</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Create video with consecutive frames of images.
                </p>
                <div className="relative h-52 w-full">
                <img className="object-cover rounded-xl absolute h-[100%] w-[100%] top-0 bottom-0 left-0 right-0" src={asset2} alt="feature-1" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
