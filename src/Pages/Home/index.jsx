import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className=" flex flex-col items-center border-t-2  lg:grid lg:grid-cols-2 bg-primary">
        <div className="  ">
          <p className=" max-w-[450px] justify-center text-softwhite p-5 mx-10 font-bold text-xl lg:max-w-[550px] lg:text-4xl ">
            OLá, meu nome é{" "}
            <span className=" text-blue text-xl lg:text-5xl  ">
              Claudio Lepri,{" "}
            </span>
            sou desenvolvedor Front-End e gostaria de apresentar minha Landing Page. Aqui você encontrará mais informações sobre mim e sobre meu trabalho. <br />
          </p>

          <Link to="/Sobre">
            <button className="btn m-16" >
              Veja meu Perfil
            </button>
          </Link>
        </div>

        <figure className=" my-10">
          <img
            className=" max-h-[600px] my-10 mx-auto rounded-2xl "
            src="/public/_605b59a2-7d9c-4f7a-8c21-244434a1b1d1.jpeg"
            alt="image"
          />
        </figure>
      </section>
    </>
  );
}

export default Home;
