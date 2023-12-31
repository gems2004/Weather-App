import React, { useContext, useEffect, useState } from "react";
import CurrentWeatherData from "./CurrentWeatherData";
import { useParams } from "react-router-dom";
import {
  useGetAstronomyDataQuery,
  useGetForecastWeatherDataQuery,
} from "../api/api";
import ForecastWeatherData from "./ForecastWeatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DarkContext } from "../../App";
import WeatherOptions from "./WeatherOptions";
import Lottie from "lottie-react";
import Loader from "../../assets/loader.json";
function WeatherDataLayout() {
  const { city } = useParams();
  const { dark, setDark } = useContext(DarkContext);
  const [options, setOptions] = useState({
    isClicked: false,
    isF: false,
    isMph: false,
    is24: false,
  });
  const { data, isLoading: weatherLoaded } =
    useGetForecastWeatherDataQuery(city);

  useEffect(() => {
    if (data?.current.is_day === 0) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [data?.current.is_day]);

  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  month < 10 ? (month = `0${month}`) : month;
  let day = new Date().getDate();
  day < 10 ? (day = `0${day}`) : day;
  const date = year + "-" + month + "-" + day;

  const { data: astronomy, isLoading: astronomyLoaded } =
    useGetAstronomyDataQuery(city, date);
  console.log(weatherLoaded);
  console.log(astronomyLoaded);

  const current = (
    <CurrentWeatherData
      weather={data?.current}
      location={data?.location}
      options={options}
      setOptions={setOptions}
      astronomy={astronomy?.astronomy?.astro}
    />
  );
  const forecast = (
    <ForecastWeatherData forecast={data?.forecast} options={options} />
  );
  const optionsPopup = options.isClicked ? (
    <WeatherOptions options={options} setOptions={setOptions} />
  ) : (
    ""
  );
  if (data) {
    return (
      <div
        className={
          dark
            ? "bg-[#131d37] min-h-screen pt-2 lg:pt-0 lg:grid lg:grid-cols-[30%] transition-colors"
            : ""
        }
      >
        {optionsPopup}
        <div className="lg:col-start-2 lg:col-end-3">{current}</div>
        <div className="text-center lg:hidden arrow">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={dark ? { color: "#ffffff" } : ""}
          />
        </div>
        <section
          draggable={false}
          className="mx-6 sm:mx-12 py-8 select-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:h-screen lg:mx-0 lg:shadow-[20px_0px_40px_-1px_rgb(0,0,0,0.50)]"
        >
          {forecast}
        </section>
      </div>
    );
  } else {
    return (
      <div className="transition-colors h-screen grid place-content-center">
        <Lottie className="w-80" animationData={Loader} />
      </div>
    );
  }
}

export default WeatherDataLayout;
