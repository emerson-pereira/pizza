import React, { useContext } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
import Select from "./styles/Select";
import pizzaContext from "../pizzaContext";

const nextStep = {
  route: "/size-pick",
  text: "Escolher tamanho",
};

const CrustPick = () => {
  const { pizza, handleSelectChange } = useContext(pizzaContext);

  return (
    <>
      <Subtitle>Escolha a massa</Subtitle>
      <Select name="crust" value={pizza.crust} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        <option value="Regular">Regular</option>
        <option value="Thin">Thin</option>
        <option value="Cheese">Cheese</option>
      </Select>

      <Stepper nextStep={nextStep} hasValidValue={!!pizza.crust} />
    </>
  );
};

export default CrustPick;
