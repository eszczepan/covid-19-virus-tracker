import React from "react";
import styled from "styled-components";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0a")}` : "0 today";

//Draw circles on the map

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 700,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 700,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 1000,
  },
};

const StyledWrapper = styled.div`
  .flag {
    width: 100%;
    height: 8rem;
    background-size: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  .country {
    color: #555;
    font-weight: bold;
    font-size: 1.8rem;
  }
  .cases,
  .recovered,
  .deaths {
    margin-top: 0.5rem;
  }
`;

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country, id) => (
    <Circle
      key={id}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <StyledWrapper>
          <div
            className="flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="country">{country.country}</div>
          <div className="cases">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </StyledWrapper>
      </Popup>
    </Circle>
  ));
