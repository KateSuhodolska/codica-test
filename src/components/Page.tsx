import React, { useState } from "react";
import { useSelector } from "react-redux";

import SearchInput from "./SearchInput";
import WeatherCards from "./WeatherCards";
import DetailWeatherCard from "./DetailWeatherCard";
import { IState } from "../constants/types";

import * as Styled from "./Page.styled";

const Page = () => {
  const [cityData, setCityData] = useState<Array<string | number>>([]);
  const [cityCoord, setCityCoord] = useState<number[]>([]);

  const isDetailWeatherCardIsOpen = useSelector(
    (state: IState) => state.isDetailWeatherCardIsOpen
  );

  return (
    <Styled.Layout>
      {isDetailWeatherCardIsOpen && (
        <DetailWeatherCard cityData={cityData} cityCoord={cityCoord} />
      )}
      <Styled.MainInfoContainer>
        <SearchInput />
        <Styled.CardContainer>
          <WeatherCards
            cityData={cityData}
            setCityData={setCityData}
            setCityCoord={setCityCoord}
          />
        </Styled.CardContainer>
      </Styled.MainInfoContainer>
    </Styled.Layout>
  );
};

export default Page;
