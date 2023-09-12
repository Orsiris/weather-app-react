import * as React from 'react';

import Search from './components/Search';
import CurrentWeather from './components/Current-weather/Current-weather';
import WeatherForecast from './components/forecast/forecast';
import { WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';

import './App.css'
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Define your default location coordinates here
  const defaultLat = 1.3046; // Default latitude
  const defaultLon = 103.8043; // Default longitude

  // Call handleOnSearchChange with default values to display the default location
  React.useEffect(() => {
    handleOnSearchChange({ value: `${defaultLat} ${defaultLon}`, label: 'Singapore' });
  }, []);

  const handleOnSearchChange = (searchData) => {
    // Extract latitude and longitude from the searchData if available, or use the default location
    const [lat, lon] = searchData.value ? searchData.value.split(" ") : [defaultLat, defaultLon];

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const [weatherResponse, forecastResponse] = await Promise.all(responses.map((response) => response.json()));

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='container flex w-11/12 p-5 rounded-3xl'>
      <div className='w-2/5 p-5 rounded-3xl currentWeather flex flex-col '>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>

      <div className='w-3/5 p-5 rounded-3xl currentWeather flex flex-col ms-10'>
        <h1 className='text-4xl font-medium text-white'>Weather Forecast</h1>
        <WeatherForecast data={forecast} />
      </div>
    </div>
  )
}

export default App;
