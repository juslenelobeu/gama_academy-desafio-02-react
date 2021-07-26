import React from "react";
import Products from "../../components/Products";
import FormCreateProduct from "../../components/FormCreateProduct";

import * as S from "./styled";

export default function CreateProduct() {
  return (
    <S.Container>
      <FormCreateProduct />
      <Products />
    </S.Container>
  );
}
