import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Menu from '../componentes/drawer'

export function Header() {

  const [cartOpen, setCartOpen] = useState(false);

  
  return (
    <>

      <header
        className="bg-yellow-400 text-white h-24 w-full flex items-center justify-between fixed top-0 z-50 shadow-md"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >

          <Menu/>

        {/* Logo centralizado */}
        <div >
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-40"
          />
        </div>

        {/* Botão do carrinho */}
        <button
          onClick={() => setCartOpen(!cartOpen)}
          aria-label="Abrir carrinho"
          className="text-2xl"
        >
          <FaShoppingCart color="black" size={24}  className="cursor-pointer"/>
        </button>
      </header>
    </>
  );
}
