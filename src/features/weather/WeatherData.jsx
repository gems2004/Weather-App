import React from "react";
import { useGetCurrentWeatherDataQuery } from "../api/api";
import { useParams } from "react-router-dom";

const WeatherData = () => {
  const { city } = useParams();
  const { data, isLoading } = useGetCurrentWeatherDataQuery(city);
  console.log(data);
  if (isLoading) {
    return <>pls wait</>;
  }
  return <></>;
};

export default WeatherData;
