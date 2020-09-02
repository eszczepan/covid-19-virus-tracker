import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
`;

const Logo = () => {
  return <StyledLogo>Covid-19 Virus Tracker</StyledLogo>;
};

export default Logo;
