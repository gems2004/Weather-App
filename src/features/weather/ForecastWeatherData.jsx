import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";

function ForecastWeatherData({ forecast, american }) {
  // console.log(forecast);
  return (
    <>
      {forecast.forecastday.map((day, index) => {
        return (
          <ForecastWeatherCard
            forecastDay={day}
            american={american}
            index={index}
            key={day.date}
          />
        );
      })}
    </>
  );
}

export default ForecastWeatherData;
