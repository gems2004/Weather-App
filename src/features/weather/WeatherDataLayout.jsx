import React, { useState } from "react";
import CurrentWeatherData from "./CurrentWeatherData";
import { useParams } from "react-router-dom";
import {
  useGetAstronomyDataQuery,
  useGetForecastWeatherDataQuery,
} from "../api/api";
import ForecastWeatherData from "./ForecastWeatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function WeatherDataLayout() {
  const { city } = useParams();

  const [options, setOptions] = useState({
    isClicked: false,
    isF: false,
    isMph: false,
    is24: false,
  });

  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  month < 10 ? (month = `0${month}`) : month;
  let day = new Date().getDate();
  day < 10 ? (day = `0${day}`) : day;
  const date = year + "-" + month + "-" + day;

  const { data } = useGetForecastWeatherDataQuery(city);
  const { data: astronomy } = useGetAstronomyDataQuery(city, date);

  const current = data?.current ? (
    <CurrentWeatherData
      weather={data.current}
      location={data.location}
      options={options}
      setOptions={setOptions}
      astronomy={astronomy?.astronomy?.astro}
    />
  ) : (
    <p>Loading...</p>
  );
  const forecast = data?.forecast ? (
    <ForecastWeatherData forecast={data.forecast} options={options} />
  ) : (
    <p>Loading</p>
  );

  return (
    <>
      <>{current}</>
      <div className="text-center">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <section draggable={false} className="mx-6 sm:mx-12 my-8 select-none">
        {forecast}
      </section>
    </>
  );
}

export default WeatherDataLayout;
