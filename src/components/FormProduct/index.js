import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../Input";
import Button from "../Button";

import * as S from "./styled";

export default function FormProduct() {
  const [product, setProduct] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value !== "") {
      setProduct({
        ...product,
        id: uuidv4(),
        [name]: value,
      });
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const saveProduct = JSON.stringify(product);
    localStorage.setItem("Product", saveProduct);

    setProduct({});
  };

  return (
    <S.Section>
      <header>
        <h1>Cadastro de Produto</h1>
      </header>
      <form onSubmit={onSubmit}>
        <div>
          <S.FormGroup>
            <label htmlFor="title">Nome do Produto:</label>
            <Input
              type="text"
              name="title"
              placeholder="Informe o nome do produto"
              onChange={handleInputChange}
              autoFocus
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="stock">Estoque:</label>
            <Input
              type="number"
              name="stock"
              placeholder="Informe o estoque"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="price">Preço:</label>
            <Input
              type="float"
              name="price"
              placeholder="Informe o preço"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </S.Section>
  );
}
