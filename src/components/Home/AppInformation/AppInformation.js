import React from 'react'

// assets
import Appel from "../../../assets/images/home/AppInformation/Apple.svg"
import Android from "../../../assets/images/home/AppInformation/Android.svg"
import banner from "../../../assets/images/home/AppInformation/AppInformationImages.png"


function AppInformation() {
    return (
        <div className="text-center flex items-center flex-col py-10 h-[400px] md:h-auto">
            <div className="maxLayout px-[20px] md:px-[32px] w-full h-full flex flex-col items-center justify-center">
                <div className=' w-full h-full flex items-center justify-start'>
                    <div className='relative w-full h-full'>
                        <div className='hidden md:flex flex-col items-center justify-center'>
                            <img className='flex' src={banner} alt='' />
                        </div>
                        <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center absolute top-0 md:pr-5'>
                            <span className='text-color-font-3 font-bold text-lg md:text-xl mb-5 md:mb-5'>
                                اپلیکیشن موبایل کارگشا
                            </span>
                            <p className='text-color-font-2 text-sm sm:px-14 md:px-5 lg:px-10 leading-6 mb-10 md:mb-10'>
                                شما می توانید به صورت کامل از تمام امکانات کارگشا در سوپر اپلیکیشن کارگشا استفاده کنید و در خواست های خودتان را در آنجا ثبت کنید .
                            </p>
                            <div className='text-white w-full fcc flex-col md:flex-row gap-y-5 px-10 md:px-3'>
                                <div className='bg-color-3 shadow-xl max-w-[200px] w-full py-3 rounded-lg text-xs md:ml-3 fcc'>
                                    دانلود اپلیکیشن IOS
                                    <img className='w-5 mr-2' src={Appel} alt='دانلود اپلیکیشن IOS' />
                                </div>
                                <div className='bg-color-3 shadow-xl max-w-[200px] w-full py-3 rounded-lg text-xs fcc'>
                                    دانلود اپلیکیشن اندروید
                                    <img className='w-5 mr-2' src={Android} alt='دانلود اپلیکیشن اندروید' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppInformation