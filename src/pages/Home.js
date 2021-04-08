import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CasesProvider } from "../context";
import MainTemplate from "../templates/MainTemplate";
import MainTable from "../components/organisms/MainTable/MainTable";
import SideTable from "../components/organisms/SideTable/SideTable";
import { sortData } from "../utils";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  p {
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const pulse = keyframes`

0% {
		transform: scale(0.8);
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
	}
	
	100% {
		transform: scale(0.8);
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
	}
`;

const StyledCircle = styled.div`
  background-color: rgba(255, 82, 82, 1);
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
    margin-left: 3rem;
    max-width: 20rem;
    padding: 0.5rem 1rem;
    outline-width: 0;
    border: none;
    border-radius: 10px;
    @media (max-width: 760px) {
      max-width: 10rem;
      margin-left: 0.5rem;
    }
  }
  label {
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setIsLoading(true);

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
          setTimeout(() => setMapZoom(4), 500);
        }
        setIsLoading(false);
      });
  };
  return (
    <MainTemplate>
      <CasesProvider>
        <StyledWrapper>
          <StyledHeader>
            <FlexDiv>
              <StyledCircle />
              <p>Live</p>
            </FlexDiv>
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
          </StyledHeader>
          <MainTable
            countryInfo={countryInfo}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            mapCountries={mapCountries}
            isLoading={isLoading}
          />
        </StyledWrapper>
        <SideTable countries={tableData} />
      </CasesProvider>
    </MainTemplate>
  );
};

export default Home;
