import React from 'react'
// components
import Weblog from '../components/Home/weblog/Weblog.js'
import Hero from '../components/Home/hero/Hero.js'
import CarouselBanner from '../components/Home/carouselBanner/CarouselBanner.js'
import Questions from '../components/Home/questions/Questions.js'
import AppInformation from '../components/Home/appInformation/AppInformation.js'
import Brands from '../components/Home/brands/Brands.js'
import OfferBanner from '../components/Home/offerBanner/OfferBanner.js'
import ProductsCategorization from '../components/Home/productsCategorization/ProductsCategorization.js'


export const Home = () => {

  return (
    <div>
      <div className='h-[100px] w-full bg-black'></div>
      <Hero />
      <Brands />
      <CarouselBanner />
      <OfferBanner />
      <ProductsCategorization />
      <OfferBanner />
      <Questions />
      <AppInformation />
      <Weblog />
    </div>
  )
}
