import React from 'react'
//assets
import banner from '../../../assets/images/home/hero/Banner.png'

function Hero() {
    return (
        <div className='relative h-[calc(100vh-100px)] bg-white min-h-[400px]'>
            <img className='absolute h-full left-0' src={banner} alt="بنر" />
            <div className='bg'>

            </div>
        </div>
    )
}

export default Hero