import getWeatherIcon from "../../GetWeatherIcon";
import { useState } from "react";

const WeatherForecast = ({ data, onSelectForecast }) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [selectedForecastIndex, setSelectedForecastIndex] = useState(0);

  return (
    <>
      {data.forecast.forecastday.map((day, index) => {
        // Parse the date to get the day of the week
        const date = new Date(day.date);
        const dayOfWeek = weekDays[date.getDay()];

        // Determine the label based on the index
        const label = index === 0 ? "Today" : dayOfWeek;

        return (
          <div
            key={day.date}
            className={`w-60 h-auto rounded-3xl p-5 flex flex-col text-center text-white 
    transition ease-in-out bg-[#202a3a] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 cursor-pointer ${
      selectedForecastIndex === index ? "bg-indigo-600" : "bg-[#202a3a]"
    }`}
            onClick={() => {
              onSelectForecast(day, label);
              setSelectedForecastIndex(index);s
            }}
          >
            <h1 className="text-lg">{label}</h1>{" "}
            {/* Display "Today" or the day of the week */}
            <h1 className="opacity-70">
              {date.toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
              })}
            </h1>
            <img
              className="w-3/4 mx-auto"
              src={getWeatherIcon(day.day.condition.code, 1)}
              alt="Weather"
            />
            <div className="flex flex-row justify-between px-8">
              <h1 className="font-light text-2xl">{day.day.maxtemp_c}°</h1>
              <h1 className="font-light text-2xl opacity-80">
                {day.day.mintemp_c}°
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WeatherForecast;
