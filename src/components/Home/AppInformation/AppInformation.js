import React from 'react'

// assets
import Appel from "../../../assets/images/home/AppInformation/Apple.svg"
import Android from "../../../assets/images/home/AppInformation/Android.svg"

function AppInformation() {
    return (
        <div className="text-center flex items-center flex-col py-10">
            <div className="h-[480px] max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
                <div className='backgroundAppInformation w-full h-full flex items-center justify-start'>
                    <div className='w-1/2 flex flex-col items-center justify-center'>
                        <span className='text-color-font-3 font-bold text-xl mb-10'>
                            اپلیکیشن موبایل کارگشا
                        </span>
                        <p className='text-color-font-2 text-sm px-20 leading-6 mb-16'>
                            شما می توانید به صورت کامل از تمام امکانات کارگشا در سوپر اپلیکیشن کارگشا استفاده کنید و در خواست های خودتان را در آنجا ثبت کنید .
                        </p>
                        <div className='text-white w-full fcc'>
                            <div className='bg-color-3 px-5 py-2 rounded-lg text-xs ml-3 fcc'>
                                دانلود اپلیکیشن IOS
                                <img className='w-5 mr-2' src={Appel} alt='دانلود اپلیکیشن IOS' />
                            </div>
                            <div className='bg-color-3 px-5 py-2 rounded-lg text-xs fcc'>
                                دانلود اپلیکیشن اندروید
                                <img className='w-5 mr-2' src={Android} alt='دانلود اپلیکیشن اندروید' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppInformation