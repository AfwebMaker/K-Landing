import React from 'react'
// components
import Weblog from '../components/Home/weblog/Weblog.js'
import Hero from '../components/Home/hero/Hero.js'
import CarouselBanner from '../components/Home/carouselBanner/CarouselBanner.js'
import Questions from '../components/Home/questions/Questions.js'
import AppInformation from '../components/Home/AppInformation/AppInformation.js'
import Brands from '../components/Home/brands/Brands.js'

export const Home = () => {

  return (
    <div>
      <div className='h-[100px] w-full bg-black'></div>
      <Hero />
      <Brands />
      <CarouselBanner />
      <Questions />
      <AppInformation />
      <Weblog />
    </div>
  )
}
