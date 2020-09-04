import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CasesProvider } from "../context";
import MainTemplate from "../templates/MainTemplate";
import MainTable from "../components/organisms/MainTable/MainTable";
import SideTable from "../components/organisms/SideTable/SideTable";
import { sortData } from "../utils";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-right: 1.5rem;
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("ALL");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 40.416775,
    lng: -3.70379,
  });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);

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
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(data);
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
        if (countryCode === "ALL") {
          setMapCenter({
            lat: 40.416775,
            lng: -3.70379,
          });
          setMapZoom(2);
        } else {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
        }
      });
  };
  return (
    <MainTemplate>
      <CasesProvider>
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
          <MainTable
            countryInfo={countryInfo}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            mapCountries={mapCountries}
          />
        </StyledWrapper>
        <SideTable countries={tableData} />
      </CasesProvider>
    </MainTemplate>
  );
};

export default Home;
