import React from 'react'
// components
import Weblog from '../components/Home/weblog/Weblog.js'
import Hero from '../components/Home/hero/Hero.js'
import S from '../components/Home/hero/SplitWithImage.js'
import CarouselBanner from '../components/Home/carouselBanner/CarouselBanner.js'
import Questions from '../components/Home/questions/Questions.js'
import AppInformation from '../components/Home/appInformation/AppInformation.js'
import Brands from '../components/Home/brands/Brands.js'
import OfferBanner from '../components/Home/offerBanner/OfferBanner.js'
import ProductsCategorization from '../components/Home/productsCategorization/ProductsCategorization.js'

import Calculator from '../components/Home/calculator/Calculator.js'

export const Home = () => {

  return (
    <div>
      <div className='h-[100px] w-full bg-black'></div>
      {/* Hero no responsive */}
      <Hero />
      {/* <S /> */}
      <Brands />

      {/* CarouselBanner no responsive */}
      <CarouselBanner />

      {/* OfferBanner no responsive */}
      <OfferBanner />

      <ProductsCategorization />

      {/* OfferBanner no responsive */}
      <OfferBanner />

      <Questions />
      <AppInformation />
      <Calculator />
      <Weblog />
    </div>
  )
}
