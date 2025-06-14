
import ShoppingCart from "./shoppingCart";
export function Header() {

  return (
    <>

      <header
        className="bg-yellow-400 text-white h-24 w-full flex items-center justify-between fixed top-0 z-50 shadow-md"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >

        {/* <Menu /> */}

        {/* Logo centralizado */}
        <div >
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-40"
          />
        </div>

        {/* Botão do carrinho */}
        <ShoppingCart />
      </header>
    </>
  );
}
