import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import { fetchCityWeather } from "../../store/weather.actions";

import * as Styled from "./SearchInput.styled";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event!.target.value);

  const handleCitySearch = () => {
    dispatch(fetchCityWeather(inputValue) as unknown as AnyAction);
    setInputValue("");
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      handleCitySearch();
    }
  };

  return (
    <Styled.InputContainer>
      <Styled.TextInput
        placeholder="Location"
        inputProps={{ "aria-label": "search city" }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <Styled.SearchButton
        type="button"
        aria-label="search"
        onClick={handleCitySearch}
      >
        <Styled.Icon />
      </Styled.SearchButton>
    </Styled.InputContainer>
  );
};

export default SearchInput;
