import React from "react";

import FormProduct from "../../components/FormProduct";
import Menu from "../../components/Menu";

import * as S from "./styled";

export default function Product() {
  return (
    <S.Container>
      <Menu />
      <FormProduct />
    </S.Container>
  );
}
