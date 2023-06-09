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
                <div className="w-full h-full bg-lime-500"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full bg-lime-200"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full bg-lime-900"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full bg-lime-900"></div>
            </SwiperSlide>
        </Swiper>
    )

}


export default Carousel;