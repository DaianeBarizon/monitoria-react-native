import React, {useState, useEffect} from 'react';
import {Container, Text, FlatList, Image, Form, Input} from 'react-native';
import axios from 'axios';
import getRealm from '../../service/realm';
import Button from '../../components/Button/Button';

const Carrinho = () => {
  const [nome, setNome] = useState('');
  const [error, setError] = useState(false);
  const [produtos, setprodutos] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      const realm = await getRealm();
      const data = realm.objects('Produto');
      console.log('data', data);
      setprodutos(data);
    }
    loadProdutos();
  }, []);

  useEffect(() => {
    axios
      .get('http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto')
      .then(function (response) {
        // handle success
        console.log('retorno api', response.data);
        saveProduto(response.data);
      });
  }, []);

  //preparando os dados para salvar na base de dados
  //vai receber o produto como parâmetro
  async function saveProduto(produto) {
    console.log('produto', produto);
    console.log('produto2', produto[0].dataFabricacao);
    const data = {
      dataFabricacao: produto.dataFabricacao,
      descricao: produto.descricao,
      fotoLink: produto.fotoLink,
      id: produto.id,
      idCategoria: produto.idCategoria,
      idFuncionario: produto.idFuncionario,
      nome: produto.nome,
      nomeCategoria: produto.nomeCategoria,
      nomeFuncionario: produto.nomeFuncionario,
      qtdEstoque: produto.qtdEstoque,
      valor: produto.valor,
    };

    console.log('database', data);

    //Conexão com o banco de dados
    const realm = await getRealm();

    //Tudo que fizer aqui vai ser salvo no banco de dados
    realm.write(() => {
      realm.create('Produto', data);
    });
  }

  async function cadastrar() {
    console.log('teste');
  }

  return (
    <Container>
      <Text>Produtos</Text>

      <Form>
        <Input
          value={nome}
          error={error}
          onChangeText={setNome}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Button
          title="Entrar"
          onPress={cadastrar}
          textStyle={{color: '#FFF'}}
          style={{backgroundColor: '#C13355'}}
        />
      </Form>

      <FlatList
        data={produtos}
        renderItem={({item}) => (
          <>
            <Text>{item.nome}</Text>
            <Image
              style={{width: 120, height: 120}}
              source={{
                uri: item.fotoLink,
              }}
            />
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default Carrinho;
