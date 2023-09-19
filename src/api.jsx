const geoApiKey = import.meta.env.VITE_GEO_API_KEY;
const geoApiHost = import.meta.env.VITE_GEO_API_HOST;
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherApiHost = import.meta.env.VITE_WEATHER_API_HOST;


export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': geoApiKey,
    'X-RapidAPI-Host': geoApiHost,
  },
};

export const weatherApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': weatherApiKey,
    'X-RapidAPI-Host': weatherApiHost,
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://weatherapi-com.p.rapidapi.com"


 