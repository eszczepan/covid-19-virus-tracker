import React, { useState, useEffect } from "react";
import TravelTemplate from "../templates/TravelTemplate";
import TravelCard from "../components/molecules/TravelCard/TravelCard";

const Travel = () => {
  const [travelInfo, setTravelInfo] = useState([]);
  useEffect(() => {
    const getTravelData = async () => {
      await fetch("https://api.coronatracker.com/v1/travel-alert")
        .then((response) => response.json())
        .then((data) => setTravelInfo(data));
    };
    getTravelData();
  }, []);
  return (
    <TravelTemplate>
      <h2>Travel Alert Information</h2>
      {travelInfo.map(({ countryName, alertMessage, publishedDate }) => (
        <TravelCard
          country={countryName}
          message={alertMessage}
          date={publishedDate}
        />
      ))}
    </TravelTemplate>
  );
};

export default Travel;
