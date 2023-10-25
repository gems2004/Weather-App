import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchResults from "./pages/SearchResults";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
