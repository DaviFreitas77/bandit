import { Button, Card, HStack } from "@chakra-ui/react"
import { Toaster, toaster } from "../../src/components/ui/toaster"
import { Link } from "react-router-dom";
export default function ProductFeatured() {

    const produtos = [
        { id: 1, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 2, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 3, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 4, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 5, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 6, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 7, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
        { id: 8, tittle: "Moletom Balance", price: "R$ 2999,99", image: "/img/moletom2.jpeg" },
      
       
    ];

    return (
        <div className="relative top-56 flex flex-col items-center justify-center  gap-12">
            <h1 style={{ fontSize: 30, fontWeight: 500,textAlign:"center" }}>As queridinhas do momento</h1>
            <div className="flex gap-3 flex-wrap justify-center max-w-[1500px]" style={{ padding:'1px' }}>

                {produtos.map((produto, index) => (
                    <Card.Root
                        key={index}
                        width="100%"
                        maxW={{ base: "180px", sm: "250px", md: "320px" }}
                      
                        className="cursor-pointer hover:opacity-85"
                    >
                      <Link to={`/produto/${produto.id}`} state={{ produto }}>
                            <Card.Body
                            width='100%'
                                gap="2">
                                <img src={produto.image} alt={produto.tittle} />
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
            <HStack wrap="wrap" gap="6">
                <Button onClick={() => toaster.create({
                    title: "Toast Title",
                    description: "Toast Description",
                })} size="xs">Ver todos os produtos</Button>

            </HStack>

            <Toaster />
        </div>
    )
}