import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ipApi, weatherApi } from "./features/api/api";
import { searchReducer } from "./features/search/searchSlice";
export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [ipApi.reducerPath]: ipApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(ipApi.middleware),
});
