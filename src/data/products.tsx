import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Moletom Básico",
        price: 89.99,
        image: "/img/moletom2.jpeg",
        description: "Moletom confortável de algodão com capuz",
        category: "Moletom"
    },
    {
        id: 2,
        name: "Moletom Premium",
        price: 129.99,
        image: "/img/moletom2.jpeg",
        description: "Moletom premium com interior felpudo",
        category: "Moletom"
    },
    {
        id: 3,
        name: "Camiseta Básica Branca",
        price: 39.99,
          image: "/img/moletom2.jpeg",
        description: "Camiseta 100% algodão, corte clássico",
        category: "Camisetas"
    },
    {
        id: 4,
        name: "Camiseta Estampada",
        price: 49.99,
          image: "/img/moletom2.jpeg",
        description: "Camiseta com estampa moderna e confortável",
        category: "Camisetas"
    },
    {
        id: 5,
        name: "Copo Térmico",
        price: 25.99,
         image: "/img/moletom2.jpeg",
        description: "Copo térmico de aço inoxidável 500ml",
        category: "copo"
    },
    {
        id: 6,
        name: "Copo de Vidro",
        price: 19.99,
         image: "/img/moletom2.jpeg",
        description: "Copo de vidro elegante 300ml",
        category: "Copo"
    },
     {
        id: 7,
        name: "Moletom Premium",
        price: 129.99,
        image: "/img/moletom2.jpeg",
        description: "Moletom premium com interior felpudo",
        category: "Moletom"
    },
     {
        id: 8,
        name: "Moletom Premium",
        price: 129.99,
        image: "/img/moletom2.jpeg",
        description: "Moletom premium com interior felpudo",
        category: "Moletom"
    },
     {
        id: 9,
        name: "Moletom Premium",
        price: 129.99,
        image: "/img/moletom2.jpeg",
        description: "Moletom premium com interior felpudo",
        category: "Moletom"
    },
];

export const categories = [
    { id: 'all', name: 'Todos os Produtos', slug: 'all',image:'/img/draken.jpeg' },
    { id: 'moletom', name: 'Moletom', slug: 'moletom' ,image:'/img/draken.jpeg'},
    { id: 'camisetas', name: 'Camisetas', slug: 'camisetas',image:'/img/draken.jpeg' },
    { id: 'copo', name: 'Copo', slug: 'copo',image:'/img/draken.jpeg' }
];
