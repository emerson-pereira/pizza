import React, { useContext } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
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
      <input
        type="checkbox"
        name="sauce"
        checked={pizza.sauce}
        onChange={handleCheckboxToggle}
      />

      <Stepper previousStep={previousStep} nextStep={nextStep} />
    </>
  );
};

export default SauceCheck;
