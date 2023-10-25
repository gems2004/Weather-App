import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchQuery: "",
  results: null,
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    passSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    passSearchData: (state, action) => {
      state.results = action.payload;
    },
  },
});
export const getSearchData = (state) => state.search;
export const searchReducer = searchSlice.reducer;
export const { passSearchQuery, passSearchData } = searchSlice.actions;
