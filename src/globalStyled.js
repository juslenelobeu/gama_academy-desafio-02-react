import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  & h1, h2, h3, h4, h5, h6 {

  }

  & body {
    font-family: 'Inter', sans-serif;
    background-color: whitesmoke;
    color: #666;
  }
}
`;
