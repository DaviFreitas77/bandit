
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { type Product } from '../types/product';

interface RecommendationProps {
    products: Product[];
}

import { Navigation, Pagination } from 'swiper/modules';

export default function Recommendation({ products }: RecommendationProps) {


    return (
        <div className="w-full mx-auto py-8">
            <h1 style={{ fontSize: 28, fontWeight: "600", paddingLeft: 15, textAlign: "center" }}>Produtos relacionados</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                style={{ marginTop: 30 }}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {products.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link className="cursor-pointer" to={`/produto/${item.id}`} state={{ item }}>
                                <img className="w-[80%]" src={item.image} alt={item.name} />
                            </Link>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
}
