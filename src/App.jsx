import { useGetCurrentWeatherByLocationQuery } from "./features/api/api";
function App() {
  const { data } = useGetCurrentWeatherByLocationQuery();
  console.log(data);
  return <></>;
}

export default App;
