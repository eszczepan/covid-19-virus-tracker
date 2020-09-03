import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import Navbar from "../components/organisms/Navbar/Navbar";

const StyledWrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 1400px) {
    max-width: 100rem;
  }
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <StyledWrapper>
          <StyledMain>{children}</StyledMain>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
