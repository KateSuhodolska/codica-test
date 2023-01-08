import React, { FC } from "react";
import { useDispatch } from "react-redux";

import {
  deleteCity,
  setDetailWeatherCardState,
} from "../../store/weather.actions";
import { temperatureFormat } from "../../constants/utils";
import { ICity } from "../../constants/types";
import { weatherIcons } from "../../constants/weatherIcons";
import { Typography } from "@mui/material";

import * as Styled from "./CityCard.styled";

type Props = {
  city: ICity;
  cityData: Array<string | number>;
  setCityData: (value: Array<string | number>) => void;
  setCityCoord: (value: number[]) => void;
};

const CityCard: FC<Props> = ({ city, cityData, setCityData, setCityCoord }) => {
  const dispatch = useDispatch();

  return (
    <Styled.CardContainer
      key={city.id}
      style={city.id === cityData[2] ? { border: "3px solid #748CDB" } : {}}
      onClick={() => {
        setCityData([city.name, city.sys.country, city.id]);
        setCityCoord([city.coord.lat, city.coord.lon]);
      }}
    >
      <Styled.CloseButton
        onClick={() => {
          dispatch(deleteCity(city.id));
          dispatch(setDetailWeatherCardState(false));
        }}
      >
        <Styled.Icon />
      </Styled.CloseButton>
      <Styled.CardInfo
        onClick={() => dispatch(setDetailWeatherCardState(true))}
      >
        <Styled.Title variant="h5">{city.name}</Styled.Title>
        <Styled.ImgContainer>
          <img
            src={weatherIcons[city.weather[0].main]}
            alt="weather img"
            style={{ width: "70px" }}
          />
        </Styled.ImgContainer>

        <Styled.TemperatureContainer>
          <Styled.Temperature>
            <span>min</span>
            <Typography variant="h5">
              {temperatureFormat(city.main["temp_min"])}
            </Typography>
          </Styled.Temperature>
          <Styled.Temperature>
            <span>max</span>
            <Typography variant="h5">
              {temperatureFormat(city.main["temp_max"])}
            </Typography>
          </Styled.Temperature>
        </Styled.TemperatureContainer>
      </Styled.CardInfo>
    </Styled.CardContainer>
  );
};

export default CityCard;
