import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../Input";
import Button from "../Button";

import * as S from "./styled";

export default function FormClient() {
  const [client, setClient] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value !== "") {
      setClient({
        ...client,
        id: uuidv4(),
        [name]: value,
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const saveClient = JSON.stringify(client);
    localStorage.setItem("Client", saveClient);

    setClient({});
  };

  return (
    <S.Section>
      <header>
        <h1>Cadastro de Cliente</h1>
      </header>
      <form onSubmit={onSubmit}>
        <div>
          <S.FormGroup>
            <label htmlFor="name">Nome Completo:</label>
            <Input
              type="text"
              name="name"
              placeholder="Informe o nome completo"
              onChange={handleInputChange}
              autoFocus
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="email">E-mail:</label>
            <Input
              type="email"
              name="email"
              placeholder="Informe o melhor e-mail"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="phone">Telefone:</label>
            <Input
              type="number"
              name="phone"
              placeholder="Telefone"
              maxLength="11"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
        </div>
        <div>
          <S.FormGroup>
            <label htmlFor="address">Endereço Completo:</label>
            <Input
              type="text"
              name="address"
              placeholder="Endereço com Nº"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="district">Bairro:</label>
            <Input
              type="text"
              name="district"
              placeholder="Informe o bairro"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="zipCode">CEP:</label>
            <Input
              type="number"
              name="zipCode"
              placeholder="00000-000"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
        </div>
        <div>
          <S.FormGroup>
            <label htmlFor="city">Cidade:</label>
            <Input
              type="text"
              name="city"
              placeholder="Nome da Cidade"
              onChange={handleInputChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="state">Estado:</label>
            <select name="state" required onChange={handleInputChange}>
              <option>Selecione o Estado (UF)</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
            </select>
          </S.FormGroup>
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </S.Section>
  );
}
