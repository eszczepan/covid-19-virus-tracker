import React, { useContext } from "react";
import styled from "styled-components";
import { CasesTypeContext } from "../../../context";
import InfoBox from "../../molecules/InfoBox/InfoBox";
import Map from "../../molecules/Map/Map";
import "leaflet/dist/leaflet.css";
import { prettyPrintStat } from "../../../utils";

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const MainTable = ({ countryInfo, mapCenter, mapZoom, mapCountries }) => {
  const { cases } = useContext(CasesTypeContext);
  const [casesType, setCasesType] = cases;
  return (
    <>
      <InfoHeader>
        <InfoBox
          isRed
          active={casesType === "cases"}
          onClick={() => setCasesType("cases")}
          title="Cases"
          cases={countryInfo.cases}
          today={prettyPrintStat(countryInfo.todayCases)}
        />

        <InfoBox
          isRed
          active={casesType === "deaths"}
          onClick={() => setCasesType("deaths")}
          title="Deaths"
          cases={countryInfo.deaths}
          today={prettyPrintStat(countryInfo.todayDeaths)}
        />
        <InfoBox
          active={casesType === "recovered"}
          onClick={() => setCasesType("recovered")}
          title="Recovered"
          cases={countryInfo.recovered}
          today={prettyPrintStat(countryInfo.todayRecovered)}
        />
      </InfoHeader>
      <Map
        center={mapCenter}
        zoom={mapZoom}
        countries={mapCountries}
        casesType={casesType}
      />
    </>
  );
};

export default MainTable;
