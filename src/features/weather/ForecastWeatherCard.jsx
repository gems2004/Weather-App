import {
  faChevronDown,
  faChevronUp,
  faDroplet,
  faSnowflake,
  faTemperatureDown,
  faTemperatureUp,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

function ForecastWeatherCard({ forecastDay, american, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(forecastDay);
  let [d, m, y] = forecastDay.date.split("-");
  const date = new Date(y, m - 1, d);
  const weekDay = date.toLocaleString("default", { weekday: "long" });

  const temperature = (
    <>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTemperatureUp} />
        <p>
          {american
            ? `${forecastDay.day.maxtemp_f}°F`
            : `${forecastDay.day.maxtemp_c}°C`}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTemperatureDown} />
        <p>
          {american
            ? `${forecastDay.day.mintemp_f}°F`
            : `${forecastDay.day.mintemp_c}°C`}
        </p>
      </div>
    </>
  );
  const wind = (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faWind} />
      <p>
        {american
          ? `${forecastDay.day.maxwind_mph} Mph`
          : `${forecastDay.day.maxwind_kph} Kph`}
      </p>
    </div>
  );
  const humidity = (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faWater} />
      <p>{forecastDay.day.avghumidity}%</p>
    </div>
  );
  const rainSnowChance = (
    <>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDroplet} />
        <p>{forecastDay.day.daily_chance_of_rain}%</p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faSnowflake} />
        <p>{forecastDay.day.daily_chance_of_snow}%</p>
      </div>
    </>
  );
  return (
    <div
      className={`${
        index === 0 ? "border-y-2" : index === 1 ? "border-0" : "border-y-2"
      } border-black`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer  py-4`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="font-bold">{index === 0 ? "Tomorrow" : weekDay}</div>
        <div className="flex items-center gap-4">
          <p className="font-semibold">
            {american
              ? `${forecastDay.day.avgtemp_f.toFixed(0)}°F`
              : `${forecastDay.day.avgtemp_c.toFixed(0)}°C`}
          </p>
          <WeatherIcon
            condition={forecastDay.day.condition.text}
            width="50px"
          />
          {isExpanded ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      <div
        className={`flex justify-between h-0 overflow-hidden 
          ${
            isExpanded ? "h-20" : ""
          } transition-all ease-in-out text-md font-semibold`}
      >
        <div>{temperature}</div>
        <div className="">
          <div>{wind}</div>
          <div>{humidity}</div>
        </div>
        <div>{rainSnowChance}</div>
      </div>
    </div>
  );
}

export default ForecastWeatherCard;
