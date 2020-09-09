import React from "react";
import styled from "styled-components";

const StyledNewsCard = styled.li`
  display: flex;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 100%;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 0.6rem;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.s};
      margin-bottom: 0;
    }
  }
  img {
    width: 12rem;
    height: 12rem;
    margin-right: 1rem;
    @media (max-width: 760px) {
      width: 8rem;
      height: 8rem;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  .author {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-style: italic;
    margin-bottom: 0.7rem;
    color: #333;
  }
  .description {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 0.7rem;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
      margin-bottom: 0.3rem;
    }
  }
  .read-more {
    color: ${({ theme }) => theme.primary};
    margin-top: auto;
    text-align: right;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: black;
  text-decoration: none;
`;

const NewsCard = ({ title, description, author, image, link, site }) => {
  return (
    <StyledNewsCard>
      {image && <img src={image} alt={site} />}
      <StyledWrapper>
        <StyledLink href={link} target="_blank">
          <h2>{title}</h2>
          <p className="author">
            {author && `${author} |`} {site}
          </p>
          <p className="description">{description}</p>
          <p className="read-more">Read more</p>
        </StyledLink>
      </StyledWrapper>
    </StyledNewsCard>
  );
};

export default NewsCard;
