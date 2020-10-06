// Site Oficial Realm.io
// Banco de dados que fica disponível somente no dispositivo do usuário
// Não serve para compartilhar informações entre dispositivos, para isso a gente precisa de api rest banco de dados offline no dispositivo do usuário

// Exemplos: Despertador  // bloco de notas // Offline Frist calendário do google
// e outras funcionalidades que funciona offline

// Diferença de AsycnStorage e RealmDB

// Os dados, mesmo quando a aplicação tiver conexão com a internet, devem ser armazenados em algum local,
// e esse local é o Banco de Dados, no React Native não há uma gama de opções assim como em uma aplicação Back-end.
// AsycnStorage mais limitado

// RealmDB que se trata de um banco mais robusto capaz de armazenar algumas estruturas de dados,
// permitindo assim a realização de querys para obtenção de dados relacionados.

// O React Native oferece um banco de dados padrão para ser usado, o Async Storage, porém,
// por ele armazenar apenas Strings não há como realizar querys mais complexar envolvendo filtros.

// Para instalar yarn add realm

// 1) Criar Schemas
// para cada representação de tabela no realm a gente precisa de um schema // src > schema
// Schemas que vai definir as colunas, os relacimentos, como eles vão se comportar

export default class ProdutoSchema {
  static schema = {
    name: "Produto",
    primaryKey: "Id",
    properties: {
      DataFabricacao: "date",
      Descricao: "string",
      FotoLink: "string",
      Id: "int",
      IdCategoria: "int",
      IdFuncionario: "int",
      Nome: "string",
      NomeCategoria: "string",
      NomeFuncionario: "string",
      QtdEstoque: "int",
      Valor: "int",
    },
  };
}

// 2) Criar pasta service >> Criar pasta RealmDB
//realm
//conexão com o banco
import Realm from "realm";

import ProdutoSchema from "../schemas/ProdutoSchema";

export default function getRealm() {
  return Realm.open({
    schema: [ProdutoSchema],
  });
}

// Api utilizada
// https://api.github.com/repos/rocketseat/unform

// Verificar se persistiu

// Realm Studio Apple
// Android Studio >> Device File Explorer >> data >> data >> com.realmgithub >> files >> default realm
