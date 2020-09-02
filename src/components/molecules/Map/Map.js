import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const Map = () => {
  return (
    <StyledDiv>
      <p style={{ marginTop: "100px" }}>Map</p>
    </StyledDiv>
  );
};

export default Map;
