import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import NewsCard from '../components/molecules/NewsCard/NewsCard';
import Spinner from '../components/atoms/Spinner/Spinner';

const StyledWrapper = styled.div`
  width: 100%;
`;

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
  label {
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
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
  const [country, setCountry] = useState('ALL');
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.coronatracker.com/news/trending')
      .then((response) => response.json())
      .then((data) => {
        setNews(data.items);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      setIsLoading(true);
      await fetch('http://api.coronatracker.com/v3/stats/worldometer/country')
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
      setIsLoading(false);
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    setIsLoading(true);
    const country = e.target.value;
    const url =
      country === 'ALL'
        ? 'https://api.coronatracker.com/news/trending'
        : `https://api.coronatracker.com/news/trending?&country=${country}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(country);
        setNews(data.items);
      });
    setIsLoading(false);
  };

  return (
    <MainTemplate>
      <StyledWrapper>
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
          {isLoading ? (
            <Spinner />
          ) : news.length === 0 ? (
            'No Latest News'
          ) : (
            news.map(
              ({
                nid,
                title,
                description,
                author,
                urlToImage,
                url,
                siteName,
                publishedAt,
              }) => (
                <NewsCard
                  key={nid}
                  title={title}
                  description={description}
                  author={author}
                  image={urlToImage}
                  link={url}
                  site={siteName}
                  date={publishedAt}
                />
              )
            )
          )}
        </StyledList>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default News;
