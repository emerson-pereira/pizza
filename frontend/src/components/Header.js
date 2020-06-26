import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 20px;
  border: 1px solid pink;
  display: flex;
  text-decoration: none;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => (
  <StyledHeader>
    <Title>
      <Link to="/">Pizzaiolo</Link>
    </Title>
  </StyledHeader>
);

export default Header;
