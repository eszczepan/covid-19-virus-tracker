import React from "react";
import MainTemplate from "../templates/MainTemplate";
import MainTable from "../components/organisms/MainTable/MainTable";
import SideTable from "../components/organisms/SideTable/SideTable";

const Home = () => {
  return (
    <MainTemplate>
      <MainTable />
      <SideTable />
    </MainTemplate>
  );
};

export default Home;
