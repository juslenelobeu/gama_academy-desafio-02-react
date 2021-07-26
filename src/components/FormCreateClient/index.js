import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as S from "./styled";

export default function FormCreateClient() {
  const history = useHistory();
  const GotoBack = () => {
    history.push("/");
  };

  const [client, setClient] = useState({
    id: 0,
    name: "",
    cpf: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    uf: "",
  });
  const [clients, setClients] = useState([]);

  const handleInputChange = (event) => {
    setClient({
      ...client,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (client.name === "") {
      setClients((clients) => [...clients, client]);
      setClient({
        id: 0,
        name: "",
        cpf: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        uf: "",
      });
    }
  };
  useEffect(() => {
    const currentClients = JSON.stringify(clients);
    localStorage.setItem("clients", currentClients);
  }, [clients]);

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Button onClick={GotoBack}>Voltar</Button>
          <S.Title>Cadastro de Cliente</S.Title>
        </S.Header>
        <S.Subtitle>
          Preencha os dados abaixo para cadastrar seu produto
        </S.Subtitle>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Nome do produto</label>
          <S.FormGroup>
            <Input
              type="text"
              placeholder="Nome completo"
              name="name"
              value={client.name}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="text"
              placeholder="CPF"
              name="cpf"
              value={client.cpf}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              value={client.email}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="tel"
              placeholder="Telefone"
              name="phone"
              value={client.phone}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="text"
              placeholder="Endereço completo"
              name="address"
              value={client.address}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="text"
              placeholder="Cidade"
              name="city"
              value={client.city}
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="text"
              placeholder="UF"
              name="uf"
              value={client.uf}
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
