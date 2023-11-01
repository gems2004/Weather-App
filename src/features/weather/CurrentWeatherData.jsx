import React from "react";
import {
  faGear,
  faMoon,
  faSun,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherIcon from "./WeatherIcon";
import WeatherOptions from "./WeatherOptions";

const WeatherData = ({ weather, location, options, setOptions, astronomy }) => {
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
  const time = options.is24
    ? new Date().getHours() + ":" + minutes
    : new Date().toLocaleString([], {
        hour: "numeric",
        minute: "numeric",
      });

  const wind = (
    <div className="flex flex-col justify-center items-center w-1/4">
      <FontAwesomeIcon icon={faWind} />
      {options.isMph ? ` ${weather.gust_mph} Mph` : ` ${weather.gust_kph} Kph`}
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
  const optionsPopup = options.isClicked ? (
    <WeatherOptions options={options} setOptions={setOptions} />
  ) : (
    ""
  );
  return (
    <>
      {optionsPopup}
      <section className=" my-8 h-[85vh] overflow-hidden">
        <div className="text-center">
          <div className="grid grid-cols-3">
            <h1 className="text-3xl font-black col-start-2 col-end-3">
              {location.name}
            </h1>
            <span
              className="place-self-end mr-4 transition-transform hover:scale-125 hover:cursor-pointer"
              onClick={() => [
                setOptions((prevState) => {
                  return {
                    ...prevState,
                    isClicked: true,
                  };
                }),
              ]}
            >
              <FontAwesomeIcon
                icon={faGear}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </span>
          </div>
          <div className="text-2xl">
            <span>{days[today]}</span>
            <span className="px-2">{time}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 bg-white -ml-24 mt-6 pl-28 -mr-6 py-14 rounded-r-[100px]">
          <p className="text-5xl font-semibold ml-4">
            {options.isF ? ` ${weather.temp_f}°F` : ` ${weather.temp_c}°C`}
          </p>
          <span className="mr-12">
            <WeatherIcon condition={weather.condition.text} width="170px" />
          </span>
        </div>
      </section>
      <section className="absolute bottom-20">
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
