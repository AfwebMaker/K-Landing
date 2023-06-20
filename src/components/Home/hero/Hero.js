import React from 'react'
//react router dom
// import { Link } from 'react-router-dom'
//assets
import heroImage from '../../../assets/images/home/hero/heroImage.png'
import loader from '../../../assets/images/home/hero/Loader.svg'
import Paint_Roller_Icon from '../../../assets/images/home/hero/Paint_Roller_Icon.svg'
import Tools_Icon from '../../../assets/images/home/hero/Tools_Icon.svg'
import Drill_Icon from '../../../assets/images/home/hero/Drill_Icon.svg'
import Jackhammer from '../../../assets/images/home/hero/Jackhammer.svg'
import Screw_Icon from '../../../assets/images/home/hero/Screw_Icon.svg'
import Helmet_Icon from '../../../assets/images/home/hero/Helmet_Icon.svg'
// react router dom
import { Link } from 'react-router-dom'
// components
import Example from './Example'

function Hero() {
    return (
        <div className="text-center flex items-center flex-col pt-10">
            <div className="relative maxLayout grid grid-cols-12 px-[20px] md:px-[32px] w-full">
                <div className='col-span-12 lg:col-span-6 lg:pt-32 lg:pr-28 flex flex-col items-center lg:items-start justify-start text-3xl'>
                    <div className='flex mb-5 text-xl md:text-2xl xl:text-3xl'>
                        <span className='fcc ml-2'>
                            ثبت درخواست خدمات
                        </span>
                        <span className='text-color-font-3 fcc'>
                            ساختمانی
                        </span>
                    </div>
                    <span className='text-xs font-light mb-10'>
                        ثبت درخواست خدمات نقاشی ، بنایی ، گچکاری و ...
                    </span>
                    <div className='fcc h-10 w-full relative max-w-lg'>
                        <div className='w-9 h-9 bg-color-font-3 absolute cursor-pointer left-0 ml-1 rounded-full fcc p-[10px]'>
                            <svg className='z-10' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.74377 0C3.47153 0 0 3.47153 0 7.74377C0 12.016 3.47153 15.4875 7.74377 15.4875C9.43416 15.4875 10.9964 14.9431 12.2705 14.0214L18.2633 20L19.5445 18.7189L13.6228 12.7829C14.7865 11.427 15.4875 9.66726 15.4875 7.74377C15.4875 3.47153 12.016 0 7.74377 0ZM7.74377 0.911032C11.5231 0.911032 14.5765 3.96441 14.5765 7.74377C14.5765 11.5231 11.5231 14.5765 7.74377 14.5765C3.96441 14.5765 0.911032 11.5231 0.911032 7.74377C0.911032 3.96441 3.96441 0.911032 7.74377 0.911032Z" fill="#ffffff" />
                            </svg>
                        </div>
                        <input
                            className='peer pr-[75px] pl-11 font-thin text-xs sm:text-sm w-full h-full focus:outline-0 boxShadowCustom rounded-full'
                            placeholder='خدمت ساختمانی که به دنبال آن هستید را وارد کنید.'
                            type="text"
                        />
                        <Example/>
                        <div className='peer-focus:animate-ping w-9 h-9 z-0 absolute left-1 rounded-full fcc p-[10px] bg-color-font-3'></div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6 fcc '>
                    <img className='object-contain h-full left-0 top-0 drop-shadow-2xl' src={heroImage} alt="بنر" />
                </div>
                <div className='sm:absolute sm:bottom-10 w-[95%] max-w-[1000px] left-0 right-0 m-auto col-span-12 backdrop-filter backdrop-blur-xl overflow-x-scroll hideScroll h-[120px] rounded-xl shadow-xl'>
                    <div className='w-[1000px] h-full flex'>
                        <Link to="#" className='fcc flex-col px-2 py-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={loader} alt="تخریب و خاکبرداری" />
                            <span className='fcc mt-2 text-xs font-light h-[20%]'>تخریب و خاکبرداری</span>
                        </Link>
                        <Link to="#" className='fcc flex-col px-2 py-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={Paint_Roller_Icon} alt="خدمات فوری" />
                            <span className='fcc mt-2 text-xs font-light '>خدمات فوری</span>
                        </Link>
                        <Link to="#" className='fcc flex-col p-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={Tools_Icon} alt="تعمیر و نگهداری" />
                            <span className='fcc mt-2 text-sm font-light '>تعمیر و نگهداری</span>
                        </Link>
                        <Link to="#" className='fcc flex-col p-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={Drill_Icon} alt="تاسیسات" />
                            <span className='fcc mt-2 text-sm font-light '>تاسیسات</span>
                        </Link>
                        <Link to="#" className='fcc flex-col p-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={Jackhammer} alt="امور ساختمانی" />
                            <span className='fcc mt-2 text-sm font-light'>امور ساختمانی</span>
                        </Link>
                        <Link to="#" className='fcc flex-col p-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={Screw_Icon} alt="اجرای سازه" />
                            <span className='fcc mt-2 text-sm font-light '>اجرای سازه</span>
                        </Link>
                        <Link to="#" className='fcc flex-col p-4 h-full w-[150px] text-center'>
                            <img className='h-[80%]' src={Helmet_Icon} alt="بازسازی" />
                            <span className='fcc mt-2 text-sm font-light '>بازسازی</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero