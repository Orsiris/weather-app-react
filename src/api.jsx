
const ApiKey = proccess.env.REACT_APP_API_KEY
const ApiHost = proccess.env.REACT_APP_WEATHER_API_HOST




export const weatherApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': ApiKey,
		'X-RapidAPI-Host': ApiHost,
	}
};



export const WEATHER_API_URL = proccess.env.REACT_APP_WEATHER_API_URL


 