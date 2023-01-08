import { getCityWeather } from "../gateway/cityGateway";
import { getHourlyWeather } from "../gateway/hourlyWeatherGateway";
import { getItem, setItem } from "../constants/utils";

export const START_FETCHING_CITY = "START_FETCHING_CITY";
export const CITY_DATA_FETCHED = "CITY_DATA_FETCHED";
export const START_FETCHING_WEATHER = "START_FETCHING_WEATHER";
export const WEATHER_DATA_FETCHED = "WEATHER_DATA_FETCHED";
export const GET_CITIES_LIST = "GET_CITIES_LIST";
export const DELETE_CITY = "DELETE_CITY";
export const GET_WEATHER_TODAY = "GET_WEATHER_TODAY";
export const DETAIL_WEATHER_CARD_STATE = "DETAIL_WEATHER_CARD_STATE";

export const startCityFetching = () => {
  return {
    type: START_FETCHING_CITY,
  };
};

export const cityFetchedSuccessfully = () => {
  return {
    type: CITY_DATA_FETCHED,
  };
};

export const startWeatherFetching = () => {
  return {
    type: START_FETCHING_WEATHER,
  };
};

export const weatherFetchedSuccessfully = () => {
  return {
    type: WEATHER_DATA_FETCHED,
  };
};

export const getCitiesList = (citiesData) => {
  return {
    type: GET_CITIES_LIST,
    payload: citiesData,
  };
};

export const getWeatherToday = (weatherData) => {
  return {
    type: GET_WEATHER_TODAY,
    payload: weatherData,
  };
};

export const setDetailWeatherCardState = (state) => {
  return {
    type: DETAIL_WEATHER_CARD_STATE,
    payload: state,
  };
};

export const deleteCity = (id) => {
  const cities = getItem("cities");
  setItem(
    "cities",
    cities.filter((city) => city.id !== id)
  );
  return {
    type: DELETE_CITY,
    payload: id,
  };
};

export const fetchCityWeather = (city) => {
  return async function (dispatch) {
    dispatch(startCityFetching());
    await getCityWeather(city).then((data) => {
      if (data.status === 200 && data.data.list[0]) {
        dispatch(getCitiesList(data));
        const cities = getItem("cities") || [];
        setItem("cities", cities.concat(data.data.list[0]));
      }
    });
    dispatch(cityFetchedSuccessfully());
  };
};

export const fetchHourlyWeather = (cityLat, cityLon) => {
  return async function (dispatch) {
    dispatch(startWeatherFetching());

    await getHourlyWeather(cityLat, cityLon).then((data) => {
      if (data.status === 200) {
        dispatch(getWeatherToday(data));
      }
    });
    dispatch(weatherFetchedSuccessfully());
  };
};
