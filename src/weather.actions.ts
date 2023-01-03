import { getCityWeather } from "./gateway/cityGateway.ts";

// export const FETCHING_DATA = "FETCHING_DATA";
// export const SEARCH_CITY = "SEARCH_CITY";

export const searchCity = (filterText) => {
  return {
    type: SEARCH_CITY,
    payload: filterText,
  };
};

export const fetchCityWeather = (city) => {
  return function (dispatch) {
    dispatch(getCityWeather(city));
  };
};

// export const fetchTasksList = () => {
//   return function (dispatch) {
//     tasksGateway
//       .fetchTasksList()
//       .then((tasksData) => dispatch(getTasksList(tasksData)));
//   };
// };
