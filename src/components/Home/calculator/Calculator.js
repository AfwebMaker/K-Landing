import React, { useReducer, useRef } from 'react'
//assets
import calculator from '../../../assets/images/home/calculator/calculator.png'

const initialState = {
    paymentPeriod: 'sixMonths',
    paymentType: 'threeMonths',
    numberPayments: '3',
    rangeValue: 0,
    textBox: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'paymentPeriodHandler':
            return { ...state, paymentPeriod: action.value };
        case 'paymentTypeHandler':
            return { ...state, paymentType: action.value };
        case 'numberPaymentsHandler':
            return { ...state, numberPayments: action.value };
        case 'rangeValueHandler':
            return { ...state, rangeValue: action.value, textBox: action.value * 20000000 / 100 };
        case 'textBoxHandler':
            return { ...state, textBox: action.value, rangeValue: Math.ceil(action.value * 100 / 20000000) };
        default:
            return state
    }
}

function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const range = useRef('')

    //back ground of range
    function progressScript(value, type) {
        // const sliderValue = range.current.value;
        range.current.style.background = `linear-gradient(to right, #FF513D ${type === "textBox" ? value * 100 / 20000000 : value}%, #ccc ${type === "textBox" ? value * 100 / 20000000 : value}%)`;
    }

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
                        <div className='w-full h-[350px] md:h-full bg-[#EBEFED] shadow-lg md:bg-white rounded-lg flex items-center justify-center max-w-lg flex-col'>
                            <div className='w-full h-[80%] px-[4%] relative flex flex-col justify-around text-[10px] lg:text-sm'>
                                <div className='w-full flex items-center justify-between h-[15%]'>
                                    <span className='text-color-font-3'>دوره پرداخت</span>
                                    <div className='relative w-[35%] text-color-font-2 h-[60%] rounded-lg bg-white md:bg-color-1 flex items-center justify-center md:text-sm text-xs'>
                                        <span onClick={() => dispatch({ type: 'paymentPeriodHandler', value: 'sixMonths' })} className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${state.paymentPeriod === 'sixMonths' ? 'text-white' : 'text-color-font-2'}`}>شش ماه</span>
                                        <span onClick={() => dispatch({ type: 'paymentPeriodHandler', value: 'oneYear' })} className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${state.paymentPeriod === 'oneYear' ? 'text-white' : 'text-color-font-2'}`}>یکساله</span>
                                        <div className={`transition-all h-full w-1/2 bg-color-font-5 absolute rounded-lg ${state.paymentPeriod === 'oneYear' ? 'left-0' : 'left-[50%]'} `}></div>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between h-[15%]'>
                                    <span className='text-color-font-3'>نوع پرداخت</span>
                                    <div className='relative w-[35%] text-color-font-2 h-[60%] rounded-lg bg-white md:bg-color-1  flex items-center justify-center lg:text-sm text-xs'>
                                        <span onClick={() => dispatch({ type: 'paymentTypeHandler', value: 'Instant' })} className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${state.paymentType === 'Instant' ? 'text-white' : 'text-color-font-2'}`}>آنی</span>
                                        <span onClick={() => dispatch({ type: 'paymentTypeHandler', value: 'threeMonths' })} className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${state.paymentType === 'threeMonths' ? 'text-white' : 'text-color-font-2'}`}>سه ماه</span>
                                        <div className={`transition-all h-full w-1/2 bg-color-font-5 absolute rounded-lg ${state.paymentType === 'threeMonths' ? 'left-0' : 'left-[50%]'} `}></div>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between h-[15%]'>
                                    <span className='text-color-font-3'>تعداد پرداخت ها (فقره)</span>
                                    <div className='relative w-[52.5%] text-color-font-2 h-[60%] rounded-lg bg-white md:bg-color-1  flex items-center justify-center'>
                                        <span onClick={() => dispatch({ type: 'numberPaymentsHandler', value: '2' })} className={`text-[10px] lg:text-sm w-1/3 h-full z-10 fcc cursor-pointer ${state.numberPayments === '2' ? 'text-white' : 'text-color-font-2'}`}>۲ فقره</span>
                                        <span onClick={() => dispatch({ type: 'numberPaymentsHandler', value: '3' })} className={`text-[10px] lg:text-sm w-1/3 h-full z-10 fcc cursor-pointer ${state.numberPayments === '3' ? 'text-white' : 'text-color-font-2'}`}>۳ فقره</span>
                                        <span onClick={() => dispatch({ type: 'numberPaymentsHandler', value: '6' })} className={`text-[10px] lg:text-sm w-1/3 h-full z-10 fcc cursor-pointer ${state.numberPayments === '6' ? 'text-white' : 'text-color-font-2'}`}>٦ فقره</span>
                                        <div className={`transition-all h-full w-1/3 bg-color-font-5 absolute rounded-lg ${state.numberPayments === '6' ? 'left-0' : state.numberPayments === '3' ? 'left-1/3' : 'left-2/3'}`}></div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col items-center justify-around h-[40%]'>
                                    <span className='text-color-font-3 flex w-full h-[20%]'>مبلغ در خواستی</span>
                                    <div style={{ direction: 'ltr' }} className='relative w-full h-[30%] fcc'>
                                        <input
                                            value={state.rangeValue}
                                            ref={range}
                                            onChange={(e) => { progressScript(e.target.value, "range"); dispatch({ type: 'rangeValueHandler', value: e.target.value }) }}
                                            className='cursor-pointer z-10 slider w-full absolute'
                                            type="range"
                                            step={1}
                                        />

                                        {/* <div style={{ left: `${state.rangeValue}%` }} className='absolute left-0 top-[-10px] text-[10px] font-light text-color-2 w-auto whitespace-nowrap'>
                                            {28300} تومان
                                        </div> */}
                                    </div>
                                    <div className='relative w-full h-[30%]'>
                                        <input
                                            value={state.textBox}
                                            onChange={(e) => {progressScript(e.target.value, "textBox"); dispatch({ type: 'textBoxHandler', value: e.target.value }) }} 
                                            className='focus:outline-none w-full h-full rounded-lg bg-[#DCDDDE] pr-[4%]' placeholder='به طور مثال ۲۳,۹۸۰,۰۰۰'
                                            type="number"
                                        />
                                        <div className='text-white w-[20%] h-full absolute left-0 bg-color-font-5 fcc top-0 rounded-lg cursor-default'>
                                            تومان
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full h-[20%] text-color-font-3 flex flex-col justify-around py-[2%] px-[4%] border-t-2 border-dashed border-t-color-2 text-[10px] md:text-[1.2vw] lg:text-sm'>
                                <div className='flex justify-between items-center'>
                                    <span>کمیسیون لیزینگ :</span>
                                    <span>۷,۰۰۰,۰۰۰ تومان</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>مبلغ برای هر فقره چک :</span>
                                    <span>۱۲,۰۰۰,۰۰۰ تومان</span>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-white md:bg-[#EBEFED] absolute top-[-17px] right-[-16px]'></div>
                                <div className='w-8 h-8 rounded-full bg-white md:bg-[#EBEFED] absolute top-[-17px] left-[-16px]'></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calculator