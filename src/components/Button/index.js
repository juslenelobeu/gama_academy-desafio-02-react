import React from "react";

import * as S from "./styled";

export default function Button(props) {
  return <S.Button {...props}>{props.children}</S.Button>;
}
