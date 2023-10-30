import React from "react";

function WeatherIcon({ condition, width }) {
  return (
    <div>
      <img src={`/weather/${condition}.png`} width={width} />
    </div>
  );
}

export default WeatherIcon;
