import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${spin} 1.4s infinite linear;
  font-size: 0.5rem;
  margin: 1.5rem auto;
  text-indent: -9999em;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  transform: translateZ(0);
  :before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.primary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  :after {
    background: #f5f5f5;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const StyledDiv = styled.div`
  min-height: 100%;
  margin-top: 15rem;
  @media (max-width: 760px) {
    margin-top: 5rem;
  }
`;

const Spinner = () => (
  <StyledDiv>
    <StyledSpinner />
  </StyledDiv>
);

export default Spinner;
