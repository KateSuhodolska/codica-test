import React, { useEffect } from "react";
import { AnyAction } from "redux";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
import { weatherIcon } from "../../constants";
import { fetchHourlyWeather } from "../../weather.actions";
import { IState } from "../../types";

import {
  WeatherContainer,
  WeatherContent,
  CloseButton,
  Icon,
  Title,
  Paragraph,
  TemperatureChart,
  TemperatureSynopsis,
  Skeleton,
} from "./DetailWeatherCard.styled";

const DetailWeatherCard = ({
  weatherCardIsOpen,
  setWeatherCardIsOpen,
  cityData,
  cityCoord,
}) => {
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

  const temperature = (value: number) => {
    const result = Math.round(value) - 273;
    return result > 0 ? `+${result}°` : `${result}°`;
  };

  return (
    weatherCardIsOpen &&
    (isWeatherFetching ? (
      <span style={{ width: "420px" }}>
        <Skeleton variant="rounded" animation="wave" />
      </span>
    ) : (
      <WeatherContainer>
        <CloseButton onClick={() => setWeatherCardIsOpen(false)}>
          <Icon />
        </CloseButton>
        <Title>{cityData[0]}</Title>
        <Paragraph>{currentDay}</Paragraph>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={weatherIcon[currentWeather?.weather[0].main]}
            alt="weather icon"
            style={{ width: "120px", height: "120px" }}
          />
        </div>

        <Paragraph style={{ marginBottom: "20px" }}>
          {currentWeather?.weather[0].description}
        </Paragraph>
        <Paragraph>
          <b>Temp:</b>
          {temperature(currentWeather?.main.temp)}
        </Paragraph>
        <Paragraph>
          <b>Feels like:</b> {temperature(currentWeather?.main.feels_like)}
        </Paragraph>
        <Paragraph>
          <b>Humidity:</b> {currentWeather?.main.humidity}
        </Paragraph>
        <Paragraph>
          <b>Pressure:</b> {currentWeather?.main.pressure}
        </Paragraph>
        <Paragraph>
          <b>Wind speed:</b> {`${currentWeather?.wind.speed} m/s`}
        </Paragraph>
        <TemperatureChart>
          {weatherToday.map((el) => (
            <span
              key={el.dt}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "250px",
              }}
            >
              <TemperatureSynopsis
                style={{ marginBottom: `${Math.round(el.main.temp) - 273}px` }}
              >
                {temperature(el.main.temp)}
              </TemperatureSynopsis>
              <WeatherContent>
                {el["dt_txt"].split(" ")[1].slice(0, 5)}
              </WeatherContent>
            </span>
          ))}
        </TemperatureChart>
      </WeatherContainer>
    ))
  );
};

export default DetailWeatherCard;
