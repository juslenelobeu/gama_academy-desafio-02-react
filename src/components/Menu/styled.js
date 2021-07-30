import styled from "styled-components";
import { Link } from "react-router-dom";

export const Aside = styled.aside`
  width: 25%;
  height: 100%;

  padding: 1rem;

  background: #171c1b;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.1);

  border-radius: 20px;

  text-align: center;
  color: whitesmoke;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & span {
    font-size: 0.7rem;
    opacity: 0.5;
  }

  @media (min-width: 579px) and (max-width: 768px) {
    width: 40%;
    min-height: 600px;
  }

  @media (max-width: 578px) {
    width: 100%;
    order: 2;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const LinkButton = styled(Link)`
  width: 100%;
  padding: 1rem;

  text-transform: uppercase;
  text-decoration: none;
  color: #171c1b;
  font-weight: 700;
  font-size: 0.8rem;

  background: hsla(167, 100%, 62%, 1);

  border: 0;
  border-radius: 0.3rem;

  cursor: pointer;

  transition: background 0.3s;

  &:hover {
    background: hsla(167, 100%, 32%, 1);
  }
`;
