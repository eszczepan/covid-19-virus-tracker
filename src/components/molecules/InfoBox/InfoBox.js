import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
  border-top: ${({ active }) => (active ? "7px solid" : null)};
  border-top-color: ${({ isRed }) => (isRed ? "#CC1034" : "greenyellow")};
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  p {
    flex: 1;
    margin: 0.3rem 0;
    strong {
      font-size: 2.3rem;
      color: ${({ isRed }) => (isRed ? "#CC1034" : "lightgreen")};
      @media (max-width: 760px) {
        font-size: 1.6rem;
      }
    }
    @media (max-width: 760px) {
      font-size: 1.2rem;
    }
  }
  &:not(:last-child) {
    margin-right: 0.8rem;
  }

  @media (max-width: 760px) {
    padding: 0.5rem 1rem;
  }
`;

const InfoBox = ({ title, cases, today, active, isRed, ...props }) => {
  return (
    <StyledBox onClick={props.onClick} active={active} isRed={isRed}>
      <p>
        {title === "Cases" && "Coronavirus"} {title}
      </p>
      <p>
        <strong>{today}</strong>
      </p>
      <p>{cases} Total</p>
    </StyledBox>
  );
};

export default InfoBox;
