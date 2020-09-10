import React from "react";
import styled from "styled-components";
import ColumnTemplate from "../templates/ColumnTemplate";
import { faq } from "../data";
import FaqCard from "../components/molecules/FaqCard/FaqCard";

const StyledHeader = styled.h2`
  text-align: center;
  @media (max-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 1.5rem;
  margin: 2rem 0 4rem;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
  p {
    white-space: pre-wrap;
    line-height: 3rem;
    @media (max-width: 760px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const Info = () => {
  return (
    <ColumnTemplate>
      <StyledHeader>What is COVID-19?</StyledHeader>
      <StyledWrapper>
        <p>
          <strong>Coronavirus disease 2019 (COVID-19)</strong> is an infectious
          disease caused by severe acute respiratory syndrome coronavirus
          2 (SARS-CoV-2). 
          <br />
          It was first identified in
          <strong> December 2019 in Wuhan, Hubei, China</strong> and has
          resulted in an ongoing pandemic. As of 10 September 2020, more than
          27.7 million cases have been reported across 188 countries and
          territories with more than 902,000 deaths; more than 18.7 million
          people have recovered. Common symptoms include fever, cough, fatigue,
          shortness of breath or breathing difficulties, and loss of
          smell and taste. While most people have mild symptoms, some people
          develop acute respiratory distress syndrome (ARDS) possibly
          precipitated by cytokine storm, multi-organ failure, septic shock,
          and blood clots. The incubation period may range from two to fourteen
          days.
          <br />
          <strong>
            The virus is spread primarily via small droplets from coughing,
            sneezing, and talking.
          </strong>
           The droplets are usually not airborne, however those standing in
          close proximity may inhale them and become infected. People may also
          become infected by touching a contaminated surface and then touching
          their face. The transmission may also occur through aerosols that can
          stay suspended in the air for longer periods of time in enclosed
          spaces. It is most contagious during the first three days after the
          onset of symptoms, although spread is possible before symptoms appear,
          and from people who are asymptomatic. The standard method
          of diagnosis is by real-time reverse transcription polymerase chain
          reaction (rRT-PCR) from a nasopharyngeal swab. Chest CT imaging may
          also be helpful for diagnosis in individuals where there is a high
          suspicion of infection based on symptoms and risk factors, however
          guidelines do not recommend using it for routine screening.
          <br />
          <strong>
            Recommended measures to prevent infection include frequent hand
            washing, social distancing, quarantine, covering coughs, and keeping
            unwashed hands away from the face.
          </strong>
           The use of cloth face coverings such as a scarf or a bandana has been
          recommended by health officials in public settings to minimise the
          risk of transmissions, with some authorities requiring their use.
          Health officials also stated that medical-grade face masks, such
          as N95 masks, should be used only by healthcare workers, first
          responders, and those who directly care for infected individuals.
          <br />
          <strong>
            There are no proven vaccines or specific treatments for COVID-19.
          </strong>
           Management involves the treatment of symptoms, supportive
          care, isolation, and experimental measures. The World Health
          Organization (WHO) declared the COVID-19 outbreak a public health
          emergency of international concern (PHEIC) on 30 January 2020 and
          a pandemic on 11 March 2020. Local transmission of the disease has
          occurred in most countries across all six WHO regions. Longer-term
          damage to organs (in particular lungs and heart) has been observed,
          and there is concern about a significant number of patients who have
          recovered from the acute phase of the disease but continue to
          experience a range of effects including severe fatigue, memory loss
          and other cognitive issues, low grade fever, muscle weakness,
          breathlessness and other symptoms for months afterwards.
        </p>
      </StyledWrapper>
      <StyledHeader>FAQ</StyledHeader>
      {faq.map(({ question, answer }) => (
        <FaqCard key={question} question={question} answer={answer} />
      ))}
    </ColumnTemplate>
  );
};

export default Info;
