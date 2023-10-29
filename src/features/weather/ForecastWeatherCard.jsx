import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ForecastWeatherCard({ forecastDay, american, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(forecastDay);
  let [d, m, y] = forecastDay.date.split("-");
  const date = new Date(y, m - 1, d);
  const weekDay = date.toLocaleString("default", { weekday: "long" });

  const temperature = <></>;
  return (
    <>
      <div
        className={`flex justify-between items-center cursor-pointer ${
          index === 0 ? "border-t-2" : index === 1 ? "border-y-2" : "border-b-2"
        } border-black py-4`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="font-bold">{index === 0 ? "Tomorrow" : weekDay}</div>
        <div className="flex items-center gap-4">
          <p className="font-semibold">
            {american
              ? `${forecastDay.day.maxtemp_f.toFixed(0)}°F`
              : `${forecastDay.day.maxtemp_c.toFixed(0)}°C`}
          </p>
          <img src={forecastDay.day.condition.icon} width="50px" />
          {isExpanded ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      <div
        className={`h-0 overflow-hidden ${
          isExpanded ? "h-20" : ""
        } transition-all ease-in-out`}
      >
        <div>{temperature}</div>
      </div>
    </>
  );
}

export default ForecastWeatherCard;
