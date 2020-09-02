import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 30%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 2rem;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideTable = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <li>
          <h3>USA</h3>
          <p>6 212 174</p>
          <p>3 456 859</p>
          <p>187 742</p>
        </li>
        <li>
          <h3>USA</h3>
          <p>6 212 174</p>
          <p>3 456 859</p>
          <p>187 742</p>
        </li>
        <li>
          <h3>USA</h3>
          <p>6 212 174</p>
          <p>3 456 859</p>
          <p>187 742</p>
        </li>
        <li>
          <h3>USA</h3>
          <p>6 212 174</p>
          <p>3 456 859</p>
          <p>187 742</p>
        </li>
        <li>
          <h3>USA</h3>
          <p>6 212 174</p>
          <p>3 456 859</p>
          <p>187 742</p>
        </li>
      </StyledList>
    </StyledWrapper>
  );
};

export default SideTable;
