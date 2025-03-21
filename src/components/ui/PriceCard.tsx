import { CheckIcon } from "./Icons"
import { motion } from "motion/react"

interface PriceCardProps {
    header: string
    price: string
    description: string
    buttonText: string
    feature: string[]
}

export const PriceCard = ({header, price, description, buttonText, feature }: PriceCardProps) => {
  return (
    <motion.div 
        initial={{opacity:0, y:30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.3, ease: "easeOut"}}
        viewport={{once: true, amount: 0.1}}
    className="bg-zinc-50 dark:bg-zinc-950 shadow-sm hover:shadow-md border border-black/5 dark:border-white/10 transition-all duration-100 backdrop:blur-xs px-4 pb-8 rounded-3xl w-full mb-4">
        <div className="px-4 py-2 flex justify-between mt-4 w-full">
            <h1 className="text-xl text-black dark:text-white font-semibold font-stretch-120%">{header}</h1>
        </div>
        <div className="px-4 py-1 flex items-center w-full mb-4">
            <h1 className="font-bold text-4xl text-black dark:text-white"> {price}</h1> 
            <span className="text-[16px] text-neutral-500">&nbsp; /month</span>
        </div>
        <div className="px-4  flex items-center w-full mb-4">
            <p className="text-[17px] max-w-[650px] w-full md:text-[18px] text-black/60 dark:text-white/60 leading-relaxed ">
            {description}
            </p>
        </div>
        <div className="px-4  flex items-center w-full mb-4">
            <button className="flex items-center justify-center px-4 py-4  leading-none text-black border border-black/3 dark:text-white text-sm rounded-xl bg-neutral-100  dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-100 backdrop:blur-xs hover:shadow-sm  text-nowrap cursor-pointer w-full">
               {buttonText}
            </button>
        </div>
        <div id="feature" className="px-4 flex items-center w-full mt-8 relative">
            <div className="p-4 flex flex-col space-y-3 w-full  dark:text-neutral-500 rounded-2xl border border-black/7 dark:border-white/4 h-80">
                {feature.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}
