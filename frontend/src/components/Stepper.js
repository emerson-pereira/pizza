import React from "react";
import styled, { css } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Button from "./styles/Button";
import pizzaContext from "../pizzaContext";

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

const Stepper = ({ previousStep, nextStep, hasValidValue = true }) => {
  const history = useHistory();

  const handleNextStepClick = () => {
    hasValidValue && history.push(nextStep.route);
    !hasValidValue && alert("Escolha uma opção antes de prosseguir");
  };

  return (
    <StyledStepper hasPreviousStep={!!previousStep} hasNextStep={!!nextStep}>
      {previousStep && (
        <Link to={previousStep.route}>
          <Button secondary>{previousStep.text}</Button>
        </Link>
      )}
      {nextStep && (
        <Button primary onClick={handleNextStepClick}>
          {nextStep.text}
        </Button>
      )}
    </StyledStepper>
  );
};
export default Stepper;
