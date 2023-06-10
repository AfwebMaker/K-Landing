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
    <div className="text-center flex items-center flex-col py-10">
      <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
        <span className='text-color-font-3 font-bold text-xl mb-14'>
          یک پلتفرم، برای تمامی نیاز ها
        </span>
        <div className='flex items-center justify-around w-full '>
          <div>
            <img src={AcademyMedium} alt='' />
          </div>
          <div>
            <img src={AutoSazeMedium} alt='' />
          </div>
          <div>
            <img src={KargoshaMedium} alt='' />
          </div>
          <div>
            <img src={MekaMedium} alt='' />
          </div>
          <div>
            <img src={MetriChandMedium} alt='' />
          </div>
          <div>
            <img src={SindbadMedium} alt='' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Brands;