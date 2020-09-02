import React from "react";
import styled from "styled-components";
import LineGraph from "../../molecules/LineGraph/LineGraph";

const StyledWrapper = styled.div`
  width: 30%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 2rem;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const StyledTable = styled.table`
  width: 100%;
`;
const StyledDiv = styled.div`
  height: 50rem;
  overflow: scroll;
  margin-bottom: 3rem;
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
        <StyledTitle>Live Cases by Country</StyledTitle>
        <StyledDiv>
          <StyledTable>
            <thead>
              <tr>
                <th>Country</th>
                <th>Cases</th>
              </tr>
            </thead>
            <tbody>
              {countries.map(({ country, cases, recovered, deaths }) => (
                <StyledTableRow key={country}>
                  <td>{country}</td>
                  <StyledTableData>
                    <strong>{cases}</strong>
                  </StyledTableData>
                  {/* <td>{recovered}</td>
                  <td>{deaths}</td> */}
                </StyledTableRow>
              ))}
            </tbody>
          </StyledTable>
        </StyledDiv>
        <StyledTitle>WorldWide new cases</StyledTitle>
        <LineGraph />
      </StyledList>
    </StyledWrapper>
  );
};

export default SideTable;
