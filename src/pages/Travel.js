import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColumnTemplate from "../templates/ColumnTemplate";
import TravelCard from "../components/molecules/TravelCard/TravelCard";
import Spinner from "../components/atoms/Spinner/Spinner";

const StyledHeader = styled.h2`
  @media (max-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Travel = () => {
  const [travelInfo, setTravelInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTravelData = async () => {
      setIsLoading(true);
      await fetch("https://api.coronatracker.com/v1/travel-alert")
        .then((response) => response.json())
        .then((data) => setTravelInfo(data));
      setIsLoading(false);
    };
    getTravelData();
  }, []);

  return (
    <ColumnTemplate>
      <StyledHeader>Travel Alert Information</StyledHeader>
      {isLoading ? (
        <Spinner />
      ) : (
        travelInfo.map(({ countryName, alertMessage, publishedDate }) => (
          <TravelCard
            key={countryName}
            country={countryName}
            message={alertMessage}
            date={publishedDate}
          />
        ))
      )}
    </ColumnTemplate>
  );
};

export default Travel;
