import interfacePhoto from '../assets/asset-0.png'

const Demo = () => {
  return (
    <div className="w-full flex items-center justify-center mx-auto bg-white dark:bg-black">
        <div className="max-w-[300px] sm:max-w-[600px]  xl:max-w-[800px] w-full mx-auto flex justify-center py-10 mb-20 lg:py-16">
          <div className="object-contain object-center">
            <img src={interfacePhoto} alt="interfacePhoto" />
          </div>
        </div>
    </div>
  )
}

export default Demo