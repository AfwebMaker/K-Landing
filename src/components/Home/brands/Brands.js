import React from 'react'
//react router dom
import { Link } from 'react-router-dom'
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
          <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
            <img src={AcademyMedium} alt='برند آکادمی' />
          </Link>
          <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
            <img src={AutoSazeMedium} alt='برند اتوسازه' />
          </Link>
          <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
            <img src={KargoshaMedium} alt='برند اتو سازه' />
          </Link>
          <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
            <img src={MekaMedium} alt='برند مکا' />
          </Link>
          <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
            <img src={MetriChandMedium} alt='برند متری چند' />
          </Link>
          <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
            <img src={SindbadMedium} alt='برند سیندباد' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Brands;