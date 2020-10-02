import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Carrinho = () => {
  const [produtos, setprodutos] = useState([]);

  useEffect(() => {
    fetch('http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto')
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          setprodutos(data);
        });
      })
      .catch(function (err) {
        console.error('Failed retrieving information', err);
      });
  }, []);

  const excluir = async (item) => {
    console.log(item.id);
    await axios.delete(
      'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/{id}',
      {
        params: {
          id: item.id,
        },
      },
    );

    const filtered = produtos.filter((el) => {
      return el.id !== item.id;
    });
    setprodutos(filtered);
  };

  // const editar = async (item) => {
  //   console.log(
  //     item.id,
  //     item.nome,
  //     item.descricao,
  //     item.qtdEstoque,
  //     item.valor,
  //     item.idCategoria,
  //     item.nomeCategoria,
  //     item.nomeFuncionario,
  //     item.idFuncionario,
  //     item.dataFabricacao,
  //     item.fotoLink,
  //   );
  //   await axios
  //     .put(
  //       'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/{id}',
  //       {
  //         params: {
  //           dataFabricacao: item.dataFabricacao,
  //           descricao: item.descricao,
  //           fotoLink: item.fotoLink,
  //           id: item.id,
  //           idCategoria: item.idCategoria,
  //           idFuncionario: item.idFuncionario,
  //           nome: 'Cadeira box23',
  //           nomeCategoria: item.nomeCategoria,
  //           nomeFuncionario: item.nomeFuncionario,
  //           qtdEstoque: item.qtdEstoque,
  //           valor: item.valor,
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       console.log('produtos', response.data);
  //       const nameProdEdit = response.data;
  //       setprodutos(nameProdEdit);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  // };

  return (
    <View>
      <Text>Carrinho</Text>
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
            <TouchableOpacity>
              <Text
                style={{backgroundColor: 'red'}}
                onPress={() => excluir(item)}>
                Excluir
              </Text>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Carrinho;
