
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';

export default function Banner() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper relative top-24"
        >
            <SwiperSlide className="w-full block  sm:!hidden">

                <img src="/img/bannermobile.png" alt="Banner 1" />
            </SwiperSlide>

            <SwiperSlide className="w-full !hidden md:!block">

                <img className="w-full" src="/img/banner.png" alt="Banner 1" />
            </SwiperSlide >
            <SwiperSlide className="w-full !hidden md:!block">
                <img className="w-full" src="/img/banner.png" alt="Banner 2" />
            </SwiperSlide>
            <SwiperSlide className="w-full !hidden md:!block">
                <img className="w-full" src="/img/banner.png" alt="Banner 3" />
            </SwiperSlide>
        </Swiper>
    );
}
