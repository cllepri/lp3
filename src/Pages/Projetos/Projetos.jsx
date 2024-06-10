import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repositoriesSeek = async () => {
      const response = await fetch(
        "https://api.github.com/users/cllepri/repos"
      );
      const data = await response.json();
      setRepositories(data);
    };
    repositoriesSeek();
  }, []);

  return (
    <>
      <section className="bg-primary flex gap-10 flex-wrap  justify-center">
        {repositories.length > 0 ? (
          repositories.map((R) => (
            <Card
              key={R.id}
              name={R.name}
              description={R.description}
              html_url={R.html_url}
            />
          ))
        ) : (
          <p>Estabelecendo conexão... </p>
        )}
      </section>
      <div className="bg-primary flex justify-center ">
        <Link to="/Contato">
          <button className="btn my-20">
            Veja meus contatos
          </button>
        </Link>
      </div>

      {/* <figure className=" w-full flex justify-center">
        <img
          className=" w-[550px] mb-20  "
          src="../../../public/_ea169124-6fbf-4736-9ddf-e12903297246.jpg"
          alt="img"
        />
      </figure> */}
    </>
  );
}

export default Projetos;
