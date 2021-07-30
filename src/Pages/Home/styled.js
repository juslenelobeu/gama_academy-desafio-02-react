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
  }
`;

export const Section = styled.section`
  width: 75%;
  height: 100%;
  padding: 1rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & header {
    margin-bottom: 2rem;

    & h2 {
      font-size: 1.3rem;
      color: #999;
    }
  }

  @media (min-width: 579px) and (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 578px) {
    width: 100%;
  }
`;
