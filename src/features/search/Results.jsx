import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLocationByNameQuery } from "../api/api";
import Lottie from "lottie-react";
import Loader from "../../assets/loader.json";
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
  return (
    <>
      <section className="flex flex-col items-center">
        {data?.map((item) => {
          return (
            <li
              key={item.id}
              className="list-none shadow-2xl my-10 rounded-full h-32 w-11/12 grid grid-cols-2 hover:cursor-pointer"
              onClick={() => {
                navigate(`/mainPage/${item.name}`);
              }}
            >
              <span className="justify-self-center place-self-center w-32 text-center">
                {item.country}
              </span>
              <div className="place-self-center text-center mr-14">
                <span>{item.name}</span>
                <span>{item.region}</span>
              </div>
            </li>
          );
        })}
      </section>
    </>
  );
};

export default Results;
