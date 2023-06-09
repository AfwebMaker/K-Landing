import React from 'react'
// components
import Weblog from '../components/Home/weblog/Weblog.js'
import Hero from '../components/Home/hero/Hero.js'

export const Home = () => {

  return (
    <div>
      <div className='h-[100px] w-full bg-black'></div>
      <Hero />
      <Weblog />
    </div>
  )
}
