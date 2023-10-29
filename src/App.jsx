import { Route, Routes } from "react-router-dom";
import Search from "./features/search/Search";
import Results from "./features/search/Results";
import WeatherDataLayout from "./features/weather/WeatherDataLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results/:query" element={<Results />} />
        <Route path="/mainPage/:city" element={<WeatherDataLayout />} />
      </Routes>
    </>
  );
}

export default App;
