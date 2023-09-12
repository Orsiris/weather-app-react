import * as React from 'react';

import Search from './components/Search';
import CurrentWeather from './components/Current-weather/Current-weather';
import WeatherForecast from './components/forecast/forecast';
import { WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';

import './App.css'
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

const handleOnSearchChange = (searchData) => {
 
    const [lat,lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch (`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch (`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])

    .then( async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse})
      setForecast({city: searchData.label, ...forecastResponse})
    })
  
    .catch((err) => console.log(err))
}
  console.log(currentWeather)
  console.log(forecast)

  return (
    
    <div className='container flex w-11/12 p-5 rounded-3xl'>
      <div className='w-2/5 p-5 rounded-3xl currentWeather flex flex-col '>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>

    <div className='w-3/5 p-5 rounded-3xl currentWeather flex flex-col ms-10'>
      <h1 className='text-4xl font-medium text-white'>Weather Forecast</h1>
      <WeatherForecast data={forecast} />
    </div>

    </div>
  )
}

export default App
