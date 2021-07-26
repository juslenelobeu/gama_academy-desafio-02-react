import styled from "styled-components";

export const Container = styled.aside`
  width: 20vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: thin solid #666;
  text-align: center;
  padding: 1rem;

  & p {
    font-size: 0.8rem;
  }

  @media (max-width: 578px) {
    height: auto;
  }
  @media (max-height: 550px) {
    height: auto;
  }
`;

export const Title = styled.div`
  border: thin solid;
  padding: 1rem;
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.7rem;
`;
