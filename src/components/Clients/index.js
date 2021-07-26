import React, { useEffect, useState } from "react";

import * as S from "./styled";

export default function Clients() {
  const [listClients, setListClients] = useState([]);
  useEffect(() => {
    const unsubscribe = () => {
      let currentClients = localStorage.getItem("clients");
      if (currentClients !== null) {
        currentClients = JSON.parse(currentClients);
        setListClients(currentClients);
      }
    };
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <S.Container>
      <h1>Clientes Cadastrados</h1>
      <S.List>
        {listClients.map((client) => {
          return (
            <S.CardItem key={client.id}>
              <S.TitleItem>{client.name}</S.TitleItem>
            </S.CardItem>
          );
        })}
      </S.List>
    </S.Container>
  );
}
