import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_WEATHER_URL }),
  endpoints: (builder) => ({
    getLocationByIp: builder.query({
      query: (ip) => `/ip.json?key=${process.env.VITE_API_KEY}&q=${ip}`,
    }),
    getLocationByName: builder.query({
      query: (search) =>
        `/search.json?key=${process.env.VITE_API_KEY}&q=${search}`,
    }),
    getCurrentWeatherData: builder.query({
      query: (city) =>
        `/current.json?key=${process.env.VITE_API_KEY}&q=${city}`,
    }),
    getForecastWeatherData: builder.query({
      query: (city) =>
        `/forecast.json?key=${process.env.VITE_API_KEY}&q=${city}&days=3`,
    }),
    getAstronomyData: builder.query({
      query: (city, date) =>
        `/astronomy.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}&dt=${date}`,
    }),
  }),
});
export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_IP_URL }),
  endpoints: (builder) => ({
    getIp: builder.query({
      query: () => `?format=json`,
    }),
  }),
});
export const {
  useLazyGetLocationByIpQuery,
  useGetLocationByNameQuery,
  useGetCurrentWeatherDataQuery,
  useGetForecastWeatherDataQuery,
  useGetAstronomyDataQuery,
} = weatherApi;
export const { useLazyGetIpQuery } = ipApi;
