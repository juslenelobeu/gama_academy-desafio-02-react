import React from "react";
import Clients from "../../components/Clients";
import FormCreateClient from "../../components/FormCreateClient";

import * as S from "./styled";

export default function CreateClient() {
  return (
    <S.Container>
      <FormCreateClient />
      <Clients />
    </S.Container>
  );
}
