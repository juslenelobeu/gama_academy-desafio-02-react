import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as S from "./styled";

export default function FormCreateProduct() {
  const history = useHistory();
  const GotoBack = () => {
    history.push("/");
  };

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
  });
  const [products, setProducts] = useState([]);

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (product.name === "") {
      setProducts((products) => [...products, product]);
      setProduct({
        id: 0,
        title: "",
        price: 0,
      });
    }
  };
  useEffect(() => {
    const currentProducts = JSON.stringify(products);
    localStorage.setItem("products", currentProducts);
  }, [products]);

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Button onClick={GotoBack}>Voltar</Button>
          <S.Title>Cadastro de Produto</S.Title>
        </S.Header>
        <S.Subtitle>
          Preencha os dados abaixo para cadastrar seu produto
        </S.Subtitle>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Nome do produto</label>
          <S.FormGroup>
            <Input
              type="text"
              placeholder="Nome do produto"
              name="title"
              value={product.title}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="price">Preço</label>
            <Input
              type="float"
              placeholder="Preço"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <Button type="submit">Cadastrar</Button>
        </form>
      </S.Content>
      <S.Footer>
        <span>Todos os direitos reservados.</span>
        <span>v1.0</span>
      </S.Footer>
    </S.Container>
  );
}
