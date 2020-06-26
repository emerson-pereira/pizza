import styled, { css } from "styled-components";

const PrimaryButton = css`
  border: 1px solid #f2f2f2;
  background: #f2f2f2;
  color: #333;
`;

const SecondaryButton = css`
  border: 1px solid #f2f2f2;
  background: transparent;
  color: #f2f2f2;
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }

  ${({ primary, secondary }) => {
    if (primary) return PrimaryButton;
    if (secondary) return SecondaryButton;
  }}
`;

export default Button;
