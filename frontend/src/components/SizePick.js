import React, { useContext, useState, useEffect } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
import Select from "./styles/Select";
import pizzaContext from "../pizzaContext";

const previousStep = {
  route: "/crust-pick",
  text: "Escolher massa",
};

const nextStep = {
  route: "/sauce-check",
  text: "Confirmação de molho",
};

const SizePick = () => {
  const [sizes, setSizes] = useState([]);
  const { pizza, handleSelectChange } = useContext(pizzaContext);

  useEffect(() => {
    fetch("http://localhost:4000/sizes")
      .then((res) => res.json())
      .then((sizes) => setSizes(sizes));
  }, []);

  return (
    <>
      <Subtitle>Escolha o tamanho</Subtitle>
      <Select name="size" value={pizza.size} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        {sizes.map((size) => (
          <option value={size}>{size}</option>
        ))}
      </Select>

      <Stepper
        previousStep={previousStep}
        nextStep={nextStep}
        hasValidValue={!!pizza.size}
      />
    </>
  );
};

export default SizePick;
