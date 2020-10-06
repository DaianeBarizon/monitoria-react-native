import React from 'react';

import {Container, Name, Description} from './styles';

export default function Clientes({data}) {
  console.log('dataComponent', data.item);
  return (
    <Container>
      <Name>
        {data.item.id} {data.item.nome}
      </Name>
      <Description>{data.item.cpf}</Description>
      <Description>{data.item.dataNascimento.toString()}</Description>
      <Description>{data.item.email}</Description>
      <Description>{data.item.rua}</Description>
    </Container>
  );
}
