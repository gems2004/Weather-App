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
import React, { useContext, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import { DarkContext } from "../../App";

function ForecastWeatherCard({ forecastDay, options, index, className }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { dark, setDark } = useContext(DarkContext);

  let [d, m, y] = forecastDay.date.split("-");
  const date = new Date(y, m - 1, d);
  const weekDay = date.toLocaleString("default", { weekday: "long" });

  const temperature = (
    <>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTemperatureUp} />
        <p>
          {options.isF
            ? `${forecastDay.day.maxtemp_f}°F`
            : `${forecastDay.day.maxtemp_c}°C`}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTemperatureDown} />
        <p>
          {options.isF
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
        {options.isMph
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
    <div className={className}>
      <div
        className={`flex justify-between items-center cursor-pointer  py-4 lg:py-12 lg:text-2xl`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="font-bold">{index === 0 ? "Tomorrow" : weekDay}</div>
        <div className="flex items-center gap-4">
          <p className="font-semibold">
            {options.isF
              ? `${forecastDay.day.avgtemp_f.toFixed(0)}°F`
              : `${forecastDay.day.avgtemp_c.toFixed(0)}°C`}
          </p>
          <div className="w-[50px] lg:w-[100px]">
            <WeatherIcon day={1} condition={forecastDay.day.condition.text} />
          </div>
          <div>
            {isExpanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
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
