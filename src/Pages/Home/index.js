import React from "react";
import Admin from "../../components/Admin";
import Front from "../../components/Products";

import * as S from "./styled";

export default function Home() {
  return (
    <S.Container>
      <Admin />
      <Products />
    </S.Container>
  );
}
