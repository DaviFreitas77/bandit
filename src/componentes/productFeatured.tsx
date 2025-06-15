import { Button, Card } from "@chakra-ui/react";
import { Toaster, toaster } from "../../src/components/ui/toaster";
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
        <div className="relative top-56 flex flex-col items-center justify-center gap-12">
            <h1 style={{ fontSize: 30, fontWeight: 500, textAlign: "center" }}>
                {selectedCategory ? ` ${selectedCategory}` : ""}
            </h1>
            <div className="flex gap-3 flex-wrap justify-center w-full">
                {filteredProducts.map((item, index) => (
                    <Card.Root
                        key={index}
                        width="100%"
                        maxW={{ base: "185px", sm: "250px", md: "320px" }}
                        className="cursor-pointer hover:opacity-85 "
                    >
                        <Link to={`/produto/${item.id}`} state={{ item }}>
                            <Card.Body className="h-[290px] sm:h-[350px]" width='100%' gap="2">
                                <div className="flex items-center justify-center">
                                    <img className="w-[210px]" src={item.image} alt={item.name} />
                                </div>
                                <Card.Title mb="2">{item.name}</Card.Title>
                                <Card.Description>{item.price}</Card.Description>
                            </Card.Body>
                        </Link>

                        <Card.Footer justifyContent="flex-start">
                            <Button
                                onClick={() =>
                                    toaster.create({
                                        title: "Produto",
                                        description: `${item.name} adicionado ao carrinho`,
                                    })
                                }
                                width="100%"
                                maxW={{ base: "165px", sm: "250px", md: "320px" }}
                                mx="auto"
                            >
                                Comprar
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </div>

            <Toaster />
            <Footer/>
        </div>
    );
}
