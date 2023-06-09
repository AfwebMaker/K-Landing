import React from 'react'
// components
import Carousel from './Carousel'

function CarouselBanner() {
    return (
        <div className="flex items-center flex-col justify-center py-10">
            <div className="maxLayout px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center overflow-hidden bg-red-400 h-96">
                <Carousel />
            </div>
        </div>
    )
}

export default CarouselBanner