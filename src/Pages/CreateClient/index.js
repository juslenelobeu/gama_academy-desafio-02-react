import React from "react";
import Front from "../../components/Front";
import FormCreateClient from "../../components/FormCreateClient";

import * as S from "./styled";

export default function CreateClient() {
  return (
    <S.Container>
      <FormCreateClient />
      <Front />
    </S.Container>
  );
}
