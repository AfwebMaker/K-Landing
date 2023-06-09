import React from 'react'
//assets
import banner from '../../../assets/images/home/hero/Banner.png'

function Hero() {
    return (
        <div className='w-full fcc relative h-[calc(100vh-100px)] bg-white min-h-[600px] max-h-[700px]'>
            <div className='maxLayout h-full w-full relative'>
                <img className='absolute object-contain h-full left-0 top-0' src={banner} alt="بنر" />
                <div className='bg'>

                </div>
            </div>
        </div>
    )
}

export default Hero