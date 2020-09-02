import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 30%;
  height: 80vh;
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

const StyledTable = styled.table`
  width: 100%;
`;
const StyledDiv = styled.div`
  height: 50rem;
  overflow: scroll;
  margin: 1.2rem 0;
`;
const StyledTableRow = styled.tr`
  width: 100%;
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.grey100};
  }
  td {
    padding: 0.5rem;
  }
`;

const StyledTableData = styled.td`
  text-align: center;
`;

const SideTable = ({ countries }) => {
  return (
    <StyledWrapper>
      <StyledList>
        <h3>Live Cases by Country</h3>
        <StyledDiv>
          <StyledTable>
            <thead>
              <tr>
                <th>Country</th>
                <th>Cases</th>
              </tr>
            </thead>
            <tbody>
              {countries.map(({ country, cases }) => (
                <StyledTableRow key={country}>
                  <td>{country}</td>
                  <StyledTableData>
                    <strong>{cases}</strong>
                  </StyledTableData>
                </StyledTableRow>
              ))}
            </tbody>
          </StyledTable>
        </StyledDiv>
        <h3>WorldWide new cases</h3>
      </StyledList>
    </StyledWrapper>
  );
};

export default SideTable;
