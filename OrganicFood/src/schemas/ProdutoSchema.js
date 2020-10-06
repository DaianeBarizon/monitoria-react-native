export default class ProdutoSchema {
  static schema = {
    name: 'Produto',
    primaryKey: 'Id',
    properties: {
      DataFabricacao: 'date',
      Descricao: 'string',
      FotoLink: 'string',
      Id: 'int',
      IdCategoria: 'int',
      IdFuncionario: 'int',
      Nome: 'string',
      NomeCategoria: 'string',
      NomeFuncionario: 'string',
      QtdEstoque: 'int',
      Valor: 'int',
    },
  };
}
