import React, { useEffect } from 'react'
// services
// import { serviceBanner } from '../services/service-banner';
// components
import Weblog from '../components/Home/weblog/Weblog.js'
import Hero from '../components/Home/hero/Hero.js'
import CarouselBanner from '../components/Home/carouselBanner/CarouselBanner.js'
import Questions from '../components/Home/questions/Questions.js'
import AppInformation from '../components/Home/appInformation/AppInformation.js'
import Brands from '../components/Home/brands/Brands.js'
import OfferBanner from '../components/Home/offerBanner/OfferBanner.js'
import ProductsCategorization from '../components/Home/productsCategorization/ProductsCategorization.js'
// import Calculator from '../components/Home/calculator/Calculator.js'
import Calculator from '../components/Home/calculator/Calculator.jsx'
// import { instance1 } from '../services';
import axios from 'axios';
 //assets
import Bathroom from "../assets/images/home/offerBanner/Bathroom.png"
import coloring from "../assets/images/home/offerBanner/coloring.png"
import decoration from "../assets/images/home/offerBanner/decoration.png"
import facilities from "../assets/images/home/offerBanner/facilities.png"

const offerBannerData1 = [
  {
    id:1,
    imageSrc:Bathroom
  },
  {
    id:2,
    imageSrc:decoration
  },
]

const offerBannerData2 = [
  {
    id:1,
    imageSrc:coloring
  },
  {
    id:2,
    imageSrc:facilities
  },
]

const Home = () => {

  useEffect(() => {
    // khodami
    // axios.get('https://domain.com/api/v1/service-banners')
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  
    // http://172.16.100.60:9000/Category/GetRootCategory

    // taheri
    // axios.get('http://172.16.100.60:9000/Category/GetRootCategory')
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, [])

  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <Hero />
      <Brands />
      {/* CarouselBanner no responsive */}
      <CarouselBanner />

      <OfferBanner data={offerBannerData1} />
      <ProductsCategorization />
      <OfferBanner data={offerBannerData2} />
      <Calculator />
      <Questions />
      <AppInformation />
      <Weblog />
    </div>
  )
}
export default Home