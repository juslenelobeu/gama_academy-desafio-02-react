import React from "react";
import Front from "../../components/Front";
import FormCreateProduct from "../../components/FormCreateProduct";

import * as S from "./styled";

export default function CreateProduct() {
  return (
    <S.Container>
      <FormCreateProduct />
      <Front />
    </S.Container>
  );
}
