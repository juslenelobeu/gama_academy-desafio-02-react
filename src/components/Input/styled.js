import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: #f4f4f4;

  border: thin solid #eee;
  border-radius: 0.3rem;

  outline: none;

  &::placeholder {
    font-family: "Inter", sans-serif;
    filter: opacity(0.5);
    font-size: 0.8rem;
  }
`;
