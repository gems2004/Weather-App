import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";
import { useContext } from "react";
import { DarkContext } from "../../App";
function ForecastWeatherData({ forecast, options }) {
  const { dark, setDark } = useContext(DarkContext);
  return (
    <div className="lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center">
      {forecast.forecastday.map((day, index) => {
        return (
          <ForecastWeatherCard
            className={`${
              index === 0
                ? "border-y-2"
                : index === 1
                ? "border-0"
                : "border-y-2"
            } ${dark ? "text-white" : "border-black"} lg:w-11/12`}
            forecastDay={day}
            options={options}
            index={index}
            key={day.date}
          />
        );
      })}
    </div>
  );
}

export default ForecastWeatherData;
