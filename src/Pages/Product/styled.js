import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  height: 90vh;

  padding: 1rem;

  background: white;

  border-radius: 20px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);

  display: flex;

  @media (max-width: 578px) {
    flex-direction: column;
    width: 90vw;
    height: auto;
  }
`;
