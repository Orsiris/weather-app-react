
import getMoonIcon from "../../getMoonIcon";

const ForecastDetails = ({ data }) => {
  

  const moonIcon = getMoonIcon(data.astro.moon_phase);
console.log(moonIcon)

    const forecastDetailsLabel = [
      {
        label: "Sunrise",
        forecastData: data.astro.sunrise,
        icon: "sunrise.svg",
      },
      {
        label: "Sunset",
        forecastData: data.astro.sunset,
        icon: "sunset.svg",
      },

      {
        label: "Moonrise",
        forecastData: data.astro.moonrise,
        icon: "moonrise.svg",
      },
      {
        label: "Moonset",
        forecastData: data.astro.moonset,
        icon: "moonset.svg",
      },
      {
        label: "Chance of Rain",
        forecastData: data.day.daily_chance_of_rain + "%",
        icon: "rain.svg",
      },
      {
        label: "Total Precipitation",
        forecastData: data.day.totalprecip_mm + "mm",
        icon: "raindrops.svg",
      },
      {
        label: "Max Wind Speed",
        forecastData: data.day.maxwind_kph + "km/h",
        icon: "wind.svg",
      },
     
      {
        label: "Moon Phase",
        forecastData: data.astro.moon_phase,
        icon: moonIcon,
      },
    ];
  
    return forecastDetailsLabel.map((forecastDetails, index) => (
      <div key={index} className="w-52 md:w-60 md:flex-grow  lg:w-44  bg-[#202a3a] p-5 rounded-3xl text-white">
        <h1 className="text-sm opacity-80">{forecastDetails.label}</h1>

        <div className="flex flex-col text-center items-center">
          <img className="w-3/4" src={`/icons/${forecastDetails.icon}`} alt="Weather" />

          <h1 className="font-medium text-lg">{forecastDetails.forecastData}</h1>
          </div>

      </div>
    ));
  };
  
  export default ForecastDetails;
  