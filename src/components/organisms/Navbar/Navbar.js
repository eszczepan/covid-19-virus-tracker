import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../../routes";
import Logo from "../../atoms/Logo/Logo";
import NavListItem from "../../atoms/NavListItem/NavListItem";

const Nav = styled.nav`
  background-color: white;

  margin-bottom: 2rem;
`;

const StyledWrapper = styled.div`
  max-width: 140rem;
  padding: 2rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  width: 100%;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledWrapper>
        <Logo />
        <StyledList>
          <NavListItem as={NavLink} to={routes.home}>
            Home
          </NavListItem>

          <NavListItem as={NavLink} to={routes.news}>
            Latest News
          </NavListItem>

          <NavListItem as={NavLink} to={routes.info}>
            What is COVID-19
          </NavListItem>
          <NavListItem as={NavLink} to={routes.travel}>
            Travel Information
          </NavListItem>
          <NavListItem as={NavLink} to={routes.about}>
            About
          </NavListItem>
        </StyledList>
      </StyledWrapper>
    </Nav>
  );
};

export default Navbar;
