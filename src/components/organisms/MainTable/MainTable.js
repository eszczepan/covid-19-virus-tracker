import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfoBox from "../../molecules/InfoBox/InfoBox";
import Map from "../../molecules/Map/Map";

const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-right: 1.5rem;
  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 830px) {
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

const MainTable = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("ALL");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "ALL"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  return (
    <StyledWrapper>
      <StyledForm>
        <label htmlFor="countries">Stats Overview</label>
        <select
          name="countries"
          id="countries"
          value={country}
          onChange={onCountryChange}
        >
          <option value="ALL" key="Global">
            Global
          </option>
          {countries.map((country) => (
            <option value={country.value} key={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </StyledForm>
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
      <Map />
    </StyledWrapper>
  );
};

export default MainTable;
