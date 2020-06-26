import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Context from "./pizzaContext";

const Container = styled.div`
  background: #333;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = ({ children }) => {
  const [pizza, updatePizza] = useState({
    crust: "",
    size: "",
    sauce: true,
    topping: "",
  });

  const handleSelectChange = (e) => {
    updatePizza({
      ...pizza,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxToggle = (e) => {
    updatePizza({
      ...pizza,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Container>
      <Context.Provider
        value={{ pizza, handleSelectChange, handleCheckboxToggle }}
      >
        <Header />
        <Body>{children}</Body>
      </Context.Provider>
    </Container>
  );
};

export default App;
