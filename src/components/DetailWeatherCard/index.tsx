import React, { FC, useEffect } from "react";
import { AnyAction } from "redux";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
import { weatherIcons } from "../../constants/weatherIcons";
import {
  fetchHourlyWeather,
  setDetailWeatherCardState,
} from "../../store/weather.actions";
import { temperatureFormat } from "../../constants/utils";
import { IState } from "../../constants/types";

import * as Styled from "./DetailWeatherCard.styled";

type Props = {
  cityData: (string | number)[];
  cityCoord: number[];
};

const DetailWeatherCard: FC<Props> = ({ cityData, cityCoord }) => {
  const dispatch = useDispatch();
  const hourlyWeather = useSelector((state: IState) => state.hourlyWeather);

  const isWeatherFetching = useSelector(
    (state: IState) => state.isWeatherFetching
  );

  useEffect(() => {
    if (cityCoord.length) {
      dispatch(
        fetchHourlyWeather(cityCoord[0], cityCoord[1]) as unknown as AnyAction
      );
    }
  }, [cityCoord, dispatch]);

  const currentDay = moment().format("YYYY-MM-DD");
  const weatherToday = hourlyWeather.filter((el) =>
    el["dt_txt"].includes(currentDay)
  );
  const currentWeather = weatherToday[0];

  return isWeatherFetching ? (
    <span style={{ width: "420px" }}>
      <Styled.Skeleton variant="rounded" animation="wave" />
    </span>
  ) : (
    <Styled.WeatherContainer>
      <Styled.CloseButton
        onClick={() => dispatch(setDetailWeatherCardState(false))}
      >
        <Styled.Icon />
      </Styled.CloseButton>
      <Styled.Title>{cityData[0]}</Styled.Title>
      <Styled.Paragraph>{currentDay}</Styled.Paragraph>
      <Styled.ImgContainer>
        <img
          src={weatherIcons[currentWeather?.weather[0].main]}
          alt="weather icon"
          style={{ width: "120px", height: "120px" }}
        />
      </Styled.ImgContainer>

      <Styled.Paragraph style={{ marginBottom: "20px" }}>
        {currentWeather?.weather[0].description}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <b>Temp: &nbsp;</b>
        {temperatureFormat(currentWeather?.main.temp)}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <b>Feels like: &nbsp;</b>
        {temperatureFormat(currentWeather?.main.feels_like)}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <b>Humidity: &nbsp;</b> {currentWeather?.main.humidity}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <b>Pressure: &nbsp;</b> {currentWeather?.main.pressure}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <b>Wind speed: &nbsp;</b> {`${currentWeather?.wind.speed} m/s`}
      </Styled.Paragraph>
      <Styled.TemperatureChart>
        {weatherToday.map((el) => (
          <Styled.TemperatureChartContent key={el.dt}>
            <Styled.TemperatureSynopsis
              style={{ marginBottom: `${Math.round(el.main.temp) - 273}px` }}
            >
              {temperatureFormat(el.main.temp)}
            </Styled.TemperatureSynopsis>
            <Styled.TemperatureTime>
              {el["dt_txt"].split(" ")[1].slice(0, 5)}
            </Styled.TemperatureTime>
          </Styled.TemperatureChartContent>
        ))}
      </Styled.TemperatureChart>
    </Styled.WeatherContainer>
  );
};

export default DetailWeatherCard;
