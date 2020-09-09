import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import NewsCard from "../components/molecules/NewsCard/NewsCard";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  select {
    margin-left: 3rem;
    max-width: 20rem;
    padding: 0.5rem 1rem;
    outline-width: 0;
    border: none;
    border-radius: 10px;
  }
  option {
    border: none;
    border-radius: 10px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
`;

const News = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("ALL");
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.coronatracker.com/news/trending")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.items);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://api.coronatracker.com/v2/analytics/country")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.countryName,
            value: country.countryName,
          }));

          setCountries(
            countries.sort((a, b) =>
              a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
            )
          );
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const country = e.target.value;
    const url =
      country === "ALL"
        ? "https://api.coronatracker.com/news/trending"
        : `https://api.coronatracker.com/news/trending?&country=${country}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(country);
        setNews(data.items);
      });
  };

  return (
    <MainTemplate>
      <div>
        <StyledForm>
          <label htmlFor="countries">Latest News: </label>
          <select
            name="countries"
            id="countries"
            value={country}
            onChange={onCountryChange}
          >
            <option value="ALL" key="Latest">
              Trending
            </option>
            {countries.map((country) => (
              <option value={country.value} key={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </StyledForm>
        <StyledList>
          {news.length === 0
            ? "No Latest News"
            : news.map(
                ({
                  nid,
                  title,
                  description,
                  author,
                  urlToImage,
                  url,
                  siteName,
                }) => (
                  <NewsCard
                    key={nid}
                    title={title}
                    description={description}
                    author={author}
                    image={urlToImage}
                    link={url}
                    site={siteName}
                  />
                )
              )}
        </StyledList>
      </div>
    </MainTemplate>
  );
};

export default News;
