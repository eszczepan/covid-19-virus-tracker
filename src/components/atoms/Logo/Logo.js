import styled from "styled-components";
import virusIcon from "../../../assets/icons/virusIcon.svg";

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-image: url(${virusIcon});
  background-size: 3rem;
  background-repeat: no-repeat;
  background-position: 1rem 40%;
  padding-left: 5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  @media (max-width: 1023px) {
    background-size: 2rem;
    background-position: 0 40%;
    padding-left: 3rem;
  }
`;

export default Logo;
