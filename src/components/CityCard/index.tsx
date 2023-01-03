import React, { useState } from "react";

import {
  CardContainer,
  TemperatureContainer,
  Temperature,
  CardInfo,
  Title,
  CloseButton,
  Icon,
} from "./CityCard.styled.tsx";
import image from "../../img/partly-cloudy.png";

const CityCard = () => {
  const [cardVisible, setCardVisible] = useState(true);

  return (
    cardVisible && (
      <CardContainer>
        <CloseButton onClick={() => setCardVisible(!cardVisible)}>
          <Icon />
        </CloseButton>
        <CardInfo>
          <Title variant="h5">Paris</Title>
          <img
            src={image}
            alt="clear sky"
            style={{ width: "70px", margin: "10px 0" }}
          />
          <TemperatureContainer>
            <Temperature>
              <span>min</span>
              <Title variant="h5">+9°</Title>
            </Temperature>
            <Temperature>
              <span>max</span>
              <Title variant="h5">+11°</Title>
            </Temperature>
          </TemperatureContainer>
        </CardInfo>
      </CardContainer>
    )
  );
};

export default CityCard;
