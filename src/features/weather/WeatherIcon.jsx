import React from "react";

function WeatherIcon({ condition, width, day }) {
  function icon() {
    if (day == 1) {
      if (condition == "Sunny") {
        return <img src="/weather/Sunny.png" alt="" width={width} />;
      } else if (condition == "Partly cloudy") {
        return <img src="/weather/PartlyCloudy.png" alt="" width={width} />;
      } else if (condition == "Cloudy" || condition == "Overcast") {
        return <img src="/weather/Cloudy.png" alt="" width={width} />;
      } else if (condition == "Mist") {
        return <img src="/weather/Mist.png" alt="" width={width} />;
      } else if (
        condition == "Patchy rain possible" ||
        condition == "Patchy light drizzle" ||
        condition == "Light drizzle" ||
        condition == "Patchy light rain" ||
        condition == "Light rain" ||
        condition == "Light rain shower"
      ) {
        return (
          <img src="/weather/Patchyrainpossible.png" alt="" width={width} />
        );
      } else if (
        condition == "Patchy snow possible" ||
        condition == "Patchy sleet possible" ||
        condition == "Patchy freezing drizzle possible" ||
        condition == "Freezing drizzle" ||
        condition == "Heavy freezing drizzle" ||
        condition == "Light freezing rain" ||
        condition == "Moderate or heavy freezing rain" ||
        condition == "Light sleet" ||
        condition == "Moderate or heavy sleet" ||
        condition == "Light sleet showers" ||
        condition == "Moderate or heavy sleet showers"
      ) {
        return (
          <img src="/weather/Lightfreezingrain.png" alt="" width={width} />
        );
      } else if (condition == "Thundery outbreaks possible") {
        return <img src="/weather/halfThunder" alt="" width={width} />;
      } else if (
        condition == "Blowing snow" ||
        condition == "Blizzard" ||
        condition == "Patchy light snow" ||
        condition == "Light snow" ||
        condition == "Patchy moderate snow" ||
        condition == "Moderate snow" ||
        condition == "Patchy heavy snow" ||
        condition == "Heavy snow" ||
        condition == "Ice pellets" ||
        condition == "Light snow showers" ||
        condition == "Moderate or heavy snow showers" ||
        condition == "Light showers of ice pellets" ||
        condition == "Moderate or heavy showers of ice pellets" ||
        condition == "Patchy light snow with thunder" ||
        condition == "Moderate or heavy snow with thunder"
      ) {
        return <img src="/weather/Snowy" alt="" width={width} />;
      } else if (condition == "Fog" || condition == "Freezing fog") {
        return <img src="/weather/Fog.png" alt="" width={width} />;
      } else if (
        condition == "Moderate rain at times" ||
        condition == "Moderate rain"
      ) {
        return (
          <img src="/weather/Moderaterainattimes.png" alt="" width={width} />
        );
      } else if (
        condition == "Heavy rain at times" ||
        condition == "Heavy rain" ||
        condition == "Moderate or heavy rain shower" ||
        condition == "Torrential rain shower" ||
        condition == "Patchy light rain with thunder" ||
        condition == "Moderate or heavy rain with thunder"
      ) {
        return <img src="/weather/Heavyrain.png" alt="" width={width} />;
      }
    }

    if (day == 0) {
      if (condition == "Clear") {
        return <img src="/weather/Clear.png" alt="" width={width} />;
      } else if (
        condition == "Cloudy" ||
        condition == "Overcast" ||
        condition == "Partly cloudy"
      ) {
        return <img src="/weather/darkCloudy.png" alt="" width={width} />;
      } else if (condition == "Mist") {
        return <img src="/weather/Mist.png" alt="" width={width} />;
      } else if (
        condition == "Patchy rain possible" ||
        condition == "Patchy light drizzle" ||
        condition == "Light drizzle" ||
        condition == "Patchy light rain" ||
        condition == "Light rain" ||
        condition == "Light rain shower" ||
        condition == "Heavy rain at times" ||
        condition == "Heavy rain" ||
        condition == "Moderate or heavy rain shower" ||
        condition == "Torrential rain shower" ||
        condition == "Patchy light rain with thunder" ||
        condition == "Moderate or heavy rain with thunder" ||
        condition == "Moderate rain at times" ||
        condition == "Moderate rain"
      ) {
        return <img src="/weather/darkRain.png" alt="" width={width} />;
      } else if (condition == "Thundery outbreaks possible") {
        return <img src="/weather/thunderStorm.png" alt="" width={width} />;
      } else if (
        condition == "Blowing snow" ||
        condition == "Blizzard" ||
        condition == "Patchy light snow" ||
        condition == "Light snow" ||
        condition == "Patchy moderate snow" ||
        condition == "Moderate snow" ||
        condition == "Patchy heavy snow" ||
        condition == "Heavy snow" ||
        condition == "Ice pellets" ||
        condition == "Light snow showers" ||
        condition == "Moderate or heavy snow showers" ||
        condition == "Light showers of ice pellets" ||
        condition == "Moderate or heavy showers of ice pellets" ||
        condition == "Patchy light snow with thunder" ||
        condition == "Moderate or heavy snow with thunder" ||
        condition == "Patchy snow possible" ||
        condition == "Patchy sleet possible" ||
        condition == "Patchy freezing drizzle possible" ||
        condition == "Freezing drizzle" ||
        condition == "Heavy freezing drizzle" ||
        condition == "Light freezing rain" ||
        condition == "Moderate or heavy freezing rain" ||
        condition == "Light sleet" ||
        condition == "Moderate or heavy sleet" ||
        condition == "Light sleet showers" ||
        condition == "Moderate or heavy sleet showers"
      ) {
        return <img src="/weather/snowyDark.png" alt="" width={width} />;
      } else if (condition == "Fog" || condition == "Freezing fog") {
        return <img src="/weather/Fog.png" alt="" width={width} />;
      }
    }
  }
  return <div>{icon()}</div>;
}

export default WeatherIcon;
