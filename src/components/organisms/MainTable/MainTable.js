import React from "react";
import styled from "styled-components";
import InfoBox from "../../molecules/InfoBox/InfoBox";
import Map from "../../molecules/Map/Map";
import "leaflet/dist/leaflet.css";

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledColumn = styled.div`
  padding: 1rem;
`;

const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledInnerColumn = styled.div`
  display: flex;
`;

const MainTable = ({ countryInfo, mapCenter, mapZoom, mapCountries }) => {
  return (
    <>
      <InfoHeader>
        <StyledColumn>
          <StyledTitle>Total</StyledTitle>
          <StyledInnerColumn>
            <InfoBox title="Confirmed" confirmed={countryInfo.cases} />
            <InfoBox title="Recovered" recovered={countryInfo.recovered} />
            <InfoBox title="Deaths" deaths={countryInfo.deaths} />
          </StyledInnerColumn>
        </StyledColumn>
        <StyledColumn>
          <StyledTitle>Today</StyledTitle>
          <StyledInnerColumn>
            <InfoBox title="Confirmed" confirmed={countryInfo.todayCases} />
            <InfoBox title="Recovered" recovered={countryInfo.todayRecovered} />
            <InfoBox title="Deaths" deaths={countryInfo.todayDeaths} />
          </StyledInnerColumn>
        </StyledColumn>
      </InfoHeader>
      <Map center={mapCenter} zoom={mapZoom} countries={mapCountries} />
    </>
  );
};

export default MainTable;
