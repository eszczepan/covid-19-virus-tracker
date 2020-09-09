import React from "react";
import styled from "styled-components";
import moment from "moment";

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 1.5rem;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
  border-top: 5px solid ${({ theme }) => theme.primary};
  p {
    white-space: pre-wrap;
    line-height: 3rem;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2,
  h3 {
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const TravelCard = ({ country, message, date }) => {
  const newMessage = message.replaceAll("|", "");
  const newDate = moment(date).format("DD MMMM YYYY");
  return (
    <StyledWrapper>
      <StyledHeader>
        <h2>{country}</h2>
        <h3>{newDate}</h3>
      </StyledHeader>
      <p>{newMessage}</p>
    </StyledWrapper>
  );
};

export default TravelCard;
