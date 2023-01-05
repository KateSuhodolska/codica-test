import React, { useState } from "react";
import SearchInput from "./SearchInput/index";
import CityCards from "./CityCards/index";
import DetailWeatherCard from "./DetailWeatherCard";

import { Layout, MainInfoContainer, CardContainer } from "./Page.styled";

const Page = () => {
  const [weatherCardIsOpen, setWeatherCardIsOpen] = useState(false);
  const [cityData, setCityData] = useState<Array<string | number>>([]);
  const [cityCoord, setCityCoord] = useState<number[]>([]);

  return (
    <Layout>
      <DetailWeatherCard
        weatherCardIsOpen={weatherCardIsOpen}
        setWeatherCardIsOpen={setWeatherCardIsOpen}
        cityData={cityData}
        cityCoord={cityCoord}
      />
      <MainInfoContainer>
        <SearchInput />
        <CardContainer>
          <CityCards
            setWeatherCardIsOpen={setWeatherCardIsOpen}
            cityData={cityData}
            setCityData={setCityData}
            setCityCoord={setCityCoord}
          />
        </CardContainer>
      </MainInfoContainer>
    </Layout>
  );
};

export default Page;
