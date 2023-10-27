import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ipApi, weatherApi } from "./features/api/api";
export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [ipApi.reducerPath]: ipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(ipApi.middleware),
});
