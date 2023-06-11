import React from 'react'
import Categories from './Categories'
// components


function ProductsCategorization() {
    return (
        <div className="text-center flex items-center flex-col py-10">
            <div className="maxLayout px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
                <span className='text-color-font-3 font-bold text-xl mb-10 flex flex-col items-center jus'>
                    دسته بندی خدمات ساختمانی
                </span>
                <Categories />
            </div>
        </div>
    )
}

export default ProductsCategorization