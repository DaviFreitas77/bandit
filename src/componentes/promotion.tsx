import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


export default function Promotion() {
    return (
        <div style={{ padding: 10 }} className='relative top-64'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={4} // mostra 2 imagens por vez
                spaceBetween={25} // espaço entre os slides

                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}

            >
                <SwiperSlide>
                    <img className="w-100" src="/img/promo.jpg" alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-100" src="/img/promo.jpg" alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-100" src="/img/promo.jpg" alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-100" src="/img/promo.jpg" alt="Banner 3" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}