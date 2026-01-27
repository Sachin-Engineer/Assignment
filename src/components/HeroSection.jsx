import React from 'react'
import FirstBanner from "./FirstBanner"
import SecondBanner from "./SecondBanner"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function HeroSection() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {({ isActive }) => <FirstBanner isActive={isActive} />}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => <SecondBanner isActive={isActive} />}
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSection