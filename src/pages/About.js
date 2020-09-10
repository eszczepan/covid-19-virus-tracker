import React from "react";
import styled from "styled-components";
import ColumnTemplate from "../templates/ColumnTemplate";
import githubIcon from "../assets/icons/githubIcon.svg";

const StyledWrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  margin: 2rem 0 4rem;
  border-radius: 5px;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    @media (max-width: 460px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  p {
    line-height: 2.7rem;
    margin-bottom: 1rem;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  a {
    color: ${({ theme }) => theme.tertiary};
    text-decoration: none;
  }
  li {
    margin-left: 3rem;
    line-height: 3rem;
  }
  .link {
    display: block;
    margin: 0 auto;
    margin-top: 4rem;
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    background-image: url(${githubIcon});
    background-position: center;
    background-size: cover;
    border: none;
    border-radius: 50%;
    outline-width: 0;
    cursor: pointer;
    transition: all 0.5s ease;
    :hover {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

const About = () => {
  return (
    <ColumnTemplate>
      <StyledWrapper>
        <h2>About Project</h2>
        <p>
          <strong>COVID-19 VIRUS TRACKER</strong> is non-commercial project
          created as a part of learning new technologies.
        </p>
        <p>
          The project was largely inspired by the site
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.coronatracker.com/"
          >
            {" "}
            <strong>coronatracker.com</strong>
          </a>{" "}
          where all the contents are handpicked, filtered, and curated by
          volunteers to our best extent to ensure that sources are reliable with
          minimal hoaxes and fake news, in the best benefit of the public.
        </p>
        <p>APIs that I used making this website:</p>
        <ul>
          <li>
            <a href="https://api.coronatracker.com/">
              <strong>api.coronatracker.com</strong>
            </a>
          </li>
          <li>
            <a href="https://disease.sh/">
              <strong>disease.sh</strong>
            </a>
          </li>
        </ul>
        <a
          href="https://github.com/eszczepan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="link"></button>
        </a>
      </StyledWrapper>
    </ColumnTemplate>
  );
};

export default About;
