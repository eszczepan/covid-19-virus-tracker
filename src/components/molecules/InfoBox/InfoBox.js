import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

const InfoBox = ({ title, confirmed, recovered, deaths }) => {
  return (
    <StyledBox>
      <span>{confirmed}</span>
      <span>{recovered}</span>
      <span>{deaths}</span>
      <span>{title}</span>
    </StyledBox>
  );
};

export default InfoBox;
