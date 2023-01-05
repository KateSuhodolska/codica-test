import { IState } from "./types";
import { getItem } from "./utils";
import {
  START_FETCHING_CITY,
  CITY_DATA_FETCHED,
  START_FETCHING_WEATHER,
  WEATHER_DATA_FETCHED,
  GET_CITIES_LIST,
  DELETE_CITY,
  GET_WEATHER_TODAY,
} from "./weather.actions";

const initState: IState = {
  isCityFetching: false,
  isWeatherFetching: false,
  cities: getItem("cities") || [],
  hourlyWeather: [],
};

export const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_CITY:
      return {
        ...state,
        isCityFetching: true,
        cities: [...state.cities, { id: null }],
      };

    case CITY_DATA_FETCHED:
      return {
        ...state,
        isCityFetching: false,
        cities: state.cities.filter((el) => el.id !== null),
      };

    case GET_CITIES_LIST:
      return {
        ...state,
        cities: [...state.cities, action.payload.data.list[0]],
      };

    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case START_FETCHING_WEATHER:
      return {
        ...state,
        isWeatherFetching: true,
      };

    case WEATHER_DATA_FETCHED:
      return {
        ...state,
        isWeatherFetching: false,
      };

    case GET_WEATHER_TODAY:
      return {
        ...state,
        hourlyWeather: action.payload.data.list,
      };

    default:
      return state;
  }
};
