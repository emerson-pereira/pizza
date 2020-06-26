import React, { useState, useEffect, useContext } from "react";
import Stepper from "./Stepper";
import Subtitle from "./styles/Subtitle";
import Select from "./styles/Select";
import pizzaContext from "../pizzaContext";

const nextStep = {
  route: "/size-pick",
  text: "Escolher tamanho",
};

const CrustPick = () => {
  const [crusts, setCrusts] = useState([]);
  const { pizza, handleSelectChange } = useContext(pizzaContext);

  useEffect(() => {
    fetch("http://localhost:4000/crusts")
      .then((res) => res.json())
      .then((crusts) => setCrusts(crusts));
  }, []);

  return (
    <>
      <Subtitle>Escolha a massa</Subtitle>
      <Select name="crust" value={pizza.crust} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        {crusts.map((crust) => (
          <option key={crust} value={crust}>
            {crust}
          </option>
        ))}
      </Select>

      <Stepper nextStep={nextStep} hasValidValue={!!pizza.crust} />
    </>
  );
};

export default CrustPick;
