import React, { useState, useEffect, useContext } from "react";
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
  const [toppings, setToppings] = useState([]);
  const { pizza, handleSelectChange } = useContext(pizzaContext);

  useEffect(() => {
    fetch("http://localhost:4000/toppings")
      .then((res) => res.json())
      .then((toppings) => setToppings(toppings));
  }, []);

  return (
    <>
      <Subtitle>Escolha o sabor</Subtitle>
      <Select
        name="topping"
        value={pizza.topping}
        onChange={handleSelectChange}
      >
        <option value="">Selecione uma opção</option>
        {toppings.map((topping) => (
          <option value={topping}>{topping}</option>
        ))}
      </Select>

      <Stepper
        previousStep={previousStep}
        nextStep={nextStep}
        hasValidValue={!!pizza.topping}
      />
    </>
  );
};

export default ToppingPick;
