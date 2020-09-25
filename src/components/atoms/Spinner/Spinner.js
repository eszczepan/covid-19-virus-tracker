import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${spin} 1.4s infinite linear;
  font-size: 0.5rem;
  margin: 4rem auto;
  text-indent: -9999em;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  transform: translateZ(0);
  :before {
    width: 50%;
    height: 50%;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  :after {
    background-color: #f5f5f5;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  ${({ info }) =>
    info &&
    css`
      width: 8rem;
      height: 8rem;
      margin: 0 auto;
      :after {
        background-color: white;
      }
      @media (max-width: 460px) {
        width: 4rem;
        height: 4rem;
      }
    `}
`;

export default Spinner;
