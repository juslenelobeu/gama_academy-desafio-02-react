import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  & h1 {
    margin: 2rem 0;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const CardItem = styled.div`
  padding: 1rem;
  background: whitesmoke;
  border-radius: 0.3rem;
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.3rem;
  }
`;

export const TitleItem = styled.h2`
  font-size: 1rem;
`;

export const PriceItem = styled.h3`
  font-size: 1.5rem;
`;
