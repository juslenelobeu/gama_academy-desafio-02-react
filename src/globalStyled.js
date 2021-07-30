import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  & h1, h2, h3, h4, h5, h6 {

  }

  & body {
    font-family: 'Inter', sans-serif;
    background-color: #171C1B;
    color: #4D4D4D;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;

    @media (max-width: 578px) {
      height: auto;
      padding: 2rem 1rem;
    }
  }
}
`;
