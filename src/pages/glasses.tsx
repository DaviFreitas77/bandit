import { Button, Card } from "@chakra-ui/react"
import { useEffect } from "react";
import { toaster } from "../../src/components/ui/toaster"
import { Link } from "react-router-dom";
import { Header } from "../componentes/header";
export default function Glasses() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const produtos = [
        { id: 1, tittle: "Nue Camp", price: "R$ 2999,99", image: "../src/img/copo.png" },
        { id: 2, tittle: "Real Jersey", price: "R$ 1999,99", image: "../src/img/copo.png" },
        { id: 3, tittle: "PSG Home", price: "R$ 2499,99", image: "../src/img/copo.png" },
        { id: 4, tittle: "Milan 2023", price: "R$ 2199,99", image: "../src/img/copo.png" },
        { id: 5, tittle: "Milan 2023", price: "R$ 2199,99", image: "../src/img/copo.png" },
        { id: 6, tittle: "Milan 2023", price: "R$ 2199,99", image: "../src/img/copo.png" },
        { id: 7, tittle: "Milan 2023", price: "R$ 2199,99", image: "../src/img/copo.png" },
        { id: 8, tittle: "Milan 2023", price: "R$ 2199,99", image: "../src/img/copo.png" },

    ];

    return (
        <div>
            <Header />
            <img  style={{ marginTop: 90 }} src="../src/img/bannerCopo.png" alt="" />
            <div className="relative  flex flex-col items-center justify-center  gap-12">
                <h1 style={{ fontSize: 30, fontWeight: 500, marginTop: 30, textAlign: "center" }}>Veja qual modelo combina com você</h1>
                <div className="flex gap-3 flex-wrap justify-center max-w-[1500px]" style={{ padding: 8 }}>

                    {produtos.map((produto, index) => (
                        <Card.Root
                            key={index}
                            width="100%"
                            maxW={{ base: "165px", sm: "250px", md: "320px" }}
                            mx="auto"
                            className="cursor-pointer hover:opacity-85"
                        >
                            <Link to={`/produto/${produto.id}`} state={{ produto }}>
                                <Card.Body
                                    gap="2">
                                    <img  src={produto.image} alt={produto.tittle} />
                                    <Card.Title mb="2">{produto.tittle}</Card.Title>
                                    <Card.Description>{produto.price}</Card.Description>
                                </Card.Body>
                            </Link>

                            <Card.Footer justifyContent="flex-start">
                                <Button
                                    onClick={() =>
                                        toaster.create({
                                            title: "Produto",
                                            description: `${produto.tittle} adicionado ao carrinho`,
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

            </div>
        </div>
    )
}
