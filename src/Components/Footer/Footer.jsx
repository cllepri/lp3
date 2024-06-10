import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div className=" flex justify-center items-center gap-1 h-10 text-lg text-white bg-black fixed bottom-0 left-0 w-full ">
      <p>
        Desenvolvido em <span className="text-red-400">React JS </span>
      </p>{" "}
      <FaReact />{" "}
      <p className="mx-2">
        by{" "}
        <Link to="/Sobre">
          <span className="text-blue primary mx-2 hover:text-red">Claudio Lepri</span>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
