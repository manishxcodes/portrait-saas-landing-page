import { easeOut } from 'motion'
import interfacePhoto from '../assets/asset-0.png'
import { motion } from 'motion/react'

const Demo = () => {
  return (
    <motion.div
            className="w-full"
            initial={{y:50, opacity:0}}
            animate={{y:0, opacity: 1}}
            transition={{
                duration: 0.3,
                delay: 0.5,
                ease: easeOut      
            }}>
        <div className="w-full flex items-center justify-center mx-auto bg-white dark:bg-black">
            <div className="max-w-[300px] sm:max-w-[600px]  xl:max-w-[800px] w-full mx-auto flex justify-center py-10 mb-20 lg:py-16">
            <div className="object-contain object-center">
                <img src={interfacePhoto} alt="interfacePhoto" />
            </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Demo