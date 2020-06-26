import React, { useContext } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
import pizzaContext from "../pizzaContext";

const previousStep = {
  route: "/topping-pick",
  text: "Escolher cobertura",
};

const nextStep = {
  route: "/finish",
  text: "Finalizar",
};

const Confirmation = () => {
  const { pizza } = useContext(pizzaContext);
  const { crust, size, sauce, topping } = pizza;

  return (
    <>
      <Subtitle>Resumo da pizza</Subtitle>

      <p>
        <strong>Massa:</strong> {crust}
      </p>
      <p>
        <strong>Tamanho:</strong> {size}
      </p>
      <p>
        <strong>Molho:</strong> {sauce ? "Sim" : "Não"}
      </p>
      <p>
        <strong>Sabor:</strong> {topping}
      </p>

      <Stepper previousStep={previousStep} nextStep={nextStep} />
    </>
  );
};

export default Confirmation;
