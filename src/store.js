import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { weatherApi } from "./features/api/api";
export const store = configureStore({
  reducer: { [weatherApi.reducerPath]: weatherApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
