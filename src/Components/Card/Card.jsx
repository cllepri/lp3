import { FaArrowCircleRight } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
  return (
    <div className=" flex flex-col rounded-2xl bg-softwhite shadow-lg  w-[250px] h-[300px] mt-20 mx-10  hover:bg-neutral-200 ">
      <h1 className="flex justify-center  items-center h-[35px] font-bold p-5 ">
        {name.toUpperCase()}
      </h1>

      <div className="flex text-justify mt-4 mx-5 p-2 h-[180px] border border-white  ">
        <p>{description}</p>
      </div>

      <div className=" flex gap-5 my-5 m-auto h-[55px] w-[200px] text-red">
        <FaHtml5 size={30} />
        <FaCss3Alt size={30} />
        <SiJavascript size={30} />
      </div>

      <div className="flex justify-between mx-2  text-terceary ">
        <div className="flex gap-2 m-1 ">
          <label htmlFor="Link">
            <b>Projeto</b>
          </label>
          <Link to={html_url} target="_blank" rel="noopenner morefferer">
            <FaArrowCircleRight size={25} />
          </Link>
        </div>

        <div className="flex gap-2 m-1 ">
          <label htmlFor="Link">
            <b>Site</b>
          </label>
          <Link
            to={`http://cllepri.github.io/${name}/`}
            target="_blank"
            rel="noopenner morefferer"
          >
            <FaArrowCircleRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
