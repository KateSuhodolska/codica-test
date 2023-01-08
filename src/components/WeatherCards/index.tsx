import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../constants/types";
import CityCard from "../CityCard";
import { Skeleton } from "@mui/material";

type Props = {
  cityData: Array<string | number>;
  setCityData: (value: Array<string | number>) => void;
  setCityCoord: (value: number[]) => void;
};

const CityCards: FC<Props> = ({ cityData, setCityData, setCityCoord }) => {
  const citiesList = useSelector((state: IState) => state.cities);

  return (
    <>
      {citiesList?.map((city) =>
        city.id === null ? (
          <Skeleton />
        ) : (
          <CityCard
            key={city.id}
            city={city}
            cityData={cityData}
            setCityData={setCityData}
            setCityCoord={setCityCoord}
          />
        )
      )}
    </>
  );
};

export default CityCards;
