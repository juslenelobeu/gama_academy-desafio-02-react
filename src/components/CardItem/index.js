import React from "react";

import * as S from "./styled";

export default function CardItem(props) {
  return (
    <S.CardItem>
      <S.ImageCard>
        <img src={props.image} alt="" />
      </S.ImageCard>
      <S.TitleItem>{props.title}</S.TitleItem>
      <S.PriceItem>{props.price}</S.PriceItem>
    </S.CardItem>
  );
}
