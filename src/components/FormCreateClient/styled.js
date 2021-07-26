import styled from "styled-components";

const primary = "darkcyan";
const primaryLight = "greenyellow";

export const Container = styled.div`
  width: 30vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: thin solid #666;
  text-align: center;
  padding: 2rem;

  @media (max-width: 578px) {
    height: auto;
  }
  @media (max-height: 550px) {
    height: auto;
  }
`;

export const Header = styled.header`
  height: 20vh;
  margin-bottom: 4rem;

  & button {
    width: 100px;
    padding: 0.5rem;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${primary};
  border: thin solid;
  padding: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-size: 0.9rem;
    text-align: left;
    display: block;
    margin-bottom: 0.5rem;
  }

  & span {
    display: block;
    font-size: 0.7rem;
    margin-top: 1rem;

    & a {
      color: ${primary};

      &:hover {
        color: ${primaryLight};
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.7rem;
`;
