import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "./styles/Button";

const StyledStepper = styled.section`
  display: flex;
  justify-content: flex-end;

  ${({ hasPreviousStep, hasNextStep }) => {
    if (hasPreviousStep && hasNextStep) {
      return css`
        justify-content: space-between;
      `;
    }
    if (hasPreviousStep)
      return css`
        justify-content: flex-start;
      `;
    if (hasNextStep)
      return css`
        justify-content: flex-end;
      `;
  }}
`;

const Stepper = ({ previousStep, nextStep }) => (
  <StyledStepper hasPreviousStep={!!previousStep} hasNextStep={!!nextStep}>
    {previousStep && (
      <Link to={previousStep.route}>
        <Button secondary>{previousStep.text}</Button>
      </Link>
    )}
    {nextStep && (
      <Link to={nextStep.route}>
        <Button primary>{nextStep.text}</Button>
      </Link>
    )}
  </StyledStepper>
);

export default Stepper;
