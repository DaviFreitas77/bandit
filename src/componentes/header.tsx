import { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>

      <header
        className="bg-black text-white h-24 w-full flex items-center justify-between fixed top-0 z-50 shadow-md"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="text-2xl cursor-pointer"
        >
          <CiMenuFries size={30} />
        </button>

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
