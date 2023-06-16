import axios from "axios";

const getWeatherAtLocation = (query) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  
  const request = axios.get(url);
  return request.then(response => {
    return response.data;
  })
}

export default { getWeatherAtLocation }

