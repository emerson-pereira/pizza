import React, { useContext } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
import Checkbox from "./styles/Checkbox";
import pizzaContext from "../pizzaContext";

const previousStep = {
  route: "/size-pick",
  text: "Escolher tamanho",
};

const nextStep = {
  route: "/topping-pick",
  text: "Escolher sabor",
};

const SauceCheck = () => {
  const { pizza, handleCheckboxToggle } = useContext(pizzaContext);

  return (
    <>
      <Subtitle>Confirme o molho</Subtitle>

      <label htmlFor="sauce">
        Deseja molho de tomate?
        <Checkbox
          name="sauce"
          id="sauce"
          checked={pizza.sauce}
          onChange={handleCheckboxToggle}
        />
      </label>

      <Stepper previousStep={previousStep} nextStep={nextStep} />
    </>
  );
};

export default SauceCheck;
