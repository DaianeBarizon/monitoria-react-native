import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import getRealm from '../../services/realm';

import Clientes from '../../components/Clientes';

import {Container, Title, Form, Input, Submit, List} from './styles';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [clientes, setClientes] = useState();

  //testando
  useEffect(() => {
    //buscar nossos clientes e salvar alguma informacao
    async function loadClientes() {
      console.log('loadClientes');

      //buscando realm
      const realm = await getRealm();
      console.log('realm', realm.path);
      //fazendo uma query no banco de dados e passando o schema que quero
      const data = realm.objects('Cliente'); //.sorted('nome', true)
      console.log('dadosRealmDB', data);
      setClientes(data);
    }

    loadClientes();
  }, []);

  //funcao vai destrinchar somente os dados que vamos trabalhar
  async function saveClientes(cliente) {
    console.log('saveClientes', cliente, cliente.id, cliente.nome);
    const data = {
      id: cliente.id,
      nome: cliente.nome,
      usuario: cliente.usuario,
      cpf: cliente.cpf,
      email: cliente.email,
      dataNascimento: cliente.dataNascimento,
      rua: cliente.endereco.rua,
      numero: cliente.endereco.numero,
      complemento: cliente.endereco.complemento,
      bairro: cliente.endereco.bairro,
      cidade: cliente.endereco.cidade,
      estado: cliente.endereco.estado,
      cep: cliente.endereco.cep,
    };
    console.log('saveClientes data', data);

    //salva dentro da base de dados //conexao com banco
    const realm = await getRealm();

    //se quiser fazer qualquer alteracao dentro do banco de dados, seja delete, create ou edit no Realm precisa encapsular dentro realm.write
    realm.write(() => {
      console.log('dentro do realm.write', data);
      realm.create('Cliente', data);
    });

    return data;
  }

  async function handleAddClientes() {
    console.log('handleAddClientes', input, typeof input);
    try {
      const response = await api.get(`${input}`);
      console.log('response', response.data);

      //a informacao que vem da api preciso salvar em algum lugar, nesse caso vou salvar no Realm DB
      //chamando outra funcao
      await saveClientes(response.data);

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Title>Clientes</Title>

      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar clientes..."
        />
        <Submit onPress={handleAddClientes}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Clientes data={item} />}
      />
    </Container>
  );
}
