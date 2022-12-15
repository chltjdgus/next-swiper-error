import React, { FC, useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, History } from "swiper";
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
}

const SampleTab: FC<Props> = (props) => {
    const router = useRouter();

    return (
        <div style={{height:500}}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                style={{height:500}}
                modules={[Navigation, Pagination, History]}
                history={{key : "home"}}
                className="mySwiper"


            >
                <SwiperSlide data-history="slide1">Slide 1
                <br/>
                    <p style={{color:'yellow'}}>1. Swipe next Page</p>
                </SwiperSlide>
                <SwiperSlide data-history="slide2">Slide 2
                    <br/>
                    <Link href="/help" style={{color:'red'}} >2. CLICK HELP LINK</Link>

                </SwiperSlide>
                <SwiperSlide data-history="slide3">Slide 3</SwiperSlide>
                <SwiperSlide data-history="slide4">Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}
export default SampleTab;


