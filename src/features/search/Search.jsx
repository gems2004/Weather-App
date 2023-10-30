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
  useEffect(() => {
    if (ip) {
      triggerSearchIp(ip.ip);
    }
    if (ip && weatherIp) {
      navigate(`/mainPage/${weatherIp.city}`);
    }
  }, [ip, weatherIp]);
  console.log(ip);
  console.log(weatherIp);
  return (
    <section className="flex flex-col justify-center items-center h-[100vh] bg-[url('/src/assets/Background.png')] ">
      <div className="flex flex-col justify-center items-center gap-6 w-[370px] h-[500px] bg-white rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold drop-shadow-2xl">Weather App</h1>
        <img src={Logo} width={200} alt="Logo" />

        <form className="flex flex-col items-center justify-center gap-4 w-3/4">
          {isMoreThanThree ? (
            ""
          ) : (
            <span className="text-red-500">
              Enter at least three characters
            </span>
          )}
          <div className="w-3/4 relative">
            <span
              className="absolute right-[10px] top-[5px] hover:cursor-pointer"
              onClick={ipSearchClickHandler}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#000000" }}
                onClick={ipSearchClickHandler}
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
            className="w-3/4 bg-blue-700 hover:bg-blue-900 text-white rounded-md py-1 active:opacity-40 transition-all ease-in-out"
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
