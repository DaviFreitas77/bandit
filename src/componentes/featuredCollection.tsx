import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '../data/products';
import { Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FeaturedColletion() {
    const filteredProduct = products.filter((item) => item.category === 'Moletom');

    return (
        <div className='relative top-52 flex flex-col justify-center items-center gap-5 w-full px-0'>
            <h1 style={{ fontSize: '2rem', textAlign: "center" }}>Novidades em alta</h1>

            <div className="w-full flex">
                <div className='max-w-3/5'>
                    <img className='!hidden sm:!block  md:w-[640px]   w-full' src="/img/sessaoMoletom.jpeg" alt="" /></div>
                <Swiper
                    spaceBetween={1}
                    centeredSlides={false}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                        1920: { slidesPerView: 4 }, // Ajuste para telas grandes
                    }}
                >
                    {filteredProduct.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card.Root
                                width="100%"
                                maxW="100%"
                                className="cursor-pointer hover:opacity-85 sm:h-[380px] md:h-[480px]
                                 lg:h-[720px] 2xl:h-[960px]  "
                            >
                                <Link
                                    to={`/produto/${item.id}`}
                                    state={{ item }}
                                    className="sm:w-full   sm:h-full  flex justify-between items-center   bg-[#DFDFDF]"
                                >
                                    <Card.Body width="100%" className='flex flex-col justify-center items-center h-full '>
                                        {/* Imagem */}
                                        <div className="flex items-center justify-center h-[150px] sm:h-[250px]">
                                            <img
                                                className="max-h-full  object-contain mix-blend-multiply"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>

                                        {/* Nome e preço */}
                                        <div className="flex flex-col items-center text-center">
                                            <Card.Title>
                                                {item.name.length > 16
                                                    ? item.name.slice(0, 16) + "..."
                                                    : item.name}
                                            </Card.Title>
                                            <Card.Description>{item.price}</Card.Description>
                                        </div>
                                    </Card.Body>
                                </Link>
                            </Card.Root>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
