import styled from "styled-components";

export const Section = styled.section`
  width: 75%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & header {
    text-align: center;
    margin-bottom: 2rem;

    & h2 {
      font-size: 1.3rem;
      color: #999;
    }
  }

  & form {
    width: 80%;
    margin-inline: auto;

    & div {
      width: 100%;
      display: flex;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    & button {
      margin-top: 1rem;
    }

    @media (max-width: 578px) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 579px) and (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 578px) {
    width: 100%;
    padding: 0;
    margin: 1rem 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  & label {
    font-size: 0.8rem;
    font-weight: 700;
  }

  & select {
    width: 100%;
    padding: 0.8rem;
    background: #f4f4f4;

    border: thin solid #eee;
    border-radius: 0.3rem;

    outline: none;
  }
`;
