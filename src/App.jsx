import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./features/search/Search";
import Results from "./features/search/Results";
import WeatherDataLayout from "./features/weather/WeatherDataLayout";

export const DarkContext = createContext("");
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div>
      <DarkContext.Provider value={{ dark, setDark }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/results/:query" element={<Results />} />
          <Route path="/mainPage/:city" element={<WeatherDataLayout />} />
        </Routes>
      </DarkContext.Provider>
    </div>
  );
}

export default App;
