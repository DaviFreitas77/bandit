

// import { FaShoppingCart } from "react-icons/fa";
export function Header() {

  return (
    <>

      <header
        className="bg-yellow-400 text-white h-24 w-full flex items-center justify-between  fixed top-0 z-50 shadow-md "
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >

        {/* <Menu /> */}

        {/* Logo centralizado */}
        <div className="flex w-full items-center justify-center">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-40"
          />
        </div>

        {/* Botão do carrinho */}
        {/* <button onClick={()=>alert("em breve")}>
          <FaShoppingCart  size={25} color="black"/>
        </button> */}
      </header>
    </>
  );
}
