
import { FaTemperatureThreeQuarters, FaDroplet } from "react-icons/fa6";

import getWeatherIcon from "../../GetWeatherIcon";

const CurrentWeather = ({ data }) => {
  console.log(data.current.condition.text);

  const weatherIcon = getWeatherIcon(
    data.current.condition.code,
    data.current.is_day
  );

  return (
    <div className="weather lg:sticky lg:top-14 mt-8 text-gray-50">
      {/* Top Section */}
      <div className="top-section flex flex-col items-center text-center">
        <div>
          <h1 className=" m-0 tracking-wide text-4xl ">
            {data.city}
          </h1>
        </div>
        <img className="w-3/5" src={weatherIcon} alt="Weather" />
      </div>

      <div className="bottom-section text-center md:-mt-14">
        <h1 className="font-light text-8xl">{data.current.temp_c}°</h1>
        <h2 className="font-light text-2xl">{data.current.condition.text}</h2>

        {/* Details Section */}
        <div className="w-full flex justify-evenly md:justify-center md:gap-x-16 mt-8 text-base">
          <div className="parameter-row text-start flex ">
            <FaTemperatureThreeQuarters className="opacity-70 text-3xl me-2" />

            <div className="flex flex-col items-start">
              <h2 className="opacity-70">Feels like</h2>

              <h2 className="opacity-90 text-4xl mt-2">
                {Math.round(data.current.feelslike_c)}°
              </h2>
            </div>
          </div>

          <div className="parameter-row text-start flex ">
            <FaDroplet className="opacity-70 text-3xl me-2" />

            <div className="flex flex-col items-start">
              <h2 className="opacity-70">Humidity</h2>

              <h2 className="opacity-90 text-4xl mt-2">
                {Math.round(data.current.humidity)}%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
