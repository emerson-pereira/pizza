import React from "react";
import styled from "styled-components";

const StyledBody = styled.main`
  padding: 20px;
  text-align: center;

  & > div {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Body = ({ children }) => (
  <StyledBody>
    <div>{children}</div>
  </StyledBody>
);

export default Body;
