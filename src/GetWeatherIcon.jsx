const getWeatherIcon = (code, isDay) => {
    const weatherData = [
      {
        "code" : 1000,
        "day" : "clear-day",
        "night" : "clear-night",
        
      },
      {
        "code" : 1003,
        "day" : "partly-cloudy-day",
        "night" : "partly-cloudy-night",
        
      },
      {
        "code" : 1006,
        "day" : "cloudy",
        "night" : "cloudy",
        
      },
      {
        "code" : 1009,
        "day" : "overcast-day",
        "night" : "overcast",
        
      },
      {
        "code" : 1030,
        "day" : "mist",
        "night" : "mist",
        
      },
      {
        "code" : 1063,
        "day" : "partly-cloudy-day-drizzle",
        "night" : "partly-cloudy-night-drizzle",
       
      },
      {
        "code" : 1066,
        "day" : "partly-cloudy-day-snow",
        "night" : "partly-cloudy-night-snow",
       
      },
      {
        "code" : 1069,
        "day" : "partly-cloudy-day-sleet",
        "night" : "partly-cloudy-night-sleet",
        
      },
      {
        "code" : 1072,
        "day" : "partly-cloudy-day-drizzle",
        "night" : "partly-cloudy-night-sleet",
       
      },
      {
        "code" : 1087,
        "day" : "thunderstorms-day",
        "night" : "thunderstorms-night",
       
      },
      {
        "code" : 1114,
        "day" : "wind-snow",
        "night" : "wind-snow",
        
      },
      {
        "code" : 1117,
        "day" : "wind-snow",
        "night" : "wind-snow",
        
      },
      {
        "code" : 1135,
        "day" : "fog-day",
        "night" : "fog-night",
        
      },
      {
        "code" : 1147,
        "day" : "fog-day",
        "night" : "fog-night",
        
      },
      {
        "code" : 1150,
        "day" : "drizzle",
        "night" : "drizzle",
       
      },
      {
        "code" : 1153,
        "day" : "drizzle",
        "night" : "drizzle",
       
      },
      {
        "code" : 1168,
        "day" : "drizzle",
        "night" : "drizzle",
       
      },
      {
        "code" : 1171,
        "day" : "extreme-drizzle",
        "night" : "extreme-drizzle",
        
      },
      {
        "code" : 1180,
        "day" : "rain",
        "night" : "rain",
       
      },
      {
        "code" : 1183,
        "day" : "rain",
        "night" : "rain",
        
      },
      {
        "code" : 1186,
        "day" : "rain",
        "night" : "rain",
       
      },
      {
        "code" : 1189,
        "day" : "rain",
        "night" : "rain",
      
      },
      {
        "code" : 1192,
        "day" : "rain",
        "night" : "rain",
      
      },
      {
        "code" : 1195,
        "day" : "rain",
        "night" : "rain",
       
      },
      {
        "code" : 1198,
        "day" : "rain",
        "night" : "rain",
       
      },
      {
        "code" : 1201,
        "day" : "rain",
        "night" : "rain",
        
      },
      {
        "code" : 1204,
        "day" : "sleet",
        "night" : "sleet",
        
      },
      {
        "code" : 1207,
        "day" : "sleet",
        "night" : "sleet",
       
      },
      {
        "code" : 1210,
        "day" : "partly-cloudy-day-snow",
        "night" : "partly-cloudy-night-snow",
        
      },
      {
        "code" : 1213,
        "day" : "snow",
        "night" : "snow",
       
      },
      {
        "code" : 1216,
        "day" : "partly-cloudy-day-snow",
        "night" : "partly-cloudy-night-snow",
      
      },
      {
        "code" : 1219,
        "day" : "snow",
        "night" : "snow",
       
      },
      {
        "code" : 1222,
        "day" : "partly-cloudy-day-snow",
        "night" : "partly-cloudy-night-snow",
        
      },
      {
        "code" : 1225,
        "day" : "extreme-snow",
        "night" : "extreme-snow",
      
      },
      {
        "code" : 1237,
        "day" : "hail",
        "night" : "hail",
       
      },
      {
        "code" : 1240,
        "day" : "drizzle",
        "night" : "drizzle",
      
      },
      {
        "code" : 1243,
        "day" : "extreme-rain",
        "night" : "extreme-rain",
      
      },
      {
        "code" : 1246,
        "day" : "extreme-rain",
        "night" : "extreme-rain",
      
      },
      {
        "code" : 1249,
        "day" : "sleet",
        "night" : "sleet",
      
      },
      {
        "code" : 1252,
        "day" : "extreme-sleet",
        "night" : "extreme-sleet",
       
      },
      {
        "code" : 1255,
        "day" : "snow",
        "night" : "snow",
       
      },
      {
        "code" : 1258,
        "day" : "extreme-day-snow",
        "night" : "extreme-night-snow",
        
      },
      {
        "code" : 1261,
        "day" : "hail",
        "night" : "hail",
        
      },
      {
        "code" : 1264,
        "day" : "extreme-day-hail",
        "night" : "extreme-night-hail",
        
      },
      {
        "code" : 1273,
        "day" : "thunderstorms-day-rain",
        "night" : "thunderstorms-night-rain",
       
      },
      {
        "code" : 1276,
        "day" : "thunderstorms-day-extreme-rain",
        "night" : "thunderstorms-night-extreme-rain",
        
      },
      {
        "code" : 1279,
        "day" : "thunderstorms-day-snow",
        "night" : "thunderstorms-night-snow",
        
      },
      {
        "code" : 1282,
        "day" : "thunderstorms-day-extreme-snow",
        "night" : "thunderstorms-night-extreme-snow",
       
      },
      // Add more weather data as needed
    ];
  
    // Find the weather data with a matching code
    const matchingWeather = weatherData.find((weather) => weather.code === code);
  
    if (matchingWeather) {

      if(isDay === 1){
        return (`/icons/${matchingWeather.day}.svg`);
      }

      else if( isDay === 0){
        return (`/icons/${matchingWeather.night}.svg`);
      }
     
      
    } else {
      
      return null;
    }
  };
  

  export default getWeatherIcon;