import { IoLogoWhatsapp } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";

function Contato() {
  return (
    <>
      <section className=" bg-primary flex flex-col items-center justify-center) h-[calc(100vh-100px)]">
        <div className="mt-6 mb-8">
          <h1 className="flex text-softwhite text-4xl font-bold justify-center">
            Contatos
          </h1>
          <br />
          <p className="text-softwhite text-center text-3xl h-[1.2rem] p-4 mb-20  max-w-[650px]">
            Para conhecer mais sobre o meu trabalho, abaixo segue meus canais de
            contato. <br />
          </p>
        </div>
        <Link
          to="https://wa.me/5519992883127?tex=Contato%20sobre%20desenvolvedor%20Front-End"
          target="_blank"
        >
          <div className=" text-blue flex justify-start items-center gap-3 w-[400px] mt-4 font-bold md:text-lg md:w-[500px] hover:text-[1.15rem] ">
            <IoLogoWhatsapp className="text-white text-[3rem] " />

            <p >
              {" "}
             Telefone: +55 (19) 99288-3127{" "}
            </p>
          </div>
        </Link >
        <Link to="mailto:cllepri@gmail.com" target="_blank">
          <div className="text-blue flex justify-start items-center gap-3 w-[400px] mt-4 font-bold md:text-lg md:w-[500px] hover:text-[1.15rem]">
            <MdMail className="text-white text-[3rem] " />

            <p >e-mail: cllepri@gmail.com</p>
          </div>
        </Link>
        <Link to="https://github.com/cllepri" target="_blank">
          <div className=" text-blue flex justify-start items-center gap-3 w-[400px] mt-4 font-bold md:text-lg md:w-[500px] hover:text-[1.15rem]">
            <LuGithub className="text-white text-[3rem] " />

            <p> github.com/cllepri</p>
          </div>
        </Link>
        <Link
          to="https://www.linkedin.com/in/claudio-lepri-261586260/"
          target="_blank"
        >
          <div className="text-blue flex justify-start items-center gap-3 w-[400px] mt-4 font-bold md:text-lg md:w-[500px] hover:text-[1.15rem]">
            <FaLinkedin className=" text-white text-[3rem]  " />

            <p className=""> linkedin.com/in/claudio-lepri-261586260/</p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default Contato;
