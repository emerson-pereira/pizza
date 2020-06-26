import React, { useContext } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
import Select from "./styles/Select";
import pizzaContext from "../pizzaContext";

const previousStep = {
  route: "/sauce-check",
  text: "Confirmação de molho",
};

const nextStep = {
  route: "/confirmation",
  text: "Revisão",
};

const ToppingPick = () => {
  const { pizza, handleSelectChange } = useContext(pizzaContext);

  return (
    <>
      <Subtitle>Escolha o sabor</Subtitle>
      <Select
        name="topping"
        value={pizza.topping}
        onChange={handleSelectChange}
      >
        <option value="">Selecione uma opção</option>
        <option value="Cheese">Cheese</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Margherita">Margherita</option>
      </Select>

      <Stepper previousStep={previousStep} nextStep={nextStep} />
    </>
  );
};

export default ToppingPick;
