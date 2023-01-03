import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const getCityWeather = async (city: string) =>
  await axios(`${baseUrl}`, {
    params: {
      appid: process.env.REACT_APP_ID,
      q: city,
    },
  });
