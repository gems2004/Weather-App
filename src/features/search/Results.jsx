import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLocationByNameQuery } from "../api/api";
import Lottie from "lottie-react";
import Loader from "../../assets/loader.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Results = () => {
  const { query } = useParams();
  const { data, isLoading } = useGetLocationByNameQuery(query);
  const navigate = useNavigate();

  console.log(data);

  if (isLoading) {
    return (
      <div className="grid place-content-center h-screen">
        <Lottie className="w-72" animationData={Loader} />
      </div>
    );
  }
  if (!data.length && !isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
        <p className="text-2xl font-bold">Nothing found!</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-700 hover:bg-blue-900 text-white rounded-md py-1 px-4 active:opacity-40 transition-all ease-in-out"
        >
          Go Back
        </button>
      </div>
    );
  }
  return (
    <section className="flex flex-col items-center">
      <ul className="w-3/5 my-16">
        {data?.map((item, index) => {
          let region;
          item.region.length > 12
            ? (region = item.region.substring(0, 12).concat("..."))
            : (region = item.region);
          return (
            <li
              key={item.id}
              className={`list-none hover:cursor-pointer ${
                index % 2 === 0 ? "border-y-2 border-black" : ""
              } py-8`}
              onClick={() => {
                navigate(`/mainPage/${item.name}`);
              }}
            >
              <h1 className="text-xl font-semibold">{item.country}</h1>
              <div className="flex justify-between">
                <p>{item.name}</p>
                <div className="flex gap-2 items-center">
                  <p className="w-fit">
                    {region === "" ? item.country : region}
                  </p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Results;
