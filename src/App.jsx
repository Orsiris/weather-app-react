import * as React from 'react';

import Search from './components/Search';
import CurrentWeather from './components/Current-weather/Current-weather';
import WeatherForecast from './components/Forecast/Forecast';
import ForecastDetails from './components/Forecast/Forecast-details';
import { WEATHER_API_URL } from './api';
import { weatherApiOptions } from './api';

import './App.css'
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [selectedForecast, setSelectedForecast] = useState(null);
const [selectedDay, setSelectedDay] = useState("Today");

 
  const defaultLat = 1.3046; // Default latitude
  const defaultLon = 103.8043; // Default longitude


  React.useEffect(() => {
    handleOnSearchChange({ value: `${defaultLat} ${defaultLon}`, label: 'Singapore' });
  }, []);

  const handleOnSearchChange = (searchData) => {
   
    console.log(searchData)
    const [lat, lon] = searchData.value ? searchData.value.split(" ") : [defaultLat, defaultLon];

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/current.json?q=${lat}%2C${lon}`, weatherApiOptions
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast.json?q=${lat}%2C${lon}&days=3`, weatherApiOptions
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const [weatherResponse, forecastResponse] = await Promise.all(responses.map((response) => response.json()));

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        
        console.log(forecastResponse.forecast.forecastday[0])
        setSelectedForecast(forecastResponse.forecast.forecastday[0]);
      })
      .catch((err) => console.error(err));
  };

 

  return (
    <div className='container-fluid flex flex-col xl:flex-row '>
      <div className='w-auto p-10 currentWeather flex flex-col xl:w-2/5 xl:p-5'>
       
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>

      <div className='w-auto p-10 flex flex-col xl:w-3/5'>
       
      <Search onSearchChange={handleOnSearchChange} />

      <h1 className='text-2xl text-white mt-10 text-center'>3-Day Forecast</h1>
        <div className='flex flex-col items-center md:flex-row mt-5 mb-10 gap-y-10 md:justify-between md:gap-x-5'>
        {forecast && <WeatherForecast data={forecast} onSelectForecast={(selected,day) => {
            setSelectedForecast(selected);
            setSelectedDay(day);
          }
        } />}
        </div>

        
          <h1 className='text-2xl text-white text-center'>Details for {selectedDay}</h1>
          <div className='flex flex-row flex-wrap my-5 gap-8 justify-center'>
          {selectedForecast && <ForecastDetails data ={selectedForecast}/>}
          </div>

      </div>
    </div>
  )
}

export default App;
