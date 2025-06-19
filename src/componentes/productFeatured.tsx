import { Button, Card } from "@chakra-ui/react";
import { Toaster } from "../../src/components/ui/toaster";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import Footer from "./footer";

interface ProductFeaturedProps {
    selectedCategory: string;
}

export default function ProductFeatured({ selectedCategory }: ProductFeaturedProps) {
    const filteredProducts = selectedCategory && selectedCategory !== 'Todos os Produtos'
        ? products.filter((item) => item.category === selectedCategory)
        : products;

    return (
        <div className="relative top-72 flex flex-col items-center justify-center gap-12">
            {/* <h1 style={{ fontSize: 30, fontWeight: 500, textAlign: "center" }}>
                {selectedCategory ? ` ${selectedCategory}` : ""}
            </h1> */}

            <div className="flex gap-3 flex-wrap justify-center w-full">
                {filteredProducts.map((item, index) => (
                    <Card.Root
                        key={index}
                        width="100%"
                        maxW={{ base: "170px", sm: "250px", md: "320px" }}
                        className="cursor-pointer hover:opacity-85 flex flex-col justify-between h-[350px] sm:h-[410px]"

                    >
                        <Link to={`/produto/${item.id}`} state={{ item }} className="flex-grow">
                            <Card.Body
                                width="100%"
                                gap="2"
                                className="flex flex-col justify-between"
                            >
                                {/* Área da imagem com responsividade */}
                                <div className="flex items-center justify-center h-[150px] sm:h-[200px]">
                                    <img
                                        className="max-h-full object-contain"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>

                                {/* Nome e preço */}
                                <div className="flex flex-col  gap-1 ">
                                    <Card.Title>
                                        {item.name.length > 10 ? item.name.slice(0, 13) + "..." : item.name}
                                    </Card.Title>
                                    <Card.Description>{item.price}</Card.Description>
                                </div>
                            </Card.Body>
                        </Link>

                        {/* Botão de Comprar sempre alinhado no fim */}
                        <Card.Footer justifyContent="center" mt="auto">
                            <Button
                                onClick={() => {
                                    window.open(
                                        `https://wa.me/5511954783565?text=Olá! Tenho interesse no produto: ${encodeURIComponent(item.name)}`,
                                        '_blank'
                                    );
                                }}
                                bg="black"
                                color="white"
                                _hover={{ bg: "gray.800" }}
                                width="100%"
                                maxW={{ base: "140px", sm: "200px", md: "250px" }}
                                size={{ base: "sm", sm: "md" }}
                            >

                                Comprar
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </div>
            <Toaster />
            <Footer />
        </div>
    );
}
