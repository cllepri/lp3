import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";   

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  function HandleMenu() {
    setMenuState(!menuState);
  }

  return (
    <header
      className=" flex justify-between md:place-content-around 
    max-w-100 h-16 text-xl md:text-2xl text-softwhite 
    bg-primary items-center border-b-2 border-white"
    >
      {/* Link do logo */}
       
      <Link to="/">
        <span className="mx-2 text-xl md:text-3xl md:font-bold text-blue hover:text-red  ">
          ClaudioLepri.dev
        </span>

        {/* Links do nav */}

      </Link>
      <nav className=" hidden md:flex md:gap-4 md:mx-2 ">
        <Link to="/" className="hover:text-red">
          Home
        </Link>
        <Link to="/Sobre" className="hover:text-red">
          Sobre
        </Link>
        <Link to="/Projetos" className="hover:text-red">
          Projetos
        </Link>
        <Link to="/Contato" className="hover:text-red">
          Contato
        </Link>
      </nav>

        {/* Aqui começa o navigator do sandwich */}

      {windowWidth < 768 && (
        <nav className=" bg-primary px-3  ">
          <IoMenu onClick={HandleMenu} className="text-white text-[2rem]" />

          {menuState === true && (
            <nav
              className={
                "flex flex-col items-center justify-center text-[1rem] bg-primary absolute top-10 right-0 h-[150px] w-[90px] "
              }
            >
              <Link onClick={HandleMenu} to="/" className="hover:text-red">
                Home
              </Link>
              <Link onClick={HandleMenu} to="/Sobre" className="hover:text-red">
                Sobre
              </Link>
              <Link
                onClick={HandleMenu}
                to="/Projetos"
                className="hover:text-red"
              >
                Projetos
              </Link>
              <Link
                onClick={HandleMenu}
                to="/Contato"
                className="hover:text-red"
              >
                Contato
              </Link>
            </nav>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
