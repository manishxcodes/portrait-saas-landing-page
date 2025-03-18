import { BentoGrid } from "./ui/BentoGrid"
import { Banner } from "./ui/Banner"

export const Features = () => {
  return (
    <div className=" text-white dark:text-white bg-white dark:bg-black w-full max-w-7xl flex flex-col items-center mx-auto mb-10">
            <Banner 
                title="Features made for you
"
                description="Elevate your personal brand with AI-powered portraits that capture your true essence and more." />

            <BentoGrid />


    </div>

  )
}


  