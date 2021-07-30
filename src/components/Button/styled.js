import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 1rem;

  text-transform: uppercase;
  font-weight: 700;

  background: hsla(167, 100%, 62%, 1);

  border: 0;
  border-radius: 0.3rem;

  cursor: pointer;

  transition: background 0.3s;

  &:hover {
    background: hsla(167, 100%, 32%, 1);
  }
`;
