import React, {useState} from 'react';
import {Container, Text, FlatList, Image, Form, Input} from 'react-native';
import axios from 'axios';
import Button from '../../components/Button/Button';

const Carrinho = () => {
  const [nome, setNome] = useState('');
  const [error, setError] = useState(false);
  const [produtos, setprodutos] = useState([]);

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
          onPress={() => false()}
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
