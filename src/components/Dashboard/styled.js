import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & p {
    font-size: 0.8rem;
    margin: 3rem 0;
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
