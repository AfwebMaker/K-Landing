import React from 'react'
//assets
import calculator from '../../../assets/images/home/calculator/calculator.png'

function Calculator() {
    return (

        <div className="text-center flex items-center flex-col pt-10 pb-16">
            <div className="maxLayout mx-5 md:px-[32px] w-full h-[600px] flex flex-col items-center justify-center">
                <div className='bg-[#EBEFED] w-full h-full rounded-xl flex'>
                    <div className='w-1/2 h-full pr-10 py-8 flex flex-col items-start justify-between'>
                        <div className='flex items-start flex-col'>
                            <span className='text-color-3 text-3xl mb-6'>طرح مالی کارگشا (لیزینگ)</span>
                            <span className='flex text-sm w-[510px] text-right font-light'>
                                در طرح مالی کارگشا، کارفرمایان می توانند با توجه به شرایط پرداخت خود، طبق قوانین و مقررات حاکم بر صنعت تسهیلات، هزینه اجرای پروژه خود را تامین کنند.
                            </span>
                        </div>
                        <div className=''>
                            <img className='' src={calculator} alt="ماشین حساب" />
                        </div>
                    </div>
                    <div className='w-1/2 h-full p-4'>
                        <div className='flex flex-col bg-white h-full rounded-xl py-[5%] px-[10%]'>
                            <div className='w-full h-[50%]'>
                                <div className='w-full h-1/3 flex items-center justify-between pb-6'>
                                    <span className='text-color-font-3'>دوره پرداخت</span>
                                    <div className='w-[20%] bg-red-700 h-[80%]'>

                                    </div>
                                </div>
                                <div className='w-full h-1/3 flex items-center justify-between pb-6'>
                                    <span className='text-color-font-3'>نوع پرداخت</span>
                                    <div className='w-[20%] bg-red-700 h-[80%]'>

                                    </div>
                                </div>
                                <div className='w-full h-1/3 flex items-center justify-between pb-6'>
                                    <span className='text-color-font-3'>تعداد پرداخت ها (فقره)</span>
                                    <div className='w-[20%] bg-red-700 h-[80%]'>

                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[25%] flex items-center justify-between pb-6'>
                                <span className='text-color-font-3'>مبلغ در خواستی</span>
                                <div className='w-[20%] bg-red-700 h-[80%]'>

                                </div>
                            </div>
                            <div className='w-full h-[25%] flex items-center justify-between pb-6'>
                                <span className='text-color-font-3'>تعداد پرداخت ها (فقره)</span>
                                <div className='w-[20%] bg-red-700 h-[80%]'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calculator