import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pizzaContext from "../pizzaContext";

const StyledHeader = styled.header`
  padding: 20px;
  text-align: center;
  text-decoration: none;
  background: orangered;
`;

const Title = styled.h1`
  margin: 0;
`;

const PointsFlag = () => (
  <strong>
    <em>Pontos de benefício</em>
  </strong>
);

const Header = () => {
  const { pizza } = useContext(pizzaContext);

  const [special, setSpecial] = useState({
    day: null,
    topping: "",
  });

  useEffect(() => {
    fetch("http://localhost:4000/toppings/special")
      .then((res) => res.json())
      .then(({ topping, day }) => setSpecial({ topping, day }));
  }, []);

  const isSpecial = pizza.topping === special.topping;

  return (
    <StyledHeader>
      <Title>
        <Link to="/">Pizzaiolo</Link>
      </Title>
      {isSpecial && <PointsFlag />}
    </StyledHeader>
  );
};

export default Header;
