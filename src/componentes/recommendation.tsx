// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import { Link } from "react-router-dom";

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Recommendation() {

    const produtos = [
        { id: 1, tittle: "Nue Camp", price: "R$ 2999,99", image: "../public/camiseta.png" },
        { id: 2, tittle: "Real Jersey", price: "R$ 1999,99", image: "../public/camiseta.png" },
        { id: 3, tittle: "PSG Home", price: "R$ 2499,99", image: "../public/camiseta.png" },
        { id: 4, tittle: "Milan 2023", price: "R$ 2199,99", image: "../public/camiseta.png" },
        { id: 5, tittle: "Milan 2023", price: "R$ 2199,99", image: "../public/camiseta.png" },
        { id: 6, tittle: "Milan 2023", price: "R$ 2199,99", image: "../public/camiseta.png" },
        { id: 7, tittle: "Milan 2023", price: "R$ 2199,99", image: "../public/camiseta.png" },
        { id: 8, tittle: "Milan 2023", price: "R$ 2199,99", image: "../public/camiseta.png" },

    ];
    return (
        <div className="w-full mx-auto py-8">
            <h1 style={{ fontSize: 28, fontWeight: "600", paddingLeft: 15, marginTop: 50 }}>Achamos que combina com você</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                style={{marginTop:30}}
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
                {produtos.map((produto, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link className="cursor-pointer" to={`/produto/${produto.id}`} state={{ produto }}>
                                <img className="w-[80%]" src={produto.image} alt={produto.tittle} />
                            </Link>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
}
