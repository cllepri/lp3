import { Link } from "react-router-dom";

function Sobre() {
  return (
    <section className=" bg-primary flex flex-col items-center lg:flex-row lg:justify-center">
      <figure className="m-14 relative overflow-hidden">
        <img src="../../../public/napoli eu.jpg" alt="eu" className="w-[400px] rounded-3xl transition-transform duration-700 transform hover:scale-105" />
      </figure>
      <div>
        <div className="max-w-[850px] mx-8 ">
          <p className=" text-xl text-softwhite lg:my-8 p-5 lg:text-2xl lg:leading-10 text-justify ">
            Engenheiro de Controle e Automação formado pela Universidade
            Paulista- UNIP, com MBA em Gestão Empresarial pela FGV, sempre atuei no gerenciamento de empresas e processos industriais. <br /> <br />
            Desde de 2023, me dedico ao desenvolvimento de aplicações front End baseado em HTML5, CSS3, Javascript, Typescript, ReactJs e Tailwind.<br /> <br />
            Atualmente, além de me aprimorar diariamente nas tecnologias citadas
            acima, sigo nos estudos com o foco no Back-End. <br /> <br />
            Meus próximos passos são as tecnologias NODEjs e MySQL. <br />
            Entre em contato {"  "}
            <Link
              to="/contato"
              className="text-blue font-extralight underline "
            >
              clicando aqui
            </Link>{" "}
            .
          </p>
          <div className=" bg-secondary rounded-2xl text-red text-[72px]">
            <figure className="flex justify-center flex-wrap m-10">
              <img src="../../../public/pngegg.png" width="150px" alt="html5" />
              <img
                src="../../../public/pngegg (2).png"
                width="150px"
                alt="css"
              />
              <img
                src="../../../public/pngegg (1).png"
                width="150px"
                alt="Javascript"
              />
              <img
                src="../../../public/pngegg (4).png"
                width="150px"
                alt="React"
              />               
            </figure>
          </div>
        </div>
        <div className="flex justify-center ">
          <Link to="/Projetos">
            <button className="btn mt-6 mb-20">
              Veja meus Projetos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
