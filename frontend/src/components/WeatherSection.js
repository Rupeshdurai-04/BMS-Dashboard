import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherSection.css';
import { WiCloud, WiDaySunny, WiRain, WiCloudy } from 'react-icons/wi'; 

function WeatherSection() {
  const [weather, setWeather] = useState({});
  
  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=674f7cda00faf6db0c5498a98407dd85`);
      setWeather(result.data);
    };
    fetchWeather();
  }, []);

  const getWeatherIcon = (description) => {
    switch (description) {
      case 'clear sky':
        return <WiDaySunny className="weather-icon" />;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return <WiCloud className="weather-icon" />;
      case 'rain':
      case 'shower rain':
        return <WiRain className="weather-icon" />;
      default:
        return <WiCloudy className="weather-icon" />;
    }
  };

  return (
    <div className="weather-section">
      {weather.main ? (
        <div>
          {getWeatherIcon(weather.weather[0].description)}
          <h4>{Math.round(weather.main.temp)}°C</h4>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherSection;
