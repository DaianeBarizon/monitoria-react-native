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
