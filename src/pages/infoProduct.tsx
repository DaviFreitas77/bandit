

import { Header } from '../componentes/header';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { Badge } from "@chakra-ui/react"
import Recommendation from '../componentes/recommendation';
import { products } from '../data/products';


export default function InfoProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { item } = location.state || {}


  const categoryItem = item.category

  const filteredProduct = products.filter((produto) =>
    produto.category === categoryItem && produto.id !== item.id
  ).slice(0,6);



  return (

    <div>
      <Header />
      <div className="flex gap-20 justify-center relative flex-wrap top-32">
        <img className="w-[500px]" src={item.image} alt="" />
        <div className=" flex flex-col gap-5 w-full max-w-[600px]" style={{ padding: 8 }}>

          <div>
            <Badge colorPalette="green" >
              {item.category}
            </Badge>

            <p style={{ fontWeight: "bold", fontSize: '38px', color: '#020817' }}>{item.name}</p>
          </div>
          <p style={{ fontSize: '30px' }}>{item.price}</p>
          <p style={{ fontSize: '16px', color: '#64748b' }}>{item.description}</p>
          <button
            onClick={() => {
              window.open(
                `https://wa.me/5511954783565?text=Olá! Tenho interesse no produto: ${encodeURIComponent(item.name)}`,
                '_blank'
              );
            }}
            style={{ backgroundColor: "#16A34A", color: "white", padding: '8px 16px', fontWeight: "bold" }} className="flex items-center w-full justify-center gap-6">
            <IoChatbubbleOutline /> Comprar via WhatsApp
          </button>
          <div style={{ border: '1px solid #dfdfdf', borderRadius: 5, padding: 10 }}>
            <p>Informações importantes</p>
            <p>• Qualidade garantida</p>
            <p>• consultar entrega via WhatsApp</p>
          </div>

        </div>
        <Recommendation products={filteredProduct} />
      </div>

    </div>

  );
}
