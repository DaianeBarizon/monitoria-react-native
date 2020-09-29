import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';

export default function App() {
  //2 indices, a primeira com valor inicial e a segunda é uma função que atualiza este valor inicial
  //temos um useState para cada tipo de informação que a gente quer armazenar
  //guardamos pequenos trechos de informações
  const [repositories, setRepositories] = useState([
    {id: '1', name: 'repo-1'},
    {id: '2', name: 'repo-2'},
    {id: '3', name: 'repo-3'},
    {id: '4', name: 'repo-4'},
  ]);

  //primeiro é uma função, ou seja, o corpo do seu conteúdo e a segunda é um array de dependências
  //quais circunstâncias ela deve ser executada
  //se eu passar repositories só vai executar quando a variável repositories alterar
  //posso passar várias variáveis, quando uma alterar a função vai ser executada
  useEffect(() => {
    fetch('https://api.github.com/users/daianebarizon/repos')
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          setRepositories(data);
        });
      })
      .catch(function (err) {
        console.error('Failed retrieving information', err);
      });
  }, []);

  return (
    <>
      <FlatList
        data={repositories}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}
