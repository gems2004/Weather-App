import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const weatherApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  endpoints: (builder) => ({
    getCurrentWeatherByLocation: builder.query({
      query: () =>
        `/current.json?key=${import.meta.env.VITE_API_KEY}&q=48.8567,2.3508`,
    }),
  }),
});
export const { useGetCurrentWeatherByLocationQuery } = weatherApi;
