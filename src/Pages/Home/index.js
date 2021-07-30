import React from "react";

import Menu from "../../components/Menu";

import * as S from "./styled";

export default function Home() {
  return (
    <S.Container>
      <Menu />
      <S.Section>
        <header>
          <h1>Seja bem vindo(a) ao Sistema de Gestão de Cadastro</h1>
          <h2>Para e-Commerce</h2>
        </header>
        <main>
          <p>Escolha uma opção do menu e efetue seu cadastro.</p>
        </main>
      </S.Section>
    </S.Container>
  );
}
