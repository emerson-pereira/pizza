import React, { useContext } from "react";
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
  const { pizza, handleSelectChange } = useContext(pizzaContext);

  return (
    <>
      <Subtitle>Escolha o tamanho</Subtitle>
      <Select name="size" value={pizza.size} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="X-Large">X-Large</option>
      </Select>

      <Stepper previousStep={previousStep} nextStep={nextStep} />
    </>
  );
};

export default SizePick;
