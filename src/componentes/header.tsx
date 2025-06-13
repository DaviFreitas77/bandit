import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Menu from '../componentes/drawer'

export function Header() {

  const [cartOpen, setCartOpen] = useState(false);

  
  return (
    <>

      <header
        className="bg-black text-white h-24 w-full flex items-center justify-between fixed top-0 z-50 shadow-md"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >

          <Menu/>

        {/* Logo centralizado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://via.placeholder.com/100x40?text=Logo"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Botão do carrinho */}
        <button
          onClick={() => setCartOpen(!cartOpen)}
          aria-label="Abrir carrinho"
          className="text-2xl"
        >
          <FaShoppingCart size={20} />
        </button>
      </header>
    </>
  );
}
