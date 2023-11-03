import React, { useContext, useEffect, useState } from "react";
import { weatherApi, ipApi } from "../api/api";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { DarkContext } from "../../App";
import Loader from "../../assets/loader.json";

import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMoreThanThree, setIsMoreThanThree] = useState(true);

  const [triggerSearchIp, { data: weatherIp, isLoading: searchByIpLoader }] =
    weatherApi.endpoints.getLocationByIp.useLazyQuery();
  const [triggerIp, { data: ip, isLoading: ipLoader }] =
    ipApi.endpoints.getIp.useLazyQuery();

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
  if (ipLoader || searchByIpLoader) {
    return (
      <div className="grid place-content-center w-screen h-screen">
        <Lottie className="w-80" animationData={Loader} />
      </div>
    );
  }
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row  items-center w-4/5 gap-60 md:gap-0 bg-livid">
        <div className="flex flex-col items-center gap-10 md:w-full">
          <h1 className="text-3xl md:text-6xl font-bold drop-shadow-2xl">
            Weather App
          </h1>
          <img src={Logo} width={200} alt="Logo" />
        </div>

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
                onClick={ipSearchClickHandler}
              />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className={`border-2 placeholder-black placeholder-opacity-70 border-black border-opacity-60 w-full bg-livid rounded-full py-1 px-2 ${
                isMoreThanThree ? "" : "border-red-500"
              }`}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
          <button
            className="w-full bg-blue-700 hover:bg-blue-900 text-white rounded-full py-1 active:opacity-40 transition-all ease-in-out"
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
