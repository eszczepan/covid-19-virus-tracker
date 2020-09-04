import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../../routes";
import Logo from "../../atoms/Logo/Logo";
import NavListItem from "../../atoms/NavListItem/NavListItem";
import BurgerButton from "../../atoms/BurgerButton/BurgerButton";

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
  @media (max-width: 1023px) {
    justify-content: space-between;
  }
`;

const StyledList = styled.ul`
  width: 100%;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1023px) {
    margin: 0 auto;
    padding: 5rem 0 0 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    background-color: white;
    flex-direction: column;
    z-index: 100000;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%)")});
    transition: transform 0.4s ease-in-out;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <StyledWrapper>
        <Logo />
        <BurgerButton onClick={() => setIsOpen(!isOpen)} />
        <StyledList isOpen={isOpen}>
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
