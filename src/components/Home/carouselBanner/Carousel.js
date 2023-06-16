import React from 'react'

// images
import bannerImage from "../../../assets/images/home/CarouselBanner/banner.png"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';



SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Carousel = () => {
    return (
        <Swiper
            className="mySwiper swiper-h"
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            autoplay={{
                delay: 100000,
                disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
        >

            <SwiperSlide>
                <div className="w-full fcc h-full bg-red-500 relative">
                    <img className='h-full md:h-auto object-cover object-center' src={bannerImage} alt='' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full fcc h-full bg-red-500 relative">
                    <img className='h-full' src={bannerImage} alt='' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full fcc h-full bg-red-500 relative">
                    <img className='h-full' src={bannerImage} alt='' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full fcc h-full bg-red-500 relative">
                    <img className='h-full' src={bannerImage} alt='' />
                </div>
            </SwiperSlide>
        </Swiper>
    )

}


export default Carousel;