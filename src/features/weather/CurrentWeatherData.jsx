import React from "react";
import {
  faMoon,
  faSun,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherIcon from "./WeatherIcon";

const WeatherData = ({ weather, location, american, astronomy }) => {
  // console.log(weather);
  // console.log(astronomy);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  let minutes = new Date().getMinutes();
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  const time = new Date().getHours() + ":" + minutes;

  const wind = (
    <div className="flex flex-col justify-center items-center w-1/4">
      <FontAwesomeIcon icon={faWind} />
      {american ? ` ${weather.gust_mph} Mph` : ` ${weather.gust_kph} Kph`}
    </div>
  );
  const humidity = (
    <div className="flex flex-col justify-center items-center border-x-2 border-black w-1/4 min-h-[65px]">
      <FontAwesomeIcon icon={faWater} />
      <p className="mx-8">{weather.humidity}%</p>
    </div>
  );
  const astro = (
    <div className="flex flex-col justify-center items-center w-1/4">
      {weather.is_day === 1 ? (
        <>
          <FontAwesomeIcon icon={faSun} />
          <p>Sunset:</p>
          <p>{astronomy?.sunset}</p>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} />
          <p>Sunrise:</p>
          <p>{astronomy?.sunrise}</p>
        </>
      )}
    </div>
  );

  return (
    <>
      <section className="mx-6 sm:mx-12 my-8 h-[85vh]">
        <div className="text-center">
          <h1 className="text-3xl font-black">{location.name}</h1>
          <div className="text-2xl">
            <span>{days[today]}</span>
            <span className="px-2">{time}</span>
            <span>{weather.is_day === 1 ? "AM" : "PM"}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-white -ml-24 mt-6 pl-28 py-8 rounded-r-[100px]">
          <p className="text-4xl font-semibold">
            {american ? ` ${weather.temp_f}°F` : ` ${weather.temp_c}°C`}
          </p>
          <WeatherIcon condition={weather.condition.text} width="150px" />
        </div>
      </section>
      <section className="absolute bottom-10">
        <hr className="border-black border-t-2 mb-6 w-32 flex mx-auto" />
        <div className="flex justify-evenly items-center text-lg bottom-0 w-screen">
          <>{wind}</>
          <>{humidity}</>
          <>{astro}</>
        </div>
      </section>
    </>
  );
};

export default WeatherData;
