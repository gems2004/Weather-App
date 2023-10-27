import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./features/search/search";
import Results from "./features/search/Results";
import WeatherData from "./features/weather/WeatherData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results/:query" element={<Results />} />
        <Route path="/mainpage/:city" element={<WeatherData />} />
      </Routes>
    </>
  );
}

export default App;
