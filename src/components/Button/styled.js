import styled from "styled-components";

const dark = "#323232";
const primary = "darkcyan";
const primaryLight = "greenyellow";

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${primary};
  border-radius: 0.2rem;
  border: none;
  text-transform: uppercase;
  color: white;
  cursor: pointer;

  &:hover {
    background: ${primaryLight};
    color: ${dark};
  }
`;
