import React from 'react'

import bathroom from "../../../assets/images/home/offerBanner/Bathroom.png"
import decoration from "../../../assets/images/home/offerBanner/decoration.png"
import facilities from "../../../assets/images/home/offerBanner/facilities.png"
import coloring from "../../../assets/images/home/offerBanner/coloring.png"

function offerBanner(props) {
  const { } = props


  return (
    <div className="text-center flex items-center flex-col ">
      <div className="maxLayout px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
        <div className='w-full grid grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5 items-center justify-between'>
          <div className='relative col-span-12 md:col-span-6 h-full bg-[#E8A26E] rounded-xl flex items-center justify-end overflow-hidden'>
            <div className='flex flex-col absolute right-[5%]'>
              <div className=' text-[min(2.5vw,5vh)] sm:text-sm lg:text-base pl-[50%] flex flex-col items-start justify-center mb-2 leading-[160%]'>
                <span className='text-right' >تعمیرات حمام و دستشویی خانه‌ات را به ما بسپار</span>
              </div>
              <div className='bg-white rounded-md text-[10px] fcc py-1 max-w-[80px] text-[#E8A26E]'>
                مشاهده بیشتر...
              </div>
            </div>
            <div>
              <img src={decoration} alt='' />
            </div>
          </div>
          <div className='relative col-span-12 md:col-span-6 h-full bg-[#6EBDE6] rounded-xl flex items-center justify-end overflow-hidden'>
            <div className='flex flex-col absolute right-[5%]'>
              <div className=' text-[min(2.5vw,5vh)] sm:text-sm lg:text-base pl-[50%] flex flex-col items-start justify-center mb-2 leading-[160%]'>
                <span className='text-right' >تعمیرات حمام و دستشویی خانه‌ات را به ما بسپار</span>
              </div>
              <div className='bg-white rounded-md text-[10px] fcc py-1 max-w-[80px] text-[#6EBDE6]'>
                مشاهده بیشتر...
              </div>
            </div>
            <div>
              <img src={bathroom} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default offerBanner