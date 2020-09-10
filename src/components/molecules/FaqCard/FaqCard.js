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
      border-left: 3px solid ${({ theme }) => theme.tertiraty};
      transition: all 0.1s ease;
    }
    button {
      font-size: ${({ theme }) => theme.fontSize.l};
      width: 2.5rem;
      height: 2.5rem;
      background-color: white;
      color: ${({ theme }) => theme.tertiraty};
      border: 1px solid ${({ theme }) => theme.tertiraty};
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
    }
  }
  .question {
    color: ${({ theme }) => theme.tertiraty};
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  .answer {
    display: none;
    padding: 2rem 0 0;
    border-top: 1px solid ${({ theme }) => theme.tertiraty};
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
