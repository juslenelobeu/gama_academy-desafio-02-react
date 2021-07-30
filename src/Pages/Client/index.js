import React from "react";
import FormClient from "../../components/FormClient";
import Menu from "../../components/Menu";

import * as S from "./styled";

export default function Client() {
  return (
    <S.Container>
      <Menu />
      <FormClient />
    </S.Container>
  );
}
