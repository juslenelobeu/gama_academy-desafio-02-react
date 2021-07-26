import React from "react";
import Admin from "../../components/Admin";
import Front from "../../components/Front";

import * as S from "./styled";

export default function Home() {
  return (
    <S.Container>
      <Admin />
      <Front />
    </S.Container>
  );
}
