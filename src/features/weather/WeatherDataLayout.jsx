import React, { useState } from "react";
import CurrentWeatherData from "./CurrentWeatherData";
import { useParams } from "react-router-dom";
import {
  useGetAstronomyDataQuery,
  useGetCurrentWeatherDataQuery,
  useGetForecastWeatherDataQuery,
} from "../api/api";
import ForecastWeatherData from "./ForecastWeatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function WeatherDataLayout() {
  const { city } = useParams();

  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  month < 10 ? (month = `0${month}`) : month;
  let day = new Date().getDate();
  day < 10 ? (day = `0${day}`) : day;
  const date = year + "-" + month + "-" + day;

  const { data } = useGetForecastWeatherDataQuery(city);
  const { data: astronomy } = useGetAstronomyDataQuery(city, date);

  const [american, setAmerican] = useState(false);

  function switchMesTypes() {
    setAmerican((prev) => !prev);
  }

  const current = data?.current ? (
    <CurrentWeatherData
      weather={data.current}
      location={data.location}
      american={american}
      astronomy={astronomy.astronomy.astro}
    />
  ) : (
    <p>Loading...</p>
  );
  const forecast = data?.forecast ? (
    <ForecastWeatherData forecast={data.forecast} american={american} />
  ) : (
    <p>Loading</p>
  );

  return (
    <>
      <button
        onClick={switchMesTypes}
        className="bg-blue-700 hover:bg-blue-900 text-white rounded-md py-1 px-4 active:opacity-40 transition-all ease-in-out absolute "
      >
        {american ? "Miles" : "Metric"}
      </button>

      <>{current}</>
      <div className="text-center pt-4">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <section className="mx-6 sm:mx-12 my-8">{forecast}</section>
    </>
  );
}

export default WeatherDataLayout;
