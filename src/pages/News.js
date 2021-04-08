import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import NewsCard from "../components/molecules/NewsCard/NewsCard";
import Spinner from "../components/atoms/Spinner/Spinner";

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      await fetch("https://api.coronatracker.com/news/trending")
        .then((response) => response.json())
        .then((data) => {
          setNews(data.items);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);

  return (
    <MainTemplate>
      <StyledWrapper>
        <StyledList>
          {isLoading ? (
            <Spinner />
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
