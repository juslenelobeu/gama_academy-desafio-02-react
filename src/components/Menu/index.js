import React from "react";

import * as S from "./styled";

export default function Menu() {
  return (
    <S.Aside>
      <h1>Gestão de Cadastro</h1>
      <p>O que deseja fazer?</p>
      <S.Buttons>
        <S.LinkButton type="button" to="/Client">
          Cadastrar Cliente
        </S.LinkButton>
        <S.LinkButton type="button" to="/Product">
          Cadastrar Produto
        </S.LinkButton>
      </S.Buttons>
      <footer>
        <span>Sistema de gestão de e-commerce - v1.0</span>
      </footer>
    </S.Aside>
  );
}
