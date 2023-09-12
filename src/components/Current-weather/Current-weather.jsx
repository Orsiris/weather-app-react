import "./Current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather mt-8 text-gray-50">
      {/* Top Section */}
      <div className="top-section flex flex-col items-center text-center">
        <div>
          <h1 className="font-semibold m-0 tracking-wide text-4xl ">{data.city}</h1>
          <h2 className="font-medium m-0 tracking-wide mt-4 capitalize">{data.weather[0].description}</h2>
        </div>
        <img className="w-72" src={`icons/${data.weather[0].icon}.svg`} alt="Weather" />
      </div>

      <div className="bottom-section text-center">
        <h1 className="font-normal text-8xl m-">{Math.round(data.main.temp)}°</h1>

        {/* Details Section */}
        <div className="w-full ps-5 flex justify-evenly mt-5 text-base">
        
        <div className="parameter-row">
          <span>Feels like </span>
          <span className="font-bold">{Math.round(data.main.feels_like)}°C</span>
        </div>

        <div className="parameter-row">
          <span >Humidity </span>
          <span className="font-bold">{Math.round(data.main.humidity)}%</span>
        </div>

        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
