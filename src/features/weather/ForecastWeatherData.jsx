import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";

function ForecastWeatherData({ forecast, options }) {
  // console.log(forecast);
  return (
    <>
      {forecast.forecastday.map((day, index) => {
        return (
          <ForecastWeatherCard
            forecastDay={day}
            options={options}
            index={index}
            key={day.date}
          />
        );
      })}
    </>
  );
}

export default ForecastWeatherData;
