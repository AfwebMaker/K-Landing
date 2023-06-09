import React from 'react'
// components
import Weblog from '../components/Home/weblog/Weblog.js'
import CarouselBanner from '../components/Home/carouselBanner/CarouselBanner.js'

export const Home = () => {

  return (
    <div>
      <CarouselBanner />
      <Weblog />
    </div>
  )
}
