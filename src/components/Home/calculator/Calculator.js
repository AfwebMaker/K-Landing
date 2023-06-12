import React from 'react'
//assets
import calculator from '../../../assets/images/home/calculator/calculator.png'

function Calculator() {
    return (

        <div className="relative h-[600px] md:h-0 md:pb-[46.15384%] xl:pb-0 xl:h-[600px]  text-center m-auto flex items-center justify-center">
            <div className="absolute maxHeightCalculator w-full h-full inset-0 maxLayout m-auto py-10 px-[20px] md:px-[32px] flex flex-col items-center justify-center">
                <div className='bg-white md:bg-[#EBEFED] w-full h-full rounded-xl flex flex-col md:flex-row overflow-hidden'>
                    <div className='w-full md:w-1/2 md:h-full px-0  md:p-[2%] lg:p-[3%] flex flex-col items-center md:items-start justify-center md:justify-around'>
                        <div className='flex items-start justify-center flex-col w-full'>
                            <span className='text-color-3 text-xl lg:text-2xl font-bold mb-4 text-center md:text-right w-full'>
                                طرح مالی کارگشا (لیزینگ)
                            </span>
                            <span className='flex text-xs lg:text-base pl-[6%] w-full text-center md:text-right font-light leading-5'>
                                در طرح مالی کارگشا، کارفرمایان می توانند با توجه به شرایط پرداخت خود، طبق قوانین و مقررات حاکم بر صنعت تسهیلات، هزینه اجرای پروژه خود را تامین کنند.
                            </span>
                        </div>
                        <div className='hidden md:flex'>
                            <img className='' src={calculator} alt="ماشین حساب" />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 md:h-full flex items-center justify-center md:justify-end mt-10 md:mt-0 md:p-[1%]'>
                        <div className='w-full h-[350px] md:h-full bg-[#EBEFED] shadow-lg md:bg-white rounded-lg flex items-center justify-center max-w-lg'>
                            
                            {/* <div className='w-full h-[50%]'>
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
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calculator