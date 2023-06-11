import React from 'react'

import bathroom from "../../../assets/images/home/offerBanner/Bathroom.png"
import decoration from "../../../assets/images/home/offerBanner/decoration.png"
import facilities from "../../../assets/images/home/offerBanner/facilities.png"
import coloring from "../../../assets/images/home/offerBanner/coloring.png"

function offerBanner() {
  return (
    <div className="text-center flex items-center flex-col pt-10 pb-16">
      <div className="maxLayout px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
        <div className='w-full h-[220px] flex items-center justify-between'>
          <div className='relative w-[49%] h-full bg-[#E8A26E] rounded-2xl flex items-center justify-end overflow-hidden'>
            <div className='flex flex-col absolute right-10'>
              <div className=' text-base flex flex-col items-start justify-center mb-5 leading-8'>
                <span>دکراسیون خانه‌ات رو</span>
                <span className='font-extrabold'>گرم و صمیمی</span>
                <span>کن</span>
              </div>
              <div className='bg-white rounded-md text-xs fcc py-2 max-w-[100px] text-[#E8A26E]'>
                مشاهده بیشتر...
              </div>
            </div>
            <div>
              <img src={decoration} alt='' />
            </div>
          </div>
          <div className='relative w-[49%] h-full bg-[#6EBDE6] rounded-2xl flex items-center justify-end overflow-hidden'>
            <div className='flex flex-col absolute right-10'>
              <div className=' text-base flex flex-col items-start justify-center mb-5 leading-8'>
                <span>تعمیرات</span>
                <span className='font-extrabold'>حمام و دستشویی</span>
                <span>خانه‌ات را به ما بسپار</span>
              </div>
              <div className='bg-white rounded-md text-xs fcc py-2 max-w-[100px] text-[#6EBDE6]'>
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