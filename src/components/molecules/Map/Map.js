import React from "react";
import styled from "styled-components";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  .leaflet-container {
    height: 100%;
  }
  @media (max-width: 1023px) {
    height: 50vh;
  }
`;

const Map = ({ center, zoom }) => {
  return (
    <StyledDiv>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    </StyledDiv>
  );
};

export default Map;
