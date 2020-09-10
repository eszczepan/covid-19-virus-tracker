import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColumnTemplate from "../templates/ColumnTemplate";
import TravelCard from "../components/molecules/TravelCard/TravelCard";

const StyledHeader = styled.h2`
  @media (max-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Travel = () => {
  const [travelInfo, setTravelInfo] = useState([]);
  useEffect(() => {
    const getTravelData = async () => {
      await fetch("https://api.coronatracker.com/v1/travel-alert")
        .then((response) => response.json())
        .then((data) => setTravelInfo(data));
    };
    getTravelData();
  }, []);
  return (
    <ColumnTemplate>
      <StyledHeader>Travel Alert Information</StyledHeader>
      {travelInfo.map(({ countryName, alertMessage, publishedDate }) => (
        <TravelCard
          key={countryName}
          country={countryName}
          message={alertMessage}
          date={publishedDate}
        />
      ))}
    </ColumnTemplate>
  );
};

export default Travel;
