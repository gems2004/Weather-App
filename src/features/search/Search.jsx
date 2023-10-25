import React from "react";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  return (
    <section className="grid place-content-center h-screen">
      <span className="justify-self-center text-4xl font-bold mb-5 opacity-90 drop-shadow-xl">
        Weather App
      </span>
      <div className="w-80 h-96 shadow-2xl rounded-xl">
        <form className="flex flex-col items-center h-full justify-center gap-4">
          <img src={Logo} width={200} className="mb-5" alt="" />
          <div className="w-3/4 relative">
            <span className="absolute right-[10px] top-[5px] hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#000000" }}
              />
            </span>
            <input
              type="text"
              className="border-2 border-black border-opacity-60 w-full rounded-md py-1 px-2"
            />
          </div>
          <button className="w-3/4 bg-blue-700 text-white rounded-md py-1 active:opacity-40 transition-opacity">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
