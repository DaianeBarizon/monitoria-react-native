/* eslint-disable prettier/prettier */
export default class ClienteSchema {
  //propriedade static sempre vai receber um nome e uma primaryKey
  static schema = {
    name: 'Cliente',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true}, //para tornar muito mais rápido a indexacao
      nome: 'string',
      usuario: 'string',
      cpf: 'string',
      email: 'string',
      dataNascimento: 'date',
      rua: 'string',
      numero: 'string',
      complemento: 'string',
      bairro: 'string',
      cidade: 'string',
      estado: 'string',
      cep: 'string',
    },
  };
}
