import React from 'react'
// assets
import AcademyMedium from "../../../assets/images/home/brands/Academy Medium.svg"
import AutoSazeMedium from "../../../assets/images/home/brands/Auto Saze Medium.svg"
import KargoshaMedium from "../../../assets/images/home/brands/Kargosha Medium.svg"
import MekaMedium from "../../../assets/images/home/brands/Meka Medium.svg"
import MetriChandMedium from "../../../assets/images/home/brands/Metri Chand Medium.svg"
import SindbadMedium from "../../../assets/images/home/brands/Sindbad Medium.svg"

function Brands() {
  return (
    <div className="text-center flex items-center flex-col pt-10">
      <div className="maxLayout px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
        <span className='text-color-font-3 font-bold text-xl mb-8'>
          یک پلتفرم، برای تمامی نیاز ها
        </span>
        <div className='grid grid-cols-12 items-center justify-between w-full h-full '>
          <div className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5'>
            <img src={AcademyMedium} alt='برند آکادمی' />
          </div>
          <div className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5'>
            <img src={AutoSazeMedium} alt='برند اتوسازه' />
          </div>
          <div className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5'>
            <img src={KargoshaMedium} alt='برند اتو سازه' />
          </div>
          <div className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5'>
            <img src={MekaMedium} alt='برند مکا' />
          </div>
          <div className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5'>
            <img src={MetriChandMedium} alt='برند متری چند' />
          </div>
          <div className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5'>
            <img src={SindbadMedium} alt='برند سیندباد' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Brands;