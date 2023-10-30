import React, { useEffect, useState } from "react";
import { weatherApi, ipApi } from "../api/api";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMoreThanThree, setIsMoreThanThree] = useState(true);

  const [triggerSearchIp, { data: weatherIp }] =
    weatherApi.endpoints.getLocationByIp.useLazyQuery();
  const [triggerIp, { data: ip }] = ipApi.endpoints.getIp.useLazyQuery();
  console.log(ip);

  function searchClickHandler(e) {
    e.preventDefault();
    if (searchQuery.length < 3) {
      setIsMoreThanThree(false);
    } else {
      navigate(`results/${searchQuery}`);
    }
  }
  function ipSearchClickHandler(e) {
    e.preventDefault();
    triggerIp();
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-4/5 gap-6">
        <h1 className="text-3xl font-bold">Weather App</h1>
        <img src={Logo} width={200} alt="Logo" />

        <form className="flex flex-col items-center justify-center gap-4 w-3/4">
          {isMoreThanThree ? (
            ""
          ) : (
            <span className="text-red-500">
              Enter at least three characters
            </span>
          )}
          <div className="w-full relative">
            <span
              className="absolute right-[10px] top-[5px] hover:cursor-pointer"
              onClick={ipSearchClickHandler}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#000000" }}
              />
            </span>
            <input
              type="text"
              className={`border-2 border-black border-opacity-60 w-full rounded-md py-1 px-2 ${
                isMoreThanThree ? "" : "border-red-500"
              }`}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
          <button
            className="w-full bg-blue-700 hover:bg-blue-900 text-white rounded-md py-1 active:opacity-40 transition-all ease-in-out"
            onClick={searchClickHandler}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
