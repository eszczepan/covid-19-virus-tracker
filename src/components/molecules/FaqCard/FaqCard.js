import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 0 1rem;
  margin-top: 1.5rem;
  .header {
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    :hover {
      border-left: 3px solid ${({ theme }) => theme.tertiary};
      transition: all 0.1s ease;
    }
    button {
      font-size: ${({ theme }) => theme.fontSize.l};
      min-width: 25px;
      height: 25px;
      margin-left: 1rem;
      background-color: white;
      color: ${({ theme }) => theme.tertiary};
      border: 1px solid ${({ theme }) => theme.tertiary};
      border-radius: 50%;
      outline: none;
      cursor: pointer;
    }
  }
  p {
    padding: 1rem;
    line-height: 3rem;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
      padding: 0.5rem;
    }
  }
  .question {
    color: ${({ theme }) => theme.tertiary};
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media (max-width: 460px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  .answer {
    display: none;
    padding: 2rem 0 0;
    border-top: 1px solid ${({ theme }) => theme.tertiary};
    white-space: pre-wrap;
  }
  .open {
    display: block;
  }
`;

const FaqCard = ({ answer, question }) => {
  const handleClick = (e) => {
    const card = e.currentTarget.parentElement;
    const answer = card.querySelector(".answer");
    answer.classList.toggle("open");
  };

  return (
    <StyledWrapper>
      <div className="header" onClick={handleClick}>
        <p className="question">{question}</p>
        <button>+</button>
      </div>
      <p className="answer">{answer}</p>
    </StyledWrapper>
  );
};

export default FaqCard;
