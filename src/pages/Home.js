import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import MainTable from "../components/organisms/MainTable/MainTable";
import SideTable from "../components/organisms/SideTable/SideTable";
import { sortData } from "../utils";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("ALL");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

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
    <MainTemplate>
      <div>
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
        <MainTable countryInfo={countryInfo} />
      </div>
      <SideTable countries={tableData} />
    </MainTemplate>
  );
};

export default Home;
