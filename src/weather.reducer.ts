import { SEARCH_CITY } from "./weather.actions.ts";

const initState = {
  cities: [],
  filterText: "",
};

export const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        filterText: action.payload,
      };

    default:
      return state;
  }
};
