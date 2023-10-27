import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_WEATHER_URL }),
  endpoints: (builder) => ({
    getLocationByIp: builder.query({
      query: (ip) => `/ip.json?key=${import.meta.env.VITE_API_KEY}&q=${ip}`,
    }),
    getLocationByName: builder.query({
      query: (search) =>
        `/search.json?key=${import.meta.env.VITE_API_KEY}&q=${search}`,
    }),
    getCurrentWeatherData: builder.query({
      query: (city) =>
        `/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`,
    }),
  }),
});
export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_IP_URL }),
  endpoints: (builder) => ({
    getIp: builder.query({
      query: () => `?format=json`,
    }),
  }),
});
export const {
  useLazyGetLocationByipQuery,
  useGetLocationByNameQuery,
  useGetCurrentWeatherDataQuery,
} = weatherApi;
export const { useLazyGetIpQuery } = ipApi;
