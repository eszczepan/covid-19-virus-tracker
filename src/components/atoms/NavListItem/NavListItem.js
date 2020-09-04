import styled from "styled-components";

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  list-style: none;
  text-decoration: none;
  color: black;
  :hover {
    background-color: #cc1034;
    color: #fff;
  }
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export default NavListItem;
