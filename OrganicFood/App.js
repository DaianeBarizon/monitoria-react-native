// Componentes Funcionais
// Antigamente não podia utilizar componentes funcionais para manipular states
// Com hooks podemos manipular states em um componente funcional
// Menos verboso

/*
import React from 'react';
import {Text} from 'react-native';

const App = () => {
  // a única obrigação do componente funcional é retornar um elemento visual no return
  // sempre tem que renderizar um componente na tela
  return <Text>Hello</Text>;
};

export default App;
*/

import React, {useState, useEffect} from 'react';
import {Text, TextInput, FlatList, Button} from 'react-native';
import axios from 'axios';

export default function App() {
  //ao invés de armazenar um único objeto que guarda todo estado que aquele componente pode manipular
  const [myText, setMyText] = useState('Meu Texto');
  const courses = [
    {id: '1', nome: '•React'},
    {id: '2', nome: '•React Native'},
    {id: '3', nome: '•JavaScript'},
    {id: '4', nome: '•Node'},
  ];

  //2 indices, a primeira com valor inicial e a segunda é uma função que atualiza este valor inicial
  //temos um useState para cada tipo de informação que a gente quer armazenar
  //guardamos pequenos trechos de informações
  const [repositories, setRepositories] = useState([
    {id: '1', nome: 'repo-1'},
    {id: '2', nome: 'repo-2'},
    {id: '3', nome: 'repo-3'},
    {id: '4', nome: 'repo-4'},
  ]);

  // const [count, setCount] = useState(4);

  //primeiro é uma função, ou seja, o corpo do seu conteúdo e a segunda é um array de dependências
  //quais circunstâncias ela deve ser executada
  //se eu passar repositories só vai executar quando a variável repositories alterar
  //posso passar várias variáveis, quando uma alterar a função vai ser executada
  useEffect(() => {
    axios
      .get('https://api.github.com/users/daianebarizon/repos')
      .then((response) => {
        console.log('repositories', response.data);
        const nameRepositorie = response.data;
        setRepositories(nameRepositorie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //função dentro de função
  // const handleRepositories = () => {
  //   setCount(count + 1);
  //   setRepositories([
  //     ...repositories,
  //     {id: Math.random(), nome: `repo-${count}`},
  //   ]);
  // };

  return (
    <>
      <Text>Hello</Text>
      <TextInput
        value={myText}
        onChangeText={(text) => {
          setMyText(text);
        }}
      />
      <Text> {myText} </Text>
      <FlatList
        data={courses}
        renderItem={({item}) => <Text>{item.nome}</Text>}
        keyExtractor={(item) => item.id}
      />
      <Text list={courses} />
      <FlatList
        data={repositories}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <Text list={repositories} /> */}
      {/* <Button onPress={handleRepositories} title={'Pressione aqui'} /> */}
    </>
  );
}

// Componentes Classe

/*
import React, {Component} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';

export default class App extends Component {
  state = {
    courses: [
      {id: '1', nome: '•React'},
      {id: '2', nome: '•React Native'},
      {id: '3', nome: '•Java'},
      {id: '4', nome: '•Node'},
    ],
    myText: 'Escrever um texto',
  };
  // a única obrigação do componente classe é retornar um elemento visual no render
  // sempre tem que renderizar um componente na tela

  render() {
    return (
      <View>
        <Text> Hello World! </Text>
        <TextInput
          value={this.state.myText}
          onChangeText={(text) => {
            this.setState({myText: text});
          }}
        />
        <Text> {this.state.myText} </Text>
        <FlatList
          data={this.state.courses}
          renderItem={({item}) => <Text>{item.nome}</Text>}
          keyExtractor={(item) => item.id}
        />
        <Text list={this.state.courses} />
      </View>
    );
  }
}
*/
