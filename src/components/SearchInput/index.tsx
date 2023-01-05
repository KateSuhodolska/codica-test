import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import { fetchCityWeather } from "../../weather.actions";

import {
  InputContainer,
  TextInput,
  SearchButton,
  Icon,
} from "./SearchInput.styled";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => setInputValue(event.target.value);

  const handleCitySearch = () => {
    dispatch(fetchCityWeather(inputValue) as unknown as AnyAction);
    setInputValue("");
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleCitySearch();
    }
  };

  return (
    <InputContainer>
      <TextInput
        placeholder="Location"
        inputProps={{ "aria-label": "search city" }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <SearchButton
        type="button"
        aria-label="search"
        onClick={handleCitySearch}
      >
        <Icon />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchInput;
