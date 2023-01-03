import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchCityWeather } from "../../weather.actions.ts";
import {
  InputContainer,
  TextInput,
  SearchButton,
  Icon,
} from "./SearchInput.styled.tsx";

const SearchInput = ({ fetchCityWeather }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      fetchCityWeather(inputValue);
    }
  };

  return (
    <InputContainer>
      <TextInput
        placeholder="Location"
        inputProps={{ "aria-label": "search city" }}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
      <SearchButton
        type="button"
        aria-label="search"
        onClick={() => fetchCityWeather(inputValue)}
      >
        <Icon />
      </SearchButton>
    </InputContainer>
  );
};
const mapState = (state) => {
  return {
    isFetching: state.cities,
  };
};

const mapDispatch = {
  fetchCityWeather,
};

const connector = connect(mapState, mapDispatch);

export default SearchInput;
