import axios from "axios";

const hourlyWeatherUrl = process.env.REACT_APP_HOURLY_WEATHER_URL;

export const getHourlyWeather = async (cityLat, cityLon) =>
  await axios(`${hourlyWeatherUrl}`, {
    params: {
      appid: process.env.REACT_APP_ID,
      lat: cityLat,
      lon: cityLon,
    },
  });
