import styled from "styled-components";
import burgerIcon from "../../../assets/icons/burgerIcon.svg";

const BurgerButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: white;
  background-image: url(${burgerIcon});
  border: none;
  outline-width: 0;
  cursor: pointer;
  z-index: 200000;
  @media (min-width: 1023px) {
    display: none;
  }
`;

export default BurgerButton;
