import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCity } from "../../weather.actions";
import { IState } from "../../types";
import { weatherIcon } from "../../constants";

import {
  CardContainer,
  TemperatureContainer,
  Temperature,
  CardInfo,
  Title,
  Text,
  CloseButton,
  Icon,
} from "./CityCards.styled";
import { Skeleton } from "@mui/material";

type Props = {
  setWeatherCardIsOpen: (value: boolean) => void;
  cityData: Array<string | number>;
  setCityData: (value: Array<string | number>) => void;
  setCityCoord: (value: number[]) => void;
};

const CityCards: FC<Props> = ({
  setWeatherCardIsOpen,
  cityData,
  setCityData,
  setCityCoord,
}) => {
  const citiesList = useSelector((state: IState) => state.cities);
  const dispatch = useDispatch();

  const temperature = (value: number) => {
    const result = Math.round(value) - 273;
    return result > 0 ? `+${result}°` : `${result}°`;
  };

  return (
    <>
      {citiesList?.map((city) =>
        city.id === null ? (
          <Skeleton />
        ) : (
          <CardContainer
            key={city.id}
            style={
              city.id === cityData[2] ? { border: "#748CDB solid 3px" } : {}
            }
            onClick={() => {
              setCityData([city.name, city.sys.country, city.id]);
              setCityCoord([city.coord.lat, city.coord.lon]);
            }}
          >
            <CloseButton
              onClick={() => {
                dispatch(deleteCity(city.id));
                setWeatherCardIsOpen(false);
              }}
            >
              <Icon />
            </CloseButton>
            <CardInfo onClick={() => setWeatherCardIsOpen(true)}>
              <Title variant="h5">{city.name}</Title>
              <div style={{ width: "70px", height: "70px", margin: "10px 0" }}>
                <img
                  src={weatherIcon[city.weather[0].main]}
                  alt="weather img"
                  style={{ width: "70px", margin: "10px 0" }}
                />
              </div>

              <TemperatureContainer>
                <Temperature>
                  <span>min</span>
                  <Text variant="h5">{temperature(city.main["temp_min"])}</Text>
                </Temperature>
                <Temperature>
                  <span>max</span>
                  <Text variant="h5">{temperature(city.main["temp_max"])}</Text>
                </Temperature>
              </TemperatureContainer>
            </CardInfo>
          </CardContainer>
        )
      )}
    </>
  );
};

export default CityCards;
