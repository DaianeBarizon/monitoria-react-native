// Componentes Funcionais
// Antigamente não podia utilizar componentes funcionais para manipular states
// Com hooks podemos manipular states em um componente funcional
// Menos verboso
import React from 'react';
import {Text} from 'react-native';

const App = () => {
  // a única obrigação do componente funcional é retornar um elemento visual no return
  // sempre tem que renderizar um componente na tela
  return <Text>Hello</Text>;
};

export default App;

/////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

// Componentes Classe

import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class App extends Component {
  // a única obrigação do componente classe é retornar um elemento visual no render
  // sempre tem que renderizar um componente na tela
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';

export default class App extends Component {
  state = {
    myText: 'Escrever um texto',
    courses: [
      {id: '1', nome: '•React'},
      {id: '2', nome: '•React Native'},
      {id: '3', nome: '•Java'},
      {id: '4', nome: '•Node'},
    ],
  };

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
        <Text>{this.state.myText}</Text>
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

/////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';

export default function App() {
  const [myText, setMyText] = useState('Meu Texto');
  const courses = [
    {id: '1', nome: '•React'},
    {id: '2', nome: '•React Native'},
    {id: '3', nome: '•JavaScript'},
    {id: '4', nome: '•Node'},
  ];

  return (
    <View>
      <Text></Text>
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
    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import {Text, TextInput, FlatList} from 'react-native';

export default function App() {
  //ao invés de armazenar um único objeto que guarda todo estado que aquele componente pode manipular
  const [myText, setMyText] = useState('Meu Texto');
  const courses = [
    {id: '1', nome: '•React'},
    {id: '4', nome: '•Node'},
  ];

  return (
    <>
      <Text>{myText}</Text>
      <TextInput
        value={myText}
        onChangeText={(text) => {
          setMyText(text);
        }}
      />
      <FlatList
        data={courses}
        renderItem={({item}) => <Text>{item.nome}</Text>}
        keyExtractor={(item) => item.id}
      />
      <Text list={courses} />
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import {Text, FlatList, Button} from 'react-native';

export default function App() {
  //2 indices, a primeira com valor inicial e a segunda é uma função que atualiza este valor inicial
  //temos um useState para cada tipo de informação que a gente quer armazenar
  //guardamos pequenos trechos de informações
  const [repositories, setRepositories] = useState([
    {id: '1', nome: 'repo-1'},
    {id: '2', nome: 'repo-2'},
    {id: '3', nome: 'repo-3'},
    {id: '4', nome: 'repo-4'},
  ]);
  const [count, setCount] = useState(5);

  //função dentro de função
  const handleRepositories = () => {
    setCount(count + 1);
    setRepositories([
      ...repositories,
      {id: Math.random(), nome: `repo-${count}`},
    ]);
  };

  return (
    <>
      <FlatList
        data={repositories}
        renderItem={({item}) => <Text>{item.nome}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text list={repositories} />
      <Button onPress={handleRepositories} title={'Pressione aqui'} />
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////

import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import axios from 'axios';

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
  //Nesse caso eu carrego uma informação assim que o meu componente é montado em tela
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

/////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////
