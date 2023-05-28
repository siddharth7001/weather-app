import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Weather.css';

function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { city } = useParams();
  

  useEffect(() => {
    
    const api = {
        key: "4417b8b0ebc8a2646c7090a3d3344a1b",
        base: "https://api.openweathermap.org/data/2.5/"
      }
      
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `${api.base}weather?q=${city}&units=metric&appid=${api.key}`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-card">
    <h2>{weatherData.name}</h2>
    <p>Temperature: {weatherData.main && weatherData.main.temp}°C</p>
    <p>Condition: {weatherData.weather && weatherData.weather[0].main}</p>
    {weatherData.additionalData && (
      <ul>
        {weatherData.additionalData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}
  </div>
  );
}

export default WeatherCard;