import asset1 from '../assets/asset-1.png'
import asset2 from '../assets/asset-2.png'
import asset3 from '../assets/asset-3.png'
import asset4 from '../assets/asset-4.png'
import { motion } from 'motion/react'


export const BentoGrid = () => {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col  gap-6 mb-8 dark:bg-black px-4">
    <div
    className='flex flex-col md:flex-row gap-6 w-full '>
        <div
        className="w-full md:w-[60%]">
            <motion.div
            initial={{ opacity: 0, y: 30 }}  // Start invisible & move up
            whileInView={{ opacity: 1, y: 0 }}  // Animate to visible
            transition={{ duration: 0.3, ease: "easeOut" }}  // Smooth animation
            viewport={{ once: true, amount: 0.4 }} 
             className="h-full p-6 rounded-2xl relative dark:bg-neutral-900 bg-neutral-100 border border-neutral-200 dark:border-neutral-700 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)]" id="feature-1">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Edit, retouch and enhance</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                All assets in one place. Everything you need to create your portrait.
                </p>
                <div className="relative h-52 w-full object-center object-contain flex justify-center">
                <img className="object-cover obeject-contain rounded-xl absolute h-[100%] w-full" src={asset1} alt="feature-1" />
                </div>
            </motion.div>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}  // Start invisible & move up
        whileInView={{ opacity: 1, y: 0 }}  // Animate to visible
        transition={{ delay: 0.2,duration: 0.3, ease: "easeOut" }}  // Smooth animation
        viewport={{ once: true, amount: 0.4 }} 
        className="w-full md:w-[40%] ">
            <div className="h-full p-6 rounded-2xl relative dark:bg-neutral-900 bg-neutral-100 border border-neutral-200 dark:border-neutral-700 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)]" id="feature-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Create video</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Create video with consecutive frames of images.
                </p>
                <div className="relative h-52 w-full object-center object-contain flex justify-center">
                <img className="object-cover obeject-contain rounded-xl absolute h-[100%]" src={asset2} alt="feature-1" />
                </div>
            </div>
        </motion.div>
    </div>
    <div className='flex flex-col md:flex-row gap-6 w-full '>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}  // Start invisible & move up
        whileInView={{ opacity: 1, y: 0 }}  // Animate to visible
        transition={{ duration: 0.3, ease: "easeOut" }}  // Smooth animation
        viewport={{ once: true, amount: 0.4 }} 
        className="w-full md:w-[50%] ">
            <div className="h-full p-6 rounded-2xl relative dark:bg-neutral-900 bg-neutral-100 border border-neutral-200 dark:border-neutral-700 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)]" id="feature-3">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Work in a team environment</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Edit, validate and enhance your portraits with your team.
                </p>
                <div className="relative h-96 w-full object-center object-contain flex justify-center">
                <img className="object-cover obeject-contain rounded-xl absolute h-[100%]" src={asset3} alt="feature-1" />
                </div>
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 30 }}  // Start invisible & move up
        whileInView={{ opacity: 1, y: 0 }}  // Animate to visible
        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}  // Smooth animation
        viewport={{ once: true, amount: 0.4 }} 
        className="w-full md:w-[50%] ">
            <div className="h-full p-6 rounded-2xl relative dark:bg-neutral-900 bg-neutral-100 border border-neutral-200 dark:border-neutral-700 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)]" id="feature-4">
                <h2 className="text-2xl font-semibold text-black dark:text-white">Project discussion and feedback</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Discuss your portraits with your team.
                </p>
                <div className="relative h-96 w-full object-center object-contain flex justify-center">
                <img className="object-cover obeject-contain rounded-xl absolute h-[100%]" src={asset4} alt="feature-1" />
                </div>
            </div>
        </motion.div>
    </div>
</div>
  )
}
