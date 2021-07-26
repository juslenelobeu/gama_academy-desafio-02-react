import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../Button";
import * as S from "./styled";

export default function Admin() {
  const history = useHistory();
  const GoToCliente = () => {
    history.push("/create-client");
  };
  const GoToProduct = () => {
    history.push("/create-product");
  };

  return (
    <S.Container>
      <S.Title>
        <h1>Sistema de Gestão</h1>
        <span>Para e-Commerce</span>
      </S.Title>
      <p>
        Preencha os campos abaixo para alimentar este demostrativo de e-commerce
      </p>
      <h2>O que deseja cadastrar?</h2>
      <S.Buttons>
        <Button onClick={GoToCliente}>Cadastrar Cliente</Button>
        <Button onClick={GoToProduct}>Cadastrar Produto</Button>
      </S.Buttons>
      <S.Footer>
        <span>Todos os direitos reservados.</span>
        <span>v1.0</span>
      </S.Footer>
    </S.Container>
  );
}
