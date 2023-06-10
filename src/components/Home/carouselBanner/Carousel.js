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
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
        >

            <SwiperSlide>
                <div className="w-full fcc h-full bg-red-500 px-10 py-5 relative">
                    <div className='flex flex-col items-center justify-start w-[80%] max-w-[80%] h-full'>
                        <p className='flex w-full text-right text-white text-lg font-bold'>
                            برای نوروز ۱٤۰۳ با تخفیفات ۲۰ تا ۳۰ درصدی به مناسب سال جدید خانه ات را یک بازسازی اساسی کن
                        </p>
                        <div className='fcc relative right-0 px-5 py-2 bg-white w-[150px] max-w-[150px] h-[40px] max-h-[40px] font-bold text-sm text-color-font-5 rounded-lg'>
                        مشاهده بیشتر ...
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[20%] max-w-[20%] h-full bg-slate-500'>
                        <img className='h-full' src={bannerImage} alt='' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full bg-red-400"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full bg-red-500"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full bg-red-400"></div>
            </SwiperSlide>
        </Swiper>
    )

}


export default Carousel;