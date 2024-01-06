import useData from "../../../utilities/useData";

const useWeatherData = (searchedCity) => {
  return useData(
    `${process.env.REACT_APP_WEATHER_API_URL}?q=${searchedCity}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
    { refreshInterval: 60000 }, !searchedCity 
  );
};

export default useWeatherData;
