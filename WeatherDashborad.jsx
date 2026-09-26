import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import WeatherCard from "./WeatherCard";

function WeatherDashboard() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchWeather() {
        try {
          setIsLoading(true);
          setError("");

          const API_KEY = "AQ.Ab8RN6KTSnLwuf72TiuLJeMbB3Jt2LcGJzO0wJd5iuBF2BhG3A";

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) {
            throw new Error("City not found");
          }

          const data = await response.json();

          setWeatherData(data);
        } catch (error) {
          setError(error.message);
          setWeatherData(null);
        } finally {
          setIsLoading(false);
        }
      }

      if (city.trim() !== "") {
        fetchWeather();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>

      <SearchInput
        city={city}
        setCity={setCity}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {weatherData && !isLoading && (
        <WeatherCard weatherData={weatherData} />
      )}
    </div>
  );
}

export default WeatherDashboard;