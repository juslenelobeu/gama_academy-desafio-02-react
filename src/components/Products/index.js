import React, { useEffect, useState } from "react";

import * as S from "./styled";

export default function Products() {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    const unsubscribe = () => {
      let currentProducts = localStorage.getItem("products");
      if (currentProducts !== null) {
        currentProducts = JSON.parse(currentProducts);
        setListProducts(currentProducts);
      }
    };
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <S.Container>
      <h1>Produtos Cadastrados</h1>
      <S.List>
        {listProducts.map((product) => {
          return (
            <S.CardItem key={product.id}>
              <S.TitleItem>{product.title}</S.TitleItem>
              <S.PriceItem>{product.price}</S.PriceItem>
            </S.CardItem>
          );
        })}
      </S.List>
    </S.Container>
  );
}
