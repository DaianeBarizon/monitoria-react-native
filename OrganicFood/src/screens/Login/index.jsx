/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/TextInput/TextInput';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  //salvar uma informação

  const salvar = async () => {
    const usuario = {
      email,
      senha,
    };

    try {
      const jsonValue = JSON.stringify(usuario);
      await AsyncStorage.setItem('usuario', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const mostrar = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('usuario');
      const usuario = JSON.parse(jsonValue);
      console.log(usuario);
    } catch (e) {
      // error reading value
    }
  };

  // async function mostrar() {
  //   const json = await AsyncStorage.getItem('usuario');
  //   const usuario = JSON.parse(json);
  //   console.log(usuario);
  // }

  async function deletar() {
    await AsyncStorage.removeItem('usuario');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTxt}>
        <Text style={styles.txtTitle}>
          Organic <Text style={styles.txtSecondTitle}>Food</Text>
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/image/menina.png')}
        />
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.containerInput}>
          <Input value={email} placeholder={'Email'} setValue={setEmail} />
          <Input value={senha} placeholder={'Senha'} setValue={setSenha} />
        </View>
        <Button
          title="Entrar"
          onPress={salvar}
          textStyle={{color: '#FFF'}}
          style={{backgroundColor: '#C13355'}}
        />
        <Button
          title="Mostrar"
          onPress={mostrar}
          textStyle={{color: '#FFF'}}
          style={{backgroundColor: '#323224'}}
        />
        <Button
          title="Deletar"
          onPress={deletar}
          textStyle={{color: '#FFF'}}
          style={{backgroundColor: '#323224'}}
        />
        <Button
          title="Criar conta"
          onPress={() => false}
          textStyle={{color: '#6F6F6F'}}
          style={{
            backgroundColor: '#FFF',
            borderColor: '#6F6F6F',
            borderWidth: 2,
          }}
        />
        <TouchableOpacity onPress={() => false}>
          <Text style={styles.primaryPart}>
            Esqueceu sua senha?{' '}
            <Text style={styles.secondPart}>Lembrar senha</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
