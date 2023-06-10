import React from 'react'
//assets
import banner from '../../../assets/images/home/hero/Banner.png'
import loader from '../../../assets/images/home/hero/Loader.svg'
import Paint_Roller_Icon from '../../../assets/images/home/hero/Paint_Roller_Icon.svg'
import Tools_Icon from '../../../assets/images/home/hero/Tools_Icon.svg'
import Drill_Icon from '../../../assets/images/home/hero/Drill_Icon.svg'
import Jackhammer from '../../../assets/images/home/hero/Jackhammer.svg'
import Screw_Icon from '../../../assets/images/home/hero/Screw_Icon.svg'
import Helmet_Icon from '../../../assets/images/home/hero/Helmet_Icon.svg'
import search from '../../../assets/images/header/Search.svg'

function Hero() {
    return (
        <div className='w-full fcc relative h-[calc(100vh-100px)]'>
            <div className='maxLayout h-full w-full relative'>
                <div className='flex items-start justify-end h-full'>
                    <div className='flex justify-start items-start flex-col text-3xl w-[35%] absolute right-12 top-36'>
                        <div className='flex mb-3'>
                            <span className='fcc ml-2'>
                                ثبت درخواست خدمات
                            </span>
                            <span className='text-color-font-3 fcc'>
                                ساختمانی
                            </span>
                        </div>

                        <span className='text-xs font-light mb-[4%]'>ثبت درخواست خدمات نقاشی ، بنایی ، گچکاری و ...</span>

                        <div className='fcc h-10 w-full'>
                            <div className='w-9 h-9 bg-color-font-3 absolute left-0 ml-1 rounded-full fcc p-[10px]'>
                                <svg className='z-10' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.74377 0C3.47153 0 0 3.47153 0 7.74377C0 12.016 3.47153 15.4875 7.74377 15.4875C9.43416 15.4875 10.9964 14.9431 12.2705 14.0214L18.2633 20L19.5445 18.7189L13.6228 12.7829C14.7865 11.427 15.4875 9.66726 15.4875 7.74377C15.4875 3.47153 12.016 0 7.74377 0ZM7.74377 0.911032C11.5231 0.911032 14.5765 3.96441 14.5765 7.74377C14.5765 11.5231 11.5231 14.5765 7.74377 14.5765C3.96441 14.5765 0.911032 11.5231 0.911032 7.74377C0.911032 3.96441 3.96441 0.911032 7.74377 0.911032Z" fill="#ffffff" />
                                </svg>
                            </div>
                            <input className='peer pr-4 font-thin text-base w-full h-full focus:outline-0 boxShadowCustom rounded-full' type="text" />
                            <div className='peer-focus:animate-ping w-9 h-9 z-0 absolute left-1 rounded-full fcc p-[10px] bg-color-font-3'></div>
                        </div>
                    </div>
                    <img className='object-contain h-full left-0 top-0' src={banner} alt="بنر" />
                </div>

                <div className='absolute w-[90%] bg-[#ffffff3f] backdrop-blur h-[120px] bottom-16 right-0 left-0 m-auto rounded-xl boxShadowCustom flex items-center justify-around px-[2%]'>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={loader} alt="تخریب و خاکبرداری" />
                        <span className='fcc text-sm font-light '>تخریب و خاکبرداری</span>
                    </div>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={Paint_Roller_Icon} alt="خدمات فوری" />
                        <span className='fcc text-sm font-light '>خدمات فوری</span>
                    </div>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={Tools_Icon} alt="تعمیر و نگهداری" />
                        <span className='fcc text-sm font-light '>تعمیر و نگهداری</span>
                    </div>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={Drill_Icon} alt="تاسیسات" />
                        <span className='fcc text-sm font-light '>تاسیسات</span>
                    </div>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={Jackhammer} alt="امور ساختمانی" />
                        <span className='fcc text-sm font-light '>امور ساختمانی</span>
                    </div>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={Screw_Icon} alt="اجرای سازه" />
                        <span className='fcc text-sm font-light '>اجرای سازه</span>
                    </div>
                    <div className='fcc flex-col p-4 h-full text-center'>
                        <img className='h-[80%]' src={Helmet_Icon} alt="بازسازی" />
                        <span className='fcc text-sm font-light '>بازسازی</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero