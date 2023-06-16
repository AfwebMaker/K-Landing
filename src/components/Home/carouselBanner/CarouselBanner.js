import React from 'react'
// components
import Carousel from './Carousel'

function CarouselBanner() {
    return (
        <div className="relative h-[250px] md:h-0 md:pb-[28%] lg:pb-0 lg:h-[300px] text-center m-auto flex items-center justify-center">
            <div className="absolute maxHeightCarousel w-full h-full inset-0 maxLayout m-auto py-10 px-[20px] md:px-[32px] flex flex-col items-center justify-center">
                <Carousel />
            </div>
        </div>
    )
}

export default CarouselBanner